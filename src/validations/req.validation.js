const Joi = require("joi");
const { metamaskAddress } = require("./custom.validation");

const new_user = {
  body: Joi.object().keys({
    account: Joi.string().required().custom(metamaskAddress),
    amount: Joi.number().required(),
    txhash: Joi.string().required(),
  }),
};

const exis_user = {
  body: Joi.object().keys({
    account: Joi.string().required().custom(metamaskAddress),
    amount: Joi.number().required(),
    refId: Joi.string().required(),
    txhash: Joi.string().required(),
  }),
};

const get_user_data = {
  query: Joi.object().keys({
    account: Joi.string().required().custom(metamaskAddress),
  }),
};

const get_user_ref_data = {
  query: Joi.object().keys({
    refId: Joi.string().required(),
  }),
};

const check_ref = {
  query: Joi.object().keys({
    refId: Joi.string().required(),
  }),
}

const get_trx={
  query: Joi.object().keys({
    account: Joi.string().required().custom(metamaskAddress),
  }),
}

const check_trx_exist={
  query: Joi.object().keys({
    txHash: Joi.string().required(),
  }),
}

module.exports = {
  new_user,
  exis_user,
  get_user_data,
  get_user_ref_data,
  check_ref,
  get_trx,
  check_trx_exist
};
