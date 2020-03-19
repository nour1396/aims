const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const User = require('../models/users');
const config = require('../config/database');
module.exports = function(router) {
    //signup
    router.get('/signup', (req, res, next) => {
        res.render('signup', { message: req.flash('signupMessage') });
    });

    router.post('/signup', (req, res) => {
        let newUser = new User({
            name: req.body.name,
            username: req.body.username,
            email: req.body.email,
            contact: req.body.contact,
            password: req.body.password
        });
        User.addUser(newUser, (err, user) => {
            if (err) {
                let message = "";
                if (err.errors.username) message = "Username is already taken. ";
                if (err.errors.email) message += "Email already exists.";
                return res.render('signup', console.log(message = "Username is already taken. "));
            } else {
                return res.render('login');
            }
        });
    })

    router.get('/login', (req, res) => {
        req.logIn(User, () => {
            req.session.save(() => {
                res.render('login', { message: req.flash('loginMessage') })
            })
        })
    });
    router.post('/login', (req, res) => {
        const username = req.body.username;
        const password = req.body.password;

        User.getUserByUsername(username, (err, user) => {
            if (err) throw err;
            if (!user) {
                return res.json({
                    success: false,
                    message: "User not found."
                });
            }

            User.comparePassword(password, user.password, (err, isMatch) => {
                if (err) throw err;
                if (isMatch) {
                    const token = jwt.sign({
                        type: "user",
                        data: {
                            _id: user._id,
                            username: user.username,
                            name: user.name,
                            email: user.email,
                            contact: user.contact
                        }
                    }, config.secret, {
                        expiresIn: 28800000 // for 1 week time in milliseconds
                    });
                    return res.render('index', {
                        success: true,
                        token: "JWT " + token
                    }, console.log(token));
                } else {
                    return res.json({
                        success: true,
                        message: "Wrong Password."
                    });
                }
            });
        });
    });


}