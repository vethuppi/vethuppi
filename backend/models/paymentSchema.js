const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
  user_id: {
    type: String,
    required: true,
  },
  full_name: {
    type: String,
    required: true,
  },
  phone_no: {
    type: String,
    required: true,
  },
  paymentID: {
    type: String,
    required: true,
  },
  address: {
    type: Object,
    required: true,
  },
  cart: {
    type: Array,
    default: [],
  },
  status: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Payments", paymentSchema);
