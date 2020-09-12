const { check, validationResult } = require('express-validator');


exports.registrationValidation = [
    check('userName', ` userName should 5-10 characters,
    no '_' or '.' '__' '_.' '._'`).matches(/^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/),
    check('email', 'invalid email format').isEmail(),
    check('password', '').matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{5,}$/),
    check('confirmPassword', 'invalid').custom((value, { req }) => {
        if (value !== req.body.password) {
            throw new Error('Password does not match');
        }
        return true;
    })
];
/* exports.editPassValidation = [
    check('newPass', '').matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{5,}$/),
    check('confirmPasswordAccSetting', 'invalid').custom((value, { req }) => {
        if (value !== req.body.newPass) {
            throw new Error('Password does not match');
        }
        return true;
    })
]; */