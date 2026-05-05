const InterviewQuestion = require("../models/interviewQuestion.model");
const Assessment = require("../models/assesment.model");
const { GoogleGenerativeAI } = require("@google/generative-ai");
const Groq = require("groq-sdk");

// GET all questions with optional filtering
exports.getQuestions = async (req, res) => {
  try {
    const { category, search } = req.query;
    let query = {};
    if (category && category !== "all") {
      query.category = category;
    }
    if (search) {
      query.question = { $regex: search, $options: "i" };
    }
    const questions = await InterviewQuestion.find(query);
    res.status(200).json(questions);
  } catch (error) {
    res.status(500).json({ message: "Error fetching questions", error: error.message });
  }
};

// POST a new assessment (simulation result)
exports.saveAssessment = async (req, res) => {
  try {
    const { userId, score, questions, category, improvementTips } = req.body;
    
    const newAssessment = new Assessment({
      userId,
      score,
      questions,
      category,
      improvementTips
    });

    const saved = await newAssessment.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(400).json({ message: "Error saving assessment", error: error.message });
  }
};

// GET user analytics
exports.getAnalytics = async (req, res) => {
  try {
    const { userId } = req.params;
    const assessments = await Assessment.find({ userId }).sort({ createdAt: -1 });
    
    // Calculate basic analytics
    const totalSessions = assessments.length;
    const avgScore = totalSessions > 0 
      ? Math.round(assessments.reduce((acc, curr) => acc + curr.score, 0) / totalSessions)
      : 0;

    res.status(200).json({
      overallScore: avgScore,
      totalSessions,
      history: assessments.map(a => ({
        date: a.createdAt.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
        score: a.score,
        type: a.category
      }))
    });
  } catch (error) {
    res.status(500).json({ message: "Error fetching analytics", error: error.message });
  }
};

// Real-time AI Chat logic
exports.chatWithAI = async (req, res) => {
  try {
    const { message, history } = req.body;
    const groqKey = process.env.GROQ_API_KEY;
    const geminiKey = process.env.GEMINI_API_KEY;

    let aiReply;

    // TRY GROQ FIRST (Faster and more reliable)
    if (groqKey) {
      try {
        console.log("Using Groq AI Engine...");
        const groq = new Groq({ apiKey: groqKey });
        
        // Format history for Groq (OpenAI format)
        const messages = [
          {
            role: "system",
            content: "You are Sarah Mitchell, a professional AI Interviewer at AI CarrerHub. Conduct a realistic interview. Be professional, encouraging, but firm. Ask one question at a time. React to the candidate's previous answer. If this is the start, greet them and ask the first question."
          },
          ...history.map(h => ({
            role: h.role === "ai" ? "assistant" : "user",
            content: h.text
          })),
          { role: "user", content: message }
        ];

        const completion = await groq.chat.completions.create({
          messages: messages,
          model: "llama-3.3-70b-versatile",
          temperature: 0.7,
          max_tokens: 500,
        });

        aiReply = completion.choices[0]?.message?.content;
      } catch (groqError) {
        console.error("Groq failed:", groqError.message);
      }
    }

    // FALLBACK TO GEMINI IF GROQ NOT CONFIGURED OR FAILED
    if (!aiReply && geminiKey) {
      try {
        console.log("Trying Gemini AI Engine (Fallback)...");
        const genAI = new GoogleGenerativeAI(geminiKey);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        
        // Format history for Gemini
        let chatHistory = [];
        if (history && Array.isArray(history)) {
          history.forEach(h => {
            const role = h.role === "ai" ? "model" : "user";
            if (chatHistory.length === 0 && role === "model") return;
            chatHistory.push({ role, parts: [{ text: h.text }] });
          });
        }

        const chat = model.startChat({ history: chatHistory });
        const result = await chat.sendMessage(message);
        const response = await result.response;
        aiReply = response.text();
      } catch (geminiError) {
        console.error("Gemini failed:", geminiError.message);
      }
    }

    // FINAL FALLBACK (MOCK RESPONSE)
    if (!aiReply) {
      console.log("Using Mock Response (No API Keys Working)");
      const fallbacks = [
        "That's a great point. Can you tell me more about how you'd apply that in a real-world project?",
        "I see. What was the most challenging part of that for you?",
        "Interesting. Now, how do you handle tight deadlines and project pressure?",
        "Could you elaborate on how you worked with your team in that scenario?"
      ];
      aiReply = fallbacks[Math.floor(Math.random() * fallbacks.length)];
    }

    res.status(200).json({ reply: aiReply });
  } catch (error) {
    console.error("Chat Error:", error);
    res.status(500).json({ message: "AI Error", error: error.message });
  }
};


// POST generate questions from resume
exports.generateQuestionsFromResume = async (req, res) => {
  console.log("--- New Resume Upload Request ---");
  try {
    if (!req.file) {
      console.log("No file received");
      return res.status(400).json({ message: "Please upload a resume file (PDF)" });
    }
    console.log("File received:", req.file.originalname, "Size:", req.file.size);

    // Parse PDF
    const dataBuffer = req.file.buffer;
    const pdfParse = require("pdf-parse/lib/pdf-parse.js");
    const pdfData = await pdfParse(dataBuffer);
    
    const resumeText = pdfData.text;
    console.log("Resume Text Extracted:", resumeText.substring(0, 100) + "...");

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return res.status(200).json([
        {
          id: "r1",
          category: "Resume Analysis",
          difficulty: "Medium",
          question: "How did you handle the challenges in your most recent project?",
          answer: "Focus on technical hurdles and problem-solving.",
          time: "5 mins"
        }
      ]);
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `Analyze this resume and generate 5 interview questions as a JSON array: ${resumeText}`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    let text = response.text().replace(/```json/g, "").replace(/```/g, "").trim();
    res.status(200).json(JSON.parse(text));

  } catch (error) {
    console.error("Resume Generation Error:", error);
    res.status(500).json({ message: "Error generating questions", error: error.message });
  }
};

// POST Analyze the entire interview session
exports.analyzeSession = async (req, res) => {
  try {
    const { userId, history, category } = req.body;
    const groqKey = process.env.GROQ_API_KEY;

    if (!history || history.length < 2) {
      return res.status(400).json({ message: "Not enough conversation history to analyze." });
    }

    const prompt = `Analyze this interview conversation between an AI Interviewer and a Candidate.
    Conversation History:
    ${history.map(h => `${h.role === 'ai' ? 'Interviewer' : 'Candidate'}: ${h.text}`).join('\n')}

    Please provide a structured performance analysis in JSON format exactly like this:
    {
      "overallScore": number (0-100),
      "categories": [
        { "name": "Technical Knowledge", "score": number },
        { "name": "Communication Skills", "score": number },
        { "name": "Problem Solving", "score": number },
        { "name": "Confidence", "score": number }
      ],
      "strengths": ["strength1", "strength2", "strength3"],
      "improvements": ["improvement1", "improvement2", "improvement3"],
      "summary": "short summary paragraph"
    }
    Only return the JSON.`;

    let analysis;
    if (groqKey) {
      const groq = new Groq({ apiKey: groqKey });
      const completion = await groq.chat.completions.create({
        messages: [{ role: "user", content: prompt }],
        model: "llama-3.3-70b-versatile",
        response_format: { type: "json_object" }
      });
      analysis = JSON.parse(completion.choices[0]?.message?.content);
    } else {
      // Mock analysis if no key
      analysis = {
        overallScore: 75,
        categories: [
          { name: "Technical Knowledge", score: 80 },
          { name: "Communication Skills", score: 70 },
          { name: "Problem Solving", score: 85 },
          { name: "Confidence", score: 65 }
        ],
        strengths: ["Clear technical explanations", "Logical thinking"],
        improvements: ["Maintain more consistent eye contact", "Structure answers using STAR method"],
        summary: "Solid performance overall, with room for growth in communication structure."
      };
    }

    // Save to DB
    const newAssessment = new Assessment({
      userId,
      user: userId,
      score: analysis.overallScore,
      category: category || "technical",
      improvementTips: JSON.stringify(analysis), // Storing the full JSON for now
      questions: history.filter(h => h.role === "ai").map(h => ({
        question: h.text,
        userAnswer: "See history", // In a real app, you'd match these up better
      }))
    });

    await newAssessment.save();
    res.status(200).json(analysis);
  } catch (error) {
    console.error("Analysis Error:", error);
    res.status(500).json({ message: "Analysis Error", error: error.message });
  }
};
