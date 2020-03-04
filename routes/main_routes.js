var User = require('../models/users').User;
var Client = require('../models/clients').Client;
var passport = require('passport')
var clientsModel = require('../models/clients')
const Log = require('../models/log').Log;
const DraftClient = require('../models/drafts/draftClientEN').DraftClient;
const DraftClientAr = require('../models/drafts/draftClientAR').DraftClientAr;
const DraftPersonal = require('../models/drafts/personalDraft').DraftPersonal;
var configDB = require('../config/database');
var mongoose = require('mongoose');
module.exports = function(router) {
    //home page
    router.get('/clients', function(req, res) {
        mongoose.connect(configDB.urlS, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        }, (err) => { console.log('DBS connected ^_^ ') })
        if (!req.user == false) {
            Log.create({
                statement: 'User: ' + req.user.userName + ' entered All Clients '
            });
            clientsModel.getAllClients().then(clients => {
                res.render('clients', {
                    clients: clients
                })
            })
        } else {
            res.redirect(302, '/login');
        }
    })
    router.get('/index', (req, res) => {
        res.render('index')
    })

    //signup
    router.get('/signup', (req, res, next) => {
        res.render('signup', { message: req.flash('signupMessage') });
    });

    router.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/login',
        failureRedirect: '/signup',
        failureFlash: true
    }));

    //login
    router.get('/login', (req, res) => {
        req.logIn(User, () => {
            req.session.save(() => {
                res.render('login', { message: req.flash('loginMessage') })
            })
        })
    });

    router.post('/login',
        passport.authenticate('local-login', {
            successRedirect: '/index',
            failureRedirect: '/login',
            failureFlash: true
        })
    );

    router.get('/profile', isLoggedIn, function(req, res) {
        res.render('profile', { user: req.user });
    });


    router.get('/ind', function(req, res) {
        mongoose.connect(configDB.urlS, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        }, (err) => { console.log('DBS connected ^_^ ') })
        let data = {}
        DraftClient.find({ user: req.user.userName }).then(draftEn => {
            data.draftEn = draftEn
            DraftClientAr.find({ user: req.user.userName }).then(draftAr => {
                data.draftAr = draftAr
                DraftPersonal.find({ user: req.user.userName }).then(draftPI => {
                    data.draftPI = draftPI
                    res.render('ind', data);
                })
            })
        })
    })

    router.get('/logout', (req, res) => {
        req.session.destroy((err) => {
            if (err) {
                return console.log(err);
            }
            res.redirect('/login');
        });

    });

    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated()) {
            return next();
        }

        res.redirect('/login');
    }
}