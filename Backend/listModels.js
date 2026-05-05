require("dotenv").config();
const { GoogleGenerativeAI } = require("@google/generative-ai");

async function listModels() {
  const apiKey = process.env.GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  try {
    const models = await genAI.getGenerativeModel({ model: "gemini-1.5-flash" }); // dummy
    // Actually the SDK doesn't have a direct listModels yet in all versions
    // But we can try a different model name
    console.log("Trying gemini-1.5-flash...");
  } catch (e) {}
}
listModels();
