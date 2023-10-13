const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const userService = require('../services/user.service');
const refUserService = require('../services/ref.service');
const trxService = require('../services/transaction.service');

const newUser = catchAsync(async (req, res) => {

  let account = req.body.account;
  let amount = req.body.amount;
  let txhash = req.body.txhash;

  let response = await userService.saveNewUser(account,amount,txhash);

  res.status(200).send(response);
});

const refUser = catchAsync(async (req, res) => {

  let account = req.body.account;
  let refId = req.body.refId;
  let amount = req.body.amount;
  let txhash = req.body.txhash;

  let response = await refUserService.saveRef(account,refId,amount,txhash);
  
  res.status(200).send(response);
});


const getUserData = catchAsync(async (req, res) => {

  let account = req.query.account;

  let response = await userService.getUser(account);
  
  res.status(200).send(response);
});

const getUserRefData = catchAsync(async (req, res) => {

  let refId = req.query.refId;

  let response = await refUserService.getRefData(refId);
  
  res.status(200).send(response);
});

const checkRefLink = catchAsync(async (req, res) => {

  let refId = req.query.refId;

  let response = await refUserService.checkReferral(refId);
  
  res.status(200).send(response);
});

const getTransactions = catchAsync(async (req, res) => {

  let account = req.query.account;

  let response = await trxService.getAllTrxns(account);
  
  res.status(200).send(response);
});

const checkTrxExist = catchAsync(async (req, res) => {

  let txHash = req.query.txHash;

  let response = await trxService.chechTrxExist(txHash);
  
  res.status(200).send(response);
});

module.exports = {
  newUser,
  refUser,
  getUserData,
  getUserRefData,
  checkRefLink,
  getTransactions,
  checkTrxExist
};
