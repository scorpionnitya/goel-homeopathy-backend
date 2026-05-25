const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { message } = req.body;

    const response = await fetch(
      "https://api.together.xyz/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.TOGETHER_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "mistralai/Mistral-7B-Instruct-v0.1",
          messages: [
            {
              role: "system",
              content:
                "You are an expert AI homeopathy assistant. Suggest medicines and precautions in Hindi-English.",
            },
            {
              role: "user",
              content: message,
            },
          ],
        }),
      }
    );

    const data = await response.json();

    res.json({
      reply: data.choices[0].message.content,
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      reply: "AI service error",
    });
  }
});

module.exports = router;