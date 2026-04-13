const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  const { message } = req.body;
  const msg = message.toLowerCase();

  let reply = "";
  let medicines = [];

  // 🔥 CONDITIONS

  if (msg.includes("fever") || msg.includes("bukhar")) {
    reply =
      "Aapko fever ke symptoms lag rahe hain. Body rest karein aur hydration maintain karein.";
    medicines.push("Belladonna", "Gelsemium");
  }

  else if (msg.includes("cold") || msg.includes("zukham") || msg.includes("cough")) {
    reply =
      "Ye common cold ya cough lag raha hai. Garam pani piyein aur rest karein.";
    medicines.push("Aconite", "Bryonia");
  }

  else if (msg.includes("pain") || msg.includes("dard") || msg.includes("injury")) {
    reply =
      "Aapko body pain ya injury ho sakti hai. Rest karein aur affected area ko stress na dein.";
    medicines.push("Arnica");
  }

  else if (msg.includes("stomach") || msg.includes("digestion") || msg.includes("pet")) {
    reply =
      "Ye digestion issue ho sakta hai. Light food lein aur hydration maintain karein.";
    medicines.push("Nux Vomica");
  }

  else if (msg.includes("stress") || msg.includes("anxiety") || msg.includes("tension")) {
    reply =
      "Aapko stress ya anxiety ho sakti hai. Relaxation techniques try karein aur apne mental health ka dhyan rakhein.";
    medicines.push("Ignatia");
  }

  else if (msg.includes("skin") || msg.includes("rash") || msg.includes("allergy")) {
    reply =
      "Ye skin issue ya allergy ho sakta hai. Affected area ko clean rakhein aur irritants se bachke rahen.";
    medicines.push("Rhus Toxicodendron");
  }

  else if (msg.includes("headache") || msg.includes("sir dard") || msg.includes("migraine")) {
    reply =
      "Aapko headache ya migraine ho sakta hai. Rest karein aur dim light mein rahen.";
    medicines.push("Natrum Muriaticum", "Sanguinaria");
  }
  else if (msg.includes("fatigue") || msg.includes("thakan") || msg.includes("weakness")) {
    reply =
      "Aapko fatigue ya weakness ho sakti hai. Proper rest lein aur balanced diet follow karein.";
    medicines.push("Phosphoric Acid");
  }
  else if (msg.includes("cold") || msg.includes("flu") || msg.includes("sardi") || msg.includes("bukhar")) {
    reply =
      "Ye cold ya flu ke symptoms lag rahe hain. Garam pani piyein aur rest karein.";
    medicines.push("Oscillococcinum", "Eupatorium Perfoliatum");
  } 
  else if (msg.includes("diarrhea") || msg.includes("dast") || msg.includes("pet dard")) {
    reply =
      "Aapko diarrhea ke symptoms lag rahe hain. Hydration maintain karein aur light food lein.";
    medicines.push("Arsenicum Album", "Podophyllum");
  } 
  else if (msg.includes("allergy") || msg.includes("rash") || msg.includes("itching")) {
    reply =
      "Ye allergy ke symptoms lag rahe hain. Affected area ko clean rakhein aur irritants se bachke rahen.";
    medicines.push("Allium Cepa", "Urtica Urens");
  }
  else if (msg.includes("insomnia") || msg.includes("neend nahi aati") || msg.includes("sleeplessness")) {
    reply =
      "Aapko insomnia ke symptoms lag rahe hain. Relaxation techniques try karein aur apne sleep hygiene ka dhyan rakhein.";
    medicines.push("Coffea Cruda", "Passiflora");
  } 
  else if (msg.includes("constipation") || msg.includes("kabj") || msg.includes("pet band")) {  
    reply =
      "Aapko constipation ke symptoms lag rahe hain. Proper diet follow karein aur hydration maintain karein.";
    medicines.push("Bryonia", "Nux Vomica");
  }


  else {
    reply =
      "Aapke symptoms clear nahi hain. Kripya thoda aur detail mein batayein ya doctor se consult karein.";
    medicines.push("Consult Doctor");
  }

  // 🔥 FINAL RESPONSE FORMAT
  const fullReply = `
${reply}

Suggested Medicines:
${medicines.join(", ")}
`;

  res.json({ reply: fullReply });
});

module.exports = router;