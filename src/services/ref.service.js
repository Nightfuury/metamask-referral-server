let Schema = require("../models/user.model");
let RefSchema = require("../models/ref.model");

let userService = require("./user.service");
let trxService = require("./transaction.service");

const saveRef = async (account, refId, amount, txhash) => {
  let response;
  let exisRef = await Schema.User.find({ refId: refId });
  let exisUser = await Schema.User.find({ account: account });

  if (
    exisRef.length == 0 ||
    (exisUser.length !== 0 && exisUser[0].refId == refId)
  ) {
    response = {
      success: "false",
      msg: "Incorrect Referral",
      data: {},
    };
  } else {
    // if (exisUser.length == 0) {
    //   await userService.saveNewUser(account, amount,txhash);
    // } else {
    //   let amnt = exisUser[0].amount;
    //   await Schema.User.updateOne(
    //     { account: account },
    //     {
    //       account: exisUser[0].account,
    //       refId: exisUser[0].refId,
    //       amount: amount + amnt,
    //     }
    //   );

    //   await trxService.saveTrxns(account, amount, txhash);
    // }

    //console.log("txHash", txhash);

    await userService.saveNewUser(account, amount, txhash);

    let amnt = (3 * amount) / 100;
    let refTrx = new RefSchema.Ref({
      account: account,
      refId: refId,
      refAmount: amnt,
      amount: amount,
      txHash: txhash,
    });

    await refTrx.save();

    response = {
      success: "true",
      msg: "User saved successfully",
      data: {},
    };
  }

  return response;
};

const getRefData = async (refId) => {
  let response;

  let data = await RefSchema.Ref.find({ refId: refId });

  if (data.length == 0) {
    response = {
      success: "false",
      msg: "No Data found",
      data: {},
    };
  } else {
    response = {
      success: "true",
      msg: "User found",
      data: {
        ref_list: data,
      },
    };
  }
  return response;
};

const checkReferral = async (refId) => {
  let response;
  let exisRef = await Schema.User.find({ refId: refId });

  if (exisRef.length == 0) {
    response = {
      success: "false",
      msg: "Incorrect Referral",
      data: {},
    };
  } else {
    response = {
      success: "true",
      msg: "Correct Referral",
      data: {},
    };
  }
  return response;
};

module.exports = {
  saveRef,
  checkReferral,
  getRefData,
};
