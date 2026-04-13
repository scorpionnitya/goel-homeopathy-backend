const express = require("express");
const router = express.Router();
const Order = require("../models/Order");

// ✅ CREATE ORDER
router.post("/", async (req, res) => {
  try {
    const { items, user } = req.body;

    const newOrder = new Order({
      items,
      user,
      status: "PENDING" // ✅ default
    });

    await newOrder.save();

    res.json({ message: "Order placed successfully" });

  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// ✅ GET ALL ORDERS
router.get("/all", async (req, res) => {
  try {
    const orders = await Order.find().sort({ _id: -1 });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// ✅ UPDATE STATUS
router.put("/update-status/:id", async (req, res) => {
  try {
    const { status } = req.body;

    const updated = await Order.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;