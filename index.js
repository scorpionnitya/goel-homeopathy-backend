const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// routes import
const orderRoutes = require("./routes/orderRoutes");

// use routes
app.use("/api/orders", require("./routes/orderRoutes"));

const aiRoutes = require("./routes/aiRoutes");
app.use("/api/ai", aiRoutes);

// MongoDB connect
mongoose.connect("mongodb+srv://goeladmin:VkYWV9c9IgbcjEtq@cluster0.swiakwn.mongodb.net/goelDB")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// server start
app.listen(5001, () => {
  console.log("Server running on port 5001");
});