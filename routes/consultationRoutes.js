const express = require("express");
const router = express.Router();
const Consultation = require("../models/Consultation");

router.post("/", async (req, res) => {
  try {
    console.log("Incoming Data:", req.body);

    const consultation = new Consultation(req.body);

    await consultation.save();

    res.status(200).json({
      success: true,
      message: "Consultation Booked Successfully"
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error"
    });
  }
});

router.get("/", async (req, res) => {
  const data = await Consultation.find();
  res.json(data);
});

module.exports = router;