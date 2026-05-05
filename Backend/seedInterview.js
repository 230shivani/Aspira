require("dotenv").config();
const mongoose = require("mongoose");
const InterviewQuestion = require("./models/interviewQuestion.model");

const mockQuestions = [
  {
    category: "behavioral",
    question: "Tell me about a time you handled a difficult situation with a coworker.",
    answer: "Focus on the STAR method (Situation, Task, Action, Result). Emphasize communication, empathy, and professional resolution rather than the conflict itself.",
    difficulty: "Medium",
    time: "3-5 mins"
  },
  {
    category: "technical",
    question: "What is the difference between REST and GraphQL?",
    answer: "REST is architectural, usually returning fixed data structures. GraphQL is a query language allowing clients to request exactly what they need, often reducing over-fetching.",
    difficulty: "Hard",
    time: "5-7 mins"
  },
  {
    category: "behavioral",
    question: "Why should we hire you for this role?",
    answer: "Align your unique skills and past achievements directly with the company's mission and the specific requirements of the job description.",
    difficulty: "Easy",
    time: "2-3 mins"
  },
  {
    category: "strategy",
    question: "How would you estimate the number of gas stations in London?",
    answer: "This is a Fermi problem. Start with population, cars per person, average tank size, and frequency of refueling to build a logical estimate.",
    difficulty: "Hard",
    time: "10 mins"
  }
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB for seeding interview questions...");
    await InterviewQuestion.deleteMany({});
    await InterviewQuestion.insertMany(mockQuestions);
    console.log("Interview questions seeded successfully!");
    mongoose.connection.close();
  } catch (error) {
    console.error("Error seeding interview questions:", error);
    process.exit(1);
  }
};

seedDB();
