const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const consultationRoutes = require("./routes/consultationRoutes");
const orderRoutes = require("./routes/orderRoutes");
const aiRoutes = require("./routes/aiRoutes");

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use("/api/orders", orderRoutes);
app.use("/api/consultation", consultationRoutes);
app.use("/api/chat", aiRoutes);

// mongodb
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});