const mongoose = require("mongoose");
const gasAdminSchema = mongoose.Schema(
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
  },
  { timestamps: true }
);

const gasAdminModel = mongoose.model("gas", gasAdminSchema);
module.exports = gasAdminModel;
