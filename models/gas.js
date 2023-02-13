const mongoose = require("mongoose");
const gasSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    maxCount: {
      type: Number,
      required: true,
    },
    rent: {
      type: Number,
      require: true,
    },
    currentBooking: [],
  },
  { timestamps: true }
);

const gasModel = mongoose.model("gases", gasSchema);
module.exports = gasModel;
