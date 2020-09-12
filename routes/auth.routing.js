const router = require('express').Router();
const authController = require('../controller/auth.controller');
const registrationVal = require('../controller//validation.controller');


router.post('/registrantion', registrationVal.registrationValidation, authController.registrantion);

router.post('/login', authController.handleLogin)





module.exports = router