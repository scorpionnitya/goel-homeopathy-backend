const express = require("express");
const router = express.Router();
const Order = require("../models/Order");
const axios = require("axios");

const GOOGLE_SHEETS_URL =
  "https://script.google.com/macros/s/AKfycbxWd-fJWYrV4MB50PSkwiScAj70U-B2-CSl8PWO-dIrLADoJ_aRJfxUf-dDYpqzRgzHvw/exec";

// CREATE ORDER
router.post("/", async (req, res) => {
  try {
    const { items, user, totalAmount, orderId: clientOrderId } = req.body;

    if (!Array.isArray(items) || items.length === 0 || !user?.name || !user?.phone || !user?.address) {
      return res.status(400).json({
        success: false,
        message: "Please provide customer details and at least one order item."
      });
    }

    // Prefer an Order ID created by the frontend, if supplied.
    // Otherwise generate one on the backend.
    let orderId = clientOrderId;

    if (!orderId) {
      const now = new Date();
      const year = now.getFullYear().toString().slice(-2);
      const month = String(now.getMonth() + 1).padStart(2, "0");
      const day = String(now.getDate()).padStart(2, "0");

      const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());
      const todayEnd = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);

      const todayOrders = await Order.countDocuments({
        date: { $gte: todayStart, $lt: todayEnd }
      });

      orderId = `HM${year}${month}${day}${String(todayOrders + 1).padStart(3, "0")}`;
    }

    const newOrder = new Order({
      orderId,
      items,
      user,
      totalAmount,
      paymentStatus: "PENDING",
      status: "PENDING"
    });

    await newOrder.save();

    // Respond immediately after MongoDB confirms the order is saved.
    // Google Sheets sync runs in the background and cannot delay checkout.
    res.status(201).json({
      success: true,
      orderId: newOrder.orderId,
      message: "Order saved successfully."
    });

    axios.post(
      GOOGLE_SHEETS_URL,
      {
        orderId: newOrder.orderId,
        name: user.name,
        phone: user.phone,
        address: user.address,
        medicines: items.map((item) => item.name).join(", "),
        totalAmount
      },
      { timeout: 10000 }
    ).catch((sheetError) => {
      console.error("Google Sheet Error:", sheetError.message);
    });
  } catch (error) {
    console.error("Create order error:", error);
    if (!res.headersSent) {
      res.status(500).json({
        success: false,
        message: "Could not save the order. Please try again."
      });
    }
  }
});

// GET ALL ORDERS
router.get("/all", async (req, res) => {
  try {
    const orders = await Order.find().sort({ date: -1 });
    res.json(orders);
  } catch (error) {
    console.error("Get orders error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// UPDATE ORDER STATUS
router.put("/update-status/:id", async (req, res) => {
  try {
    const { status } = req.body;
    const updateData = { status };

    if (status === "OUT FOR DELIVERY") {
      updateData.deliveryOTP = Math.floor(1000 + Math.random() * 9000).toString();
    }

    if (status === "DELIVERED") {
      updateData.isDelivered = true;
    }

    const updated = await Order.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true, runValidators: true }
    );

    if (!updated) {
      return res.status(404).json({ message: "Order not found" });
    }

    // Return the status update promptly; sync the Google Sheet in the background.
    res.json(updated);

    axios.post(
      GOOGLE_SHEETS_URL,
      {
        action: "UPDATE_STATUS",
        orderId: updated.orderId,
        status: updated.status,
        deliveryOTP: updated.deliveryOTP || "",
        deliveredAt: updated.isDelivered ? new Date().toLocaleString() : "",
        paymentStatus: updated.paymentStatus || "PENDING"
      },
      { timeout: 10000 }
    ).catch((sheetError) => {
      console.error("Google Sheet status update error:", sheetError.message);
    });
  } catch (error) {
    console.error("Update order status error:", error);
    if (!res.headersSent) {
      res.status(500).json({ message: "Server error" });
    }
  }
});

module.exports = router;