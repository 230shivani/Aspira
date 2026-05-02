const { GoogleGenAI } = require("@google/genai");
const { resumerBasedQuestionsPrompt, questionAnswerPrompt } = require("../utils/prompts");
const fs = require("fs");
const path = require("path");
const pdfParse = require("pdf-parse");

let ai = null;

if (process.env.GEMINI_API_KEY) {
  ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
  });
}

const extractTextFromPDF = async (filePath) => {
  try {
    const dataBuffer = fs.readFileSync(filePath);
    const data = await pdfParse(dataBuffer);
    return data.text || "";
  } catch (error) {
    console.error("PDF parsing error:", error);
    throw new Error("Could not parse PDF");
  }
};

const generateInterviewQuestionsFromResume = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No resume uploaded" });
    }

    if (!ai) {
      return res.status(500).json({ message: "AI service not configured. Please set GEMINI_API_KEY in environment variables." });
    }

    const filePath = req.file.path;
    const { numberOfQuestions = 10 } = req.body;

    let resumeText = "";
    try {
      resumeText = await extractTextFromPDF(filePath);
    } catch (pdfError) {
      console.error("PDF extraction error:", pdfError);
      return res.status(400).json({
        message: "Could not extract text from PDF. Please ensure the PDF is valid.",
      });
    }

    if (!resumeText || resumeText.trim().length === 0) {
      return res.status(400).json({
        message: "Could not extract text from PDF",
      });
    }

    const prompt = resumerBasedQuestionsPrompt(resumeText, numberOfQuestions);

    let response;
    try {
      response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: prompt,
      });
    } catch (aiError) {
      // Log error without exposing sensitive information
      const errorMessage = aiError.message || "Unknown error";
      const isApiKeyError = errorMessage.includes("API_KEY_INVALID") || errorMessage.includes("API key not valid");
      
      if (isApiKeyError) {
        console.error("Gemini API error: Invalid API key configuration");
      } else {
        console.error("Gemini API error:", errorMessage.substring(0, 100));
      }
      
      if (errorMessage.includes("429")) {
        return res.status(200).json({
          questions: [
            {
              question: "Tell me about your professional experience.",
              answer: "Share relevant projects and technologies you have worked with.",
            },
            {
              question: "What are your key technical skills?",
              answer: "List the programming languages, frameworks, and tools mentioned in your resume.",
            },
            {
              question: "Describe a challenging project you worked on.",
              answer: "Explain the problem, your approach, and the technologies used.",
            },
          ],
        });
      }
      throw aiError;
    }

    const rawText = response?.text || "";

    const cleanedText = rawText
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    let data;
    try {
      data = JSON.parse(cleanedText);
    } catch (parseError) {
      console.error("JSON parse error:", parseError);
      return res.status(200).json({
        questions: [
          {
            question: "Tell me about your professional experience.",
            answer: "Share relevant projects and technologies you have worked with.",
          },
          {
            question: "What are your key technical skills?",
            answer: "List the programming languages, frameworks, and tools mentioned in your resume.",
          },
          {
            question: "Describe a challenging project you worked on.",
            answer: "Explain the problem, your approach, and the technologies used.",
          },
        ],
      });
    }

    const questions = Array.isArray(data) ? data : data?.questions || [];

    if (questions.length === 0) {
      return res.status(200).json({
        questions: [
          {
            question: "Tell me about your professional experience.",
            answer: "Share relevant projects and technologies you have worked with.",
          },
        ],
      });
    }

    res.status(200).json({ questions });
  } catch (error) {
    const errorMessage = error.message || "Unknown error";
    const isApiKeyError = errorMessage.includes("API_KEY_INVALID") || errorMessage.includes("API key");
    
    if (isApiKeyError) {
      console.error("Interview generation error: Invalid API key");
    } else {
      console.error("Interview generation error:", errorMessage.substring(0, 100));
    }

    res.status(500).json({
      message: "Failed to generate interview questions. Please try again later.",
    });
  }
};

const generateInterviewQuestions = async (req, res) => {
  try {
    const { role, experience, topicsToFocus, numberOfQuestions } = req.body;

    if (!role || !experience || !topicsToFocus || !numberOfQuestions) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    if (!ai) {
      return res.status(500).json({ message: "AI service not configured. Please set GEMINI_API_KEY." });
    }

    const prompt = questionAnswerPrompt(
      role,
      experience,
      topicsToFocus,
      numberOfQuestions
    );

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
    });

    const rawText = response?.text || "";

    const cleanedText = rawText
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    let data;
    try {
      data = JSON.parse(cleanedText);
    } catch (parseError) {
      console.error("JSON parse error:", parseError);
      const fallbackQuestions = [
        { question: "What is your experience with " + topicsToFocus + "?", answer: "Relevant experience and expertise." },
        { question: "Tell me about a project you worked on using " + topicsToFocus, answer: "Description of relevant project." },
        { question: "What are the key concepts in " + topicsToFocus + "?", answer: "Important concepts and best practices." },
      ];
      return res.status(200).json({ questions: fallbackQuestions });
    }

    const questions = Array.isArray(data) ? data : data?.questions || [];
    res.status(200).json({ questions });
  } catch (error) {
    const errorMessage = error.message || "Unknown error";
    const isApiKeyError = errorMessage.includes("API_KEY_INVALID") || errorMessage.includes("API key");
    
    if (isApiKeyError) {
      console.error("Question generation error: Invalid API key");
    } else {
      console.error("Question generation error:", errorMessage.substring(0, 100));
    }

    res.status(500).json({
      message: "Failed to generate questions. Please try again later.",
    });
  }
};

module.exports = {
  generateInterviewQuestions,
  generateInterviewQuestionsFromResume,
};
