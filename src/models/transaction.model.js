const mongoose = require("mongoose");
const { toJSON, paginate } = require("./plugins");

const trxSchema = mongoose.Schema(
  {
    account: {
      type: String,
      required: true,
      trim: true,
    },
    txHash: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    amount: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
trxSchema.plugin(toJSON);
trxSchema.plugin(paginate);

/**
 * @typedef User
 */
module.exports.Transaction = mongoose.model("Transaction", trxSchema);
