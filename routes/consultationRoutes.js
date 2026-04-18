const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    console.log("Consultation Received:", req.body);

    res.json({
      success: true,
      message: "Appointment booked successfully"
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;