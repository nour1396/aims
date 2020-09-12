const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { check, validationResult } = require('express-validator')
const User = require('../models/users').User;
const registrationValidation = require('./validation.controller').registrationValidation;

exports.registrantion = async(req, res) => {
    try {
        let err = validationResult(req);
        let { email, password, confirmPassword, userName, role } = req.body;
        if (err.isEmpty()) {
            const user = await User.findOne({ email });
            if (user) {
                res.json({
                    pageTitle: "registration",
                    MessageError: [{ param: "exists" }],
                    isLoggedIn: false,
                    oldData: { userName, email, password, confirmPassword, role }
                })
            } else {
                bcrypt.hash(password, 8, async function(err, hashPassword) {
                    let user = new User({
                        userName,
                        email,
                        password: hashPassword,
                        role
                    });
                    await user.save();
                    res.json('success')
                });
            }
        } else {
            res.json({
                pageTitle: "registration",
                isLoggedIn: false,
                MessageError: err.array(),
                oldData: { userName, email, password, confirmPassword, role }
            });
        }
    } catch (error) {
        res.json(`errorMsg: ${error}`)
    }
};

exports.handleLogin = async(req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
        const match = await bcrypt.compare(password, user.password);
        if (match) {
            jwt.sign({
                id: user._id,
                userName: user.userName,
                email: user.email,
                role: user.role
            }, "Roots", (err, token) => {
                res
                    .header('userToken', token)
                    .json({ msg: `successful login, ${user.userName}`, token: `${token}` })
            })
        } else {
            res.json({
                pageTitle: "login",
                isLoggedIn: false,
                MessageError: [{ param: 'incorrect password' }],
                oldData: { email, password },
            });
        }
    } else {
        res.json({
            pageTitle: "login",
            isLoggedIn: false,
            MessageError: [{ param: 'User Not Regisered' }],
            oldData: { email, password },
        })
    }
}