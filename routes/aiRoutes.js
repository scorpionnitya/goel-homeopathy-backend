const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { message } = req.body;

    const response = await fetch(
      "https://api-inference.huggingface.co/models/google/flan-t5-base",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.HF_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          inputs: `
You are an AI homeopathy assistant.

Patient problem:
${message}

Suggest:
- suitable homeopathic medicines
- precautions
- short advice

Reply in simple Hindi-English.
`,
        }),
      }
    );

    const data = await response.json();

    let reply = "No response";

    if (Array.isArray(data) && data[0]?.generated_text) {
      reply = data[0].generated_text;
    }

    res.json({ reply });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      reply: "AI service error",
    });
  }
});

module.exports = router;