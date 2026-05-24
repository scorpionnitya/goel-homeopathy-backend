const express = require("express");
const router = express.Router();

const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

router.post("/", async (req, res) => {
  try {
    const { message } = req.body;

    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: `
You are an expert AI homeopathy assistant.

User problem:
${message}

Give:
1. Problem analysis
2. Suggested homeopathic medicines
3. Precautions

Reply in simple Hindi-English.
`,
    });

    res.json({
      reply: response.text,
    });

  } catch (error) {
    console.log("GEMINI ERROR:", error);

    res.status(500).json({
      reply: "AI service error",
    });
  }
});

module.exports = router;