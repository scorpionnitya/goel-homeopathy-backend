const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { message } = req.body;

    let reply = "";

    const msg = message.toLowerCase();

    // Fever
    if (msg.includes("fever") || msg.includes("bukhar")) {
      reply =
        "Aapko fever ke symptoms lag rahe hain.\n\nSuggested Medicines:\n1. Belladonna\n2. Gelsemium\n\nPrecautions:\n- Rest karein\n- Hydration maintain karein";
    }

    // Cold / Cough
    else if (
      msg.includes("cold") ||
      msg.includes("cough") ||
      msg.includes("khansi")
    ) {
      reply =
        "Aapko cold/cough ke symptoms lag rahe hain.\n\nSuggested Medicines:\n1. Bryonia\n2. Aconite\n\nPrecautions:\n- Thanda paani avoid karein\n- Garam fluids lein";
    }

    // Weakness
    else if (msg.includes("weakness")) {
      reply =
        "Aapko weakness lag rahi hai.\n\nSuggested Medicines:\n1. Alfalfa Tonic\n2. Kali Phos\n\nPrecautions:\n- Proper sleep lein\n- Healthy diet maintain karein";
    }

    // Headache
    else if (
      msg.includes("headache") ||
      msg.includes("sar dard")
    ) {
      reply =
        "Aapko headache ke symptoms lag rahe hain.\n\nSuggested Medicines:\n1. Belladonna\n2. Nux Vomica\n\nPrecautions:\n- Stress kam karein\n- Proper hydration rakhein";
    }

    // Default
    else {
      reply =
        "Sorry, mujhe is problem ke liye medicine data nahi mila.\n\nPlease thoda aur clearly symptoms likhein.";
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