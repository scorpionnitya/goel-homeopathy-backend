const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  items: [
    {
      name: String,
      price: String,
      quantity: Number,
      power: String
    }
  ],

  user: {
    name: String,
    phone: String,
    address: String
  },

  totalAmount: Number,

  paymentStatus: {
    type: String,
    default: "PENDING"
  },

  paymentScreenshot: {
    type: String,
    default: ""
  },

  status: {
    type: String,
    default: "PENDING"
  },

  date: {
    type: Date,
    default: Date.now
  },
  deliveryOTP: {
  type: String,
  default: ""
},

isDelivered: {
  type: Boolean,
  default: false
}

});

module.exports = mongoose.model("Order", orderSchema);