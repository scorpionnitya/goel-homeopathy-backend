const mongoose = require("mongoose");

const consultationSchema = new mongoose.Schema({
  name: String,
  age: String,
  gender: String,
  phone: String,
  date: String,
  time: String,
  problem: String
}, { timestamps: true });

module.exports = mongoose.model("Consultation", consultationSchema);