const express = require("express");
const router = express.Router();
const Consultation = require("../models/Consultation");

// POST - Save Consultation Booking
router.post("/", async (req, res) => {
  try {
    const newConsultation = new Consultation({
      name: req.body.name,
      age: req.body.age,
      gender: req.body.gender,
      phone: req.body.phone,
      date: req.body.date,
      time: req.body.time,
      problem: req.body.problem,
    });

    await newConsultation.save();

    res.status(201).json({
      success: true,
      message: "Consultation booked successfully",
      data: newConsultation,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Error booking consultation",
    });
  }
});

// GET - View all consultations
router.get("/", async (req, res) => {
  try {
    const consultations = await Consultation.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      data: consultations,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching consultations",
    });
  }
});

module.exports = router;