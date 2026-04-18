const express = require("express");
const router = express.Router();
const Consultation = require("../models/Consultation");

router.post("/", async (req, res) => {
  try {
    const newConsultation = new Consultation(req.body);
    await newConsultation.save();

    res.json({
      success: true,
      message: "Appointment booked successfully"
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Server Error"
    });
  }
});

module.exports = router;