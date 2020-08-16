var User = require('../models/users').User;
var Client = require('../models/clients').Client;
var passport = require('passport')
var clientsModel = require('../models/clients')
const Log = require('../models/log').Log;
const DraftClient = require('../models/drafts/draftClientEN').DraftClient;
const DraftClientAr = require('../models/drafts/draftClientAR').DraftClientAr;
const DraftPersonal = require('../models/drafts/personalDraft').DraftPersonal;
module.exports = function(router) {
    //to show log for specific user 
    router.get('/log', (req, res) => {
            const log = req.query.log;
            let data = {}
            console.log(log)
            if (log == '') {
                Log.find({}).then(logs => {
                        data.logs = logs
                        res.render('log', data)
                    })
                    //record when user do something
                Log.create({
                    statement: 'User: ' + req.user.userName + ' entered to get all users log',
                    user: req.user.userName
                });
            } else if (log.constructor === String) {
                Log.find({ user: log }).then(logs => {
                    data.logs = logs
                    res.render('log', data)
                })
                Log.create({
                    statement: 'User: ' + req.user.userName + ' entered to get log of user: ' + log,
                    user: req.user.userName
                });
            }
        })
        //get list of clients saved
    router.get('/clients', function(req, res) {
        /* if (!req.user == false) {
            Log.create({
                statement: 'User: ' + req.user.userName + ' entered All Clients '
            });
            clientsModel.getAllClients().then(clients => {
                res.json({
                    clients: clients
                })
            })
        } else {
            res.redirect(302, '/login');
        } */
        clientsModel.getAllClients().then(clients => {
            res.json({
                clients: clients
            })
        })

    })

    //main page
    router.get('/', (req, res) => {
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
            successRedirect: '/',
            failureRedirect: '/login',
            failureFlash: true
        })
    );

    // show user details name and password 
    router.get('/profile', isLoggedIn, function(req, res) {
        res.render('profile', { user: req.user });
    });

    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated()) {
            return next();
        }
        res.redirect('/login');
    }

    //page to show if user has drafts or not 
    router.get('/ind', function(req, res) {
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

    //logout
    router.get('/logout', (req, res) => {
        req.session.destroy((err) => {
            if (err) {
                return console.log(err);
            }
            res.redirect('/login');
        });
    });
}