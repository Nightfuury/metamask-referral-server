const express = require('express');
const validate = require('../../middlewares/validate');
const reqValidation = require('../../validations/req.validation');
const refController = require('../../controllers/ref.controller');

const router = express.Router();

router.post('/new_user', validate(reqValidation.new_user), refController.newUser);
router.post('/ref_user', validate(reqValidation.exis_user), refController.refUser);
router.get('/user_data', validate(reqValidation.get_user_data), refController.getUserData);
router.get('/user_ref_data', validate(reqValidation.get_user_ref_data), refController.getUserRefData);
router.get('/check_ref', validate(reqValidation.check_ref), refController.checkRefLink);
router.get('/transactions', validate(reqValidation.get_trx), refController.getTransactions);
router.get('/check_trx_exist', validate(reqValidation.check_trx_exist), refController.checkTrxExist);

module.exports = router;
