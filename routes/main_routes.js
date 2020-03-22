var User = require('../models/users').User;
var Client = require('../models/clients').Client;
var passport = require('passport')
var clientsModel = require('../models/clients')
const Log = require('../models/log').Log;
const DraftClient = require('../models/drafts/draftClientEN').DraftClient;
const DraftClientAr = require('../models/drafts/draftClientAR').DraftClientAr;
const DraftPersonal = require('../models/drafts/personalDraft').DraftPersonal;
var bodyParser = require('body-parser');
module.exports = function(router) {
    //to show log for specific user 
    router.get('/log', (req, res) => {
            const log = req.query.log;
            let data = {}
            console.log(log)
            if (log == undefined) {
                Log.find({}).then(logs => {
                        data.logs = logs
                        res.json(data)
                    })
                    //record when user do something
                Log.create({
                    statement: 'User: ' + req.user.userName + ' entered to get all users log',
                    user: req.user.userName
                });
            } else if (log.constructor === String) {
                Log.find({ user: log }).then(logs => {
                    data.logs = logs
                    res.json(data)
                })
                Log.create({
                    statement: 'User: ' + req.user.userName + ' entered to get log of user: ' + log,
                    user: req.user.userName
                });
            }
        })
        //get list of clients saved
    router.get('/clients', function(req, res) {
        if (!req.user == false) {
            Log.create({
                statement: 'User: ' + req.user.userName + ' entered All Clients at date:' + Date(),
                user: req.user.userName
            });
            clientsModel.getAllClients().then(clients => {
                res.json({
                    clients: clients
                })
            })
        } else {
            res.json('login again');
        }
    })

    //main page
    router.get('/index', (req, res) => {
        res.json([req.user.userName, Date()])
        Log.create({
            statement: 'User: ' + req.user.userName + ' entered to main page at : ' + Date(),
            user: req.user.userName
        });
    })

    //signup
    router.get('/signup', (req, res, next) => {
        res.json("enter your data please");
    });
    router.post('/signup', bodyParser.json(), passport.authenticate('local-signup', {
        successRedirect: '/login',
        failureRedirect: '/signup',
        failureFlash: true
    }));

    //login
    router.get('/login', (req, res) => {
        req.logIn(User, () => {
            req.session.save(() => {
                res.json('login using your username and pass.')
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

    // show user details name and password 
    router.get('/profile', isLoggedIn, function(req, res) {
        res.json({ user: req.user });
    });

    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated()) {
            return next();
        }
        res.json('login first');
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
                    res.json(data);
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
            res.json('you logged out');
        });
    });
}