let Schema = require("../models/user.model");
let referralCodeGenerator = require("referral-code-generator");
let trxService = require("./transaction.service");

const getUser = async (account) => {
  let response;

  let exisUser = await Schema.User.find({ account: account });

  if (exisUser.length == 0) {
    response = {
      success: "false",
      msg: "No User found",
      data: {},
    };
  } else {
    response = {
      success: "true",
      msg: "User found",
      data: {
        link: exisUser[0].refId,
        amount: exisUser[0].amount,
      },
    };
  }
  return response;
};

const saveNewUser = async (account, amount, txHash) => {
  let response;

  //console.log('account',Schema.User);
  let exisUser = await Schema.User.find({ account: account });

  if (exisUser.length == 0) {
    let ref = referralCodeGenerator.alphaNumeric("uppercase", 8, 7);

    let user = new Schema.User({
      account: account,
      refId: ref,
      amount: amount,
    });

    await user.save();

    await trxService.saveTrxns(account, amount, txHash);
  } else {
    let amnt = exisUser[0].amount;
    await Schema.User.updateOne(
      { account: account },
      {
        account: exisUser[0].account,
        refId: exisUser[0].refId,
        amount: amount + amnt,
      }
    );

    await trxService.saveTrxns(account, amount, txHash);
  }

  response = {
    success: "true",
    msg: "User saved successfully",
    data: {},
  };

  return response;
};

module.exports = {
  saveNewUser,
  getUser,
};
