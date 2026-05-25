const express = require("express");
const router = express.Router();

const OpenAI = require("openai");

const client = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENROUTER_API_KEY,
});

router.post("/", async (req, res) => {
  try {
    const { message } = req.body;

    const completion = await client.chat.completions.create({
      model: "deepseek/deepseek-chat",
      messages: [
        {
          role: "system",
          content:
            "You are an expert homeopathy assistant. Suggest medicines and precautions in simple Hindi-English.",
        },
        {
          role: "user",
          content: message,
        },
      ],
    });

    res.json({
      reply: completion.choices[0].message.content,
    });

  } catch (error) {
    console.log("OPENROUTER ERROR:", error);

    res.status(500).json({
      reply: "AI service error",
    });
  }
});

module.exports = router;