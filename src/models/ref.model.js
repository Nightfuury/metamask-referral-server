const mongoose = require("mongoose");
const { toJSON, paginate } = require("./plugins");

const refSchema = mongoose.Schema({
  account: {
    type: String,
    required: true,
    trim: true,
  },
  refId: {
    type: String,
    required: true,
    trim: true,
  },
  refAmount: {
    type: Number,
    required: true,
    trim: true,
  },
  amount: {
    type: Number,
    required: true,
    trim: true,
  },
  txHash: {
    type: String,
    required: true,
    trim: true,
  },
});

// add plugin that converts mongoose to json
refSchema.plugin(toJSON);
refSchema.plugin(paginate);

/**
 * @typedef Ref
 */
module.exports.Ref = mongoose.model("Ref", refSchema);
