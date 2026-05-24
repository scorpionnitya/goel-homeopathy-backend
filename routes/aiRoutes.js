const express = require("express");
const router = express.Router();

const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

router.post("/", async (req, res) => {
  try {
    const { message } = req.body;

    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash-001",
    });

    const result = await model.generateContent(
      `You are an expert AI homeopathy assistant.

User problem:
${message}

Give:
1. Problem analysis
2. Suggested homeopathic medicines
3. Precautions

Reply in simple Hindi-English.
`
    );

    const response = await result.response;
    const text = response.text();

    res.json({
      reply: text,
    });

  } catch (error) {
    console.log("GEMINI ERROR:", error);

    res.status(500).json({
      reply: "AI service error",
    });
  }
});

module.exports = router;