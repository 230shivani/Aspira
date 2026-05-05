require("dotenv").config();
const mongoose = require("mongoose");
const Job = require("./models/job.model");

const mockJobs = [
  {
    title: "Senior Product Designer",
    company: "Nebula AI",
    logoColor: "bg-purple-500",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$160K - $220K",
    match: 98,
    category: "Design",
    description: "Lead the design evolution of our core AI platform. We're looking for someone who can translate complex neural network data into elegant user experiences."
  },
  {
    title: "Staff Fullstack Engineer",
    company: "Quantum Labs",
    logoColor: "bg-blue-500",
    location: "Berlin / Remote",
    type: "Remote",
    salary: "$140K - $190K",
    match: 94,
    category: "Software",
    description: "Join our rapid-response team building ultra-fast data visualizations for quantum computing monitoring. React 19 and Go stack."
  },
  {
    title: "Marketing Growth Lead",
    company: "AI CarrerHub Global",
    logoColor: "bg-teal-500",
    location: "London, UK",
    type: "Full-time",
    salary: "$120K - $170K",
    match: 87,
    category: "Marketing",
    description: "Drive global adoption of AI CarrerHub's career tools. Experience with viral loops and community-led growth is a major plus."
  },
  {
    title: "AI Research Scientist",
    company: "DeepNeural",
    logoColor: "bg-rose-500",
    location: "Toronto, CA",
    type: "Full-time",
    salary: "$180K - $250K",
    match: 92,
    category: "Data Science",
    description: "Push the boundaries of localized LLM training. We are building the next generation of private-first artificial intelligence."
  }
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB for seeding...");

    // Clear existing jobs
    await Job.deleteMany({});
    console.log("Existing jobs cleared.");

    // Insert mock jobs
    await Job.insertMany(mockJobs);
    console.log("Mock jobs inserted successfully!");

    mongoose.connection.close();
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1);
  }
};

seedDB();
