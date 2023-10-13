let Schema = require("../models/transaction.model");

const saveTrxns = async (account, amount, txHash) => {
  let trx = new Schema.Transaction({
    account: account,
    amount: amount,
    txHash: txHash,
  });

  await trx.save();
};

const getAllTrxns = async (account) => {
  let res;

  let exisTrxns = await Schema.Transaction.find({ account: account });

  if (exisTrxns.length == 0) {
    res = {
      success: "false",
      msg: "No Transactions found",
      data: {},
    };
  } else {
    res = {
      success: "true",
      msg: "Transactions found",
      data: {
        trxns: exisTrxns,
      },
    };
  }
  return res;
};

const chechTrxExist = async (txHash) => {
  let res;

  let exisTrxns = await Schema.Transaction.find({ txHash: txHash });

  if (exisTrxns.length !== 0) {
    res = {
      success: "false",
      msg: "Transactions exist",
      data: {
        account : exisTrxns[0].account
      },
    };
  } else {
    res = {
      success: "true",
      msg: "Transaction does not exist",
      data: {},
    };
  }
  return res;
};

module.exports = {
  saveTrxns,
  getAllTrxns,
  chechTrxExist
};
