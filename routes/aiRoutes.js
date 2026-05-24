const express = require("express");
const router = express.Router();

const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

router.post("/chat", async (req, res) => {
  try {
    const { message } = req.body;

    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash"
    });

    const prompt = `
You are a helpful homeopathy medical assistant.

User problem:
${message}

Give:
1. Short explanation
2. Suggested homeopathic medicines
3. Simple precautions

Keep response short and beginner friendly.

Also add:
"This is AI-generated guidance. Please consult a doctor for serious conditions."
`;

    const result = await model.generateContent(prompt);

    const response = result.response.text();

    res.json({
      reply: response
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      reply: "AI service error"
    });
  }
});

module.exports = router;