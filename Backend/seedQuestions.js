require("dotenv").config();
const mongoose = require("mongoose");
const InterviewQuestion = require("./models/interviewQuestion.model");

const questions = [
  // Behavioral
  {
    category: "behavioral",
    difficulty: "Medium",
    question: "Tell me about a time you failed and how you handled it.",
    answer: "Use the STAR method. Focus on a specific incident, take responsibility, explain what you learned, and how you improved.",
    time: "4 mins"
  },
  {
    category: "behavioral",
    difficulty: "Hard",
    question: "How do you handle conflict with a team member?",
    answer: "Focus on professional communication, empathy, and finding a win-win solution for the project's success.",
    time: "5 mins"
  },
  {
    category: "behavioral",
    difficulty: "Easy",
    question: "Why should we hire you?",
    answer: "Align your unique skills and passion with the company's specific needs and values mentioned in the job description.",
    time: "3 mins"
  },
  // Technical - Frontend
  {
    category: "technical",
    difficulty: "Medium",
    question: "Explain the difference between Virtual DOM and Real DOM in React.",
    answer: "Virtual DOM is a lightweight copy of Real DOM. React uses it to find changes (diffing) and update only necessary parts (reconciliation).",
    time: "5 mins"
  },
  {
    category: "technical",
    difficulty: "Hard",
    question: "What are React Hooks and why were they introduced?",
    answer: "Hooks allow using state and lifecycle features in functional components. They solve issues like complex HOCs and 'this' binding.",
    time: "6 mins"
  },
  {
    category: "technical",
    difficulty: "Medium",
    question: "What is Redux and when should you use it?",
    answer: "Redux is a state management library. Use it when your app has many complex state interactions across many components.",
    time: "5 mins"
  },
  // Technical - Backend
  {
    category: "technical",
    difficulty: "Hard",
    question: "What is the difference between SQL and NoSQL databases?",
    answer: "SQL is relational and uses structured schemas (good for complex queries). NoSQL is non-relational and flexible (good for scalability).",
    time: "7 mins"
  },
  {
    category: "technical",
    difficulty: "Medium",
    question: "Explain Middleware in Express.js.",
    answer: "Middlewares are functions that have access to req, res, and next. They can modify requests, end responses, or call the next function.",
    time: "4 mins"
  },
  // Strategy / Case Study
  {
    category: "strategy",
    difficulty: "Hard",
    question: "How would you design a system like YouTube?",
    answer: "Focus on video uploading, encoding, storage (CDN), playback, and scalability (load balancing, microservices).",
    time: "10 mins"
  },
  {
    category: "strategy",
    difficulty: "Medium",
    question: "How do you estimate the time required for a complex feature?",
    answer: "Break the feature into small tasks, use historical data, add a buffer for unknowns, and involve the team in estimation.",
    time: "6 mins"
  }
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB for seeding...");
    
    // Clear existing questions if you want to refresh, or just add new ones
    // await InterviewQuestion.deleteMany({}); 
    
    await InterviewQuestion.insertMany(questions);
    console.log("Successfully added 10+ professional questions!");
    
    mongoose.connection.close();
  } catch (error) {
    console.error("Seeding error:", error);
  }
};

seedDB();
