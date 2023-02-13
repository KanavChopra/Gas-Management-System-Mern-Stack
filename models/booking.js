const mongoose = require("mongoose");
const bookingSchema = mongoose.Schema(
  {
    gases: {
      type: String,
      required: true,
    },
    gasid: {
      type: String,
      required: true,
    },
    userid: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    bookedDate: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    totalAmount: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      default: "Booked",
    },
  },
  {
    timestamps: true,
  }
);

const bookingmodel = mongoose.model("bookings", bookingSchema);

module.exports = bookingmodel;
