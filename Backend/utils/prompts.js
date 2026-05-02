const resumerBasedQuestionsPrompt = (resumeText, numberOfQuestions) => `
    You are an AI trained to generate technical interview questions based on a candidate's resume.

    Task:
    - Analyze the provided resume carefully
    - Identify key skills, projects, and experience mentioned
    - Generate ${numberOfQuestions} technical interview questions that are specifically tailored to this candidate's background and experience
    - Focus on topics mentioned in the resume, technologies used, and projects listed
    - For each question, generate a detailed answer that relates to their experience
    - If the answer needs a code example, add a small code block inside
    - Keep formatting very clean
    - Return a pure JSON array like:
    [
        {
            "question": "Question here?",
            "answer": "Answer here."
        },
        ...
    ]
    
    Resume Content:
    ${resumeText}
    
    Important: Do NOT add any extra text. Only return valid JSON.
    `;

const questionAnswerPrompt = (role, experience, topicsToFocus, numberOfQuestions) => `
    You are an AI trained to generate technical interview questions and answers.

    Task:
    - Role: ${role}
    - Candidate Experience: ${experience} years
    - Focus Topics: ${topicsToFocus}
    - Write ${numberOfQuestions} interview questions
    - For each question, generate a detailed but beginner-friendly answer.
    - If the answer needs a code example, add a small code block inside.
    - Keep formatting very clean.
    - Return a pure JSON array like:
    [
        {
            "question": "Question here?",
            "answer": "Answer here."
        },
        ...
    ]
    Important: Do NOT add any extra text. Only return valid JSON.   
    `;

module.exports = { resumerBasedQuestionsPrompt, questionAnswerPrompt };
