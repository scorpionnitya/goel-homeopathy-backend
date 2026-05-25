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
          model: "mistralai/Mistral-7B-Instruct-v0.2",
          messages: [
            {
              role: "system",
              content:
                "You are an expert AI homeopathy assistant. Always suggest suitable homeopathic medicines, precautions and short advice in Hindi-English language.",
            },
            {
              role: "user",
              content: message,
            },
          ],
          temperature: 0.7,
          max_tokens: 300,
        }),
      }
    );

    const data = await response.json();

    console.log(data);
    if (data.error) {
  return res.json({
    reply: data.error.message || "AI model error",
  });
}

    const reply =
      data?.choices?.[0]?.message?.content ||
      "Medicine suggestion not available";

    res.json({ reply });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      reply: "AI service error",
    });
  }
});

module.exports = router;