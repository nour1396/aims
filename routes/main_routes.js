var User = require('../models/user').User;
var Client = require('../models/clients').Client;
var passport = require('passport')
var clientsModel = require('../models/clients')
const Log = require('../models/log').Log;
const DraftClient = require('../models/drafts/draftClientEN').DraftClient;
const DraftClientAr = require('../models/drafts/draftClientAR').DraftClientAr;
const DraftPersonal = require('../models/drafts/personalDraft').DraftPersonal;
var bodyParser = require('body-parser');
const { authJwt } = require("../config");
module.exports = function(router) {
    //to show log for specific user 
    router.get('/log', [authJwt.verifyToken, authJwt.isAdmin], (req, res) => {
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
    router.get('/clients', [authJwt.verifyToken, authJwt.isAdmin], function(req, res) {
        /* if (!req.user == false) {
            Log.create({
                statement: 'User: ' + req.user.userName + ' entered All Clients at date:' + Date(),
                user: req.user.userName
            }); */
        clientsModel.getAllClients().then(clients => {
                const response = {
                    count: clients.length,
                    clients: clients
                }
                res.json(response)
            })
            /* } else {
                res.json('login again');
            } */
    })

    //main page
    router.get('/index', (req, res) => {
        res.json([req.user.userName, Date()])
        Log.create({
            statement: 'User: ' + req.user.userName + ' entered to main page at : ' + Date(),
            user: req.user.userName
        });
    })
}