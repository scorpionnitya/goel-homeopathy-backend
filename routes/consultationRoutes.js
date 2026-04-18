const express = require("express");
const router = express.Router();
const Consultation = require("../models/Consultation");

router.post("/", async (req, res) => {
  try {
    const newConsultation = new Consultation(req.body);

    const savedData = await newConsultation.save();

    res.status(201).json({
      success: true,
      message: "Appointment booked successfully",
      data: savedData
    });

  } catch (error) {
    console.log("SAVE ERROR:", error);

    res.status(500).json({
      success: false,
      message: "Database save failed"
    });
  }
});

router.get("/", async (req, res) => {
  try {
    const data = await Consultation.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "Error fetching data" });
  }
});

module.exports = router;