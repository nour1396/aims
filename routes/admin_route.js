const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const Admin = require('../models/admin');
const config = require('../config/database');
module.exports = function(router) {
    //signup
    router.get('/signup', (req, res, next) => {
        res.render('signup', { message: req.flash('signupMessage') });
    });

    router.post('/signup', (req, res) => {
        let newAdmin = new Admin({
            name: req.body.name,
            username: req.body.username,
            email: req.body.email,
            contact: req.body.contact,
            password: req.body.password
        });
        Admin.addUser(newAdmin, (err, user) => {
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
        req.logIn(Admin, () => {
            req.session.save(() => {
                res.render('login', { message: req.flash('loginMessage') })
            })
        })
    });
    router.post('/login', passport.authenticate('jwt'), (req, res) => {
        const username = req.body.username;
        const password = req.body.password;

        Admin.getAdminByUsername(username, (err, user) => {
            if (err) throw err;
            if (!user) {
                return res.json({
                    success: false,
                    message: "admin not found."
                });
            }

            Admin.comparePassword(password, admin.password, (err, isMatch) => {
                if (err) throw err;
                if (isMatch) {
                    const token = jwt.sign({
                        type: "admin",
                        data: {
                            _id: admin._id,
                            username: admin.username,
                            name: admin.name,
                            email: admin.email,
                            contact: admin.contact,
                            job_profile: admin.job_profile
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