const express = require("express");
const router = express.Router();
const Order = require("../models/Order");

// ✅ CREATE ORDER
router.post("/", async (req, res) => {
  try {
    const { items, user, totalAmount } = req.body;

    const newOrder = new Order({
  items,
  user,
  totalAmount,
  paymentStatus: "PENDING",
  status: "PENDING"
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

    const orders = await Order.find().sort({
      date: -1
    });

    res.json(orders);

  } catch (error) {

    res.status(500).json({
      message: "Server error"
    });

  }

});


router.put("/update-status/:id", async (req, res) => {
  try {

    const { status } = req.body;

    let updateData = { status };

    // Generate OTP when order goes out
    if (status === "OUT FOR DELIVERY") {

      const otp = Math.floor(
        1000 + Math.random() * 9000
      ).toString();

      updateData.deliveryOTP = otp;
    }

    // Delivered
    if (status === "DELIVERED") {
      updateData.isDelivered = true;
    }

    const updated = await Order.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true }
    );

    res.json(updated);

  } catch (error) {
    res.status(500).json({
      message: "Server error"
    });
  }
});

module.exports = router;