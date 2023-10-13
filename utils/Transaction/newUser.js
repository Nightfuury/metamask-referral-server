var Schema = require("../../Schema/user.schema");
let referralCodeGenerator = require("referral-code-generator");

module.exports = async (account, amount) => {
  let response;

  let ref = referralCodeGenerator.alphaNumeric("uppercase", 8, 7);

  let user = new Schema.User({
    accountAddr: account,
    refId: ref,
    amount: amount,
  });

  await user.save();

  response = {
    success: "true",
    msg: "Saved Successfully",
    data: {},
  };
};
