const express = require("express");
const router = express.Router();
const Order = require("../models/Order");
const axios = require("axios");

// ✅ CREATE ORDER
router.post("/", async (req, res) => {
  try {
    const { items, user, totalAmount } = req.body;

    // Generate Professional Order ID

const now = new Date();

const year =
  now.getFullYear().toString().slice(-2);

const month =
  String(now.getMonth() + 1).padStart(2, "0");

const day =
  String(now.getDate()).padStart(2, "0");

// Count today's orders

const todayStart = new Date(
  now.getFullYear(),
  now.getMonth(),
  now.getDate()
);

const todayEnd = new Date(
  now.getFullYear(),
  now.getMonth(),
  now.getDate() + 1
);

const todayOrders = await Order.countDocuments({
  date: {
    $gte: todayStart,
    $lt: todayEnd
  }
});

const orderId =
  `HM${year}${month}${day}${String(todayOrders + 1).padStart(3, "0")}`;
  const newOrder = new Order({
  orderId,
  items,
  user,
  totalAmount,
  paymentStatus: "PENDING",
  status: "PENDING"
});

    await newOrder.save();
try {

  await axios.post(
    "https://script.google.com/macros/s/AKfycbxWd-fJWYrV4MB50PSkwiScAj70U-B2-CSl8PWO-dIrLADoJ_aRJfxUf-dDYpqzRgzHvw/exec",
    {

      orderId:
  newOrder.orderId,

      name:
        user.name,

      phone:
        user.phone,

      address:
        user.address,

      medicines:
        items
          .map(
            item => item.name
          )
          .join(", "),

      totalAmount
    }
  );

} catch (sheetError) {

  console.log(
    "Google Sheet Error:",
    sheetError.message
  );

}
    res.json({
  success: true,
  orderId: newOrder.orderId
});

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

    // OTP generation
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

    // MongoDB update
    const updated = await Order.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true }
    );

    // Google Sheet update
    await axios.post(
      "https://script.google.com/macros/s/AKfycbxWd-fJWYrV4MB50PSkwiScAj70U-B2-CSl8PWO-dIrLADoJ_aRJfxUf-dDYpqzRgzHvw/exec",
      {

        action: "UPDATE_STATUS",

        orderId: updated.orderId,

        status: updated.status,

        deliveryOTP:
          updated.deliveryOTP || "",

        deliveredAt:
          updated.isDelivered
            ? new Date().toLocaleString()
            : "",

        paymentStatus:
          updated.paymentStatus || "PENDING"
      }
    );

    res.json(updated);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server error"
    });
  }
});

module.exports = router;