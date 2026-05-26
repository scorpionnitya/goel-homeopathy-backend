const express = require("express");
const router = express.Router();
const Order = require("../models/Order");
const axios = require("axios");

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
    await axios.post(
  "https://script.google.com/macros/s/AKfycbzDM7JxKQNdrugt5EZ0LTiIoV4eXjK1gBMEzOX7RiENtV1nDKC-YlwBuu_Ev6E_yfgnxg/exec",
  {
    orderId: newOrder._id.toString(),

    name: user.name,
    phone: user.phone,
    address: user.address,

    medicines: items
      .map(item => item.name)
      .join(", "),

    totalAmount
  }
);

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
    await axios.post(
  "https://script.google.com/macros/s/AKfycbzDM7JxKQNdrugt5EZ0LTiIoV4eXjK1gBMEzOX7RiENtV1nDKC-YlwBuu_Ev6E_yfgnxg/exec",
  {
    action: "UPDATE_STATUS",

    orderId: updated._id.toString(),

    status: updated.status,

    deliveryOTP: updated.deliveryOTP || "",

    deliveredAt: updated.isDelivered
      ? new Date().toLocaleString()
      : "",

    paymentStatus: updated.paymentStatus
  }
);

    res.json(updated);

  } catch (error) {
    res.status(500).json({
      message: "Server error"
    });
  }
});

module.exports = router;