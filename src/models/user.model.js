const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const userSchema = mongoose.Schema(
  {
    account: {
      type: String,
      required: true,
      trim: true,
      unique : true
    },
    refId: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    amount  :{
      type : Number,
      required : true,
    }
  }
);

// add plugin that converts mongoose to json
userSchema.plugin(toJSON);
userSchema.plugin(paginate);


/**
 * @typedef User
 */
 module.exports.User = mongoose.model('User', userSchema);
