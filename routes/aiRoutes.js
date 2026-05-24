const express = require("express");
const router = express.Router();

const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

router.post("/", async (req, res) => {
  try {
    const { message } = req.body;

    const model = genAI.getGenerativeModel({
      model: "models/gemini-1.5-flash"
    });

    const prompt = `
You are an expert AI homeopathy assistant.

User problem:
${message}

Rules:
- Understand symptoms intelligently
- Suggest suitable homeopathic medicines automatically
- Give short precautions
- Reply in simple Hindi-English language
- Never leave medicine section blank
- If disease is serious, advise doctor consultation

Format:

Problem Analysis:
...

Suggested Medicines:
1. ...
2. ...

Precautions:
...

Disclaimer:
This is AI-generated guidance. Consult a doctor for serious conditions.
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