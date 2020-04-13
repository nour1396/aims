var configDB = require('../config/database');
var mongoose = require('mongoose');
var Client = require('../models/clients').Client;
const Country = require('../models/lists').Country;
const Language = require('../models/lists').Language;
const maritalStatus = require('../models/lists').maritalStatus;
const Religion = require('../models/lists').Religion;
const Title = require('../models/lists').Title;
const Log = require('../models/log').Log;
const DraftClient = require('../models/drafts/draftClientEN').DraftClient;
const DraftClientAr = require('../models/drafts/draftClientAR').DraftClientAr;
const DraftPersonal = require('../models/drafts/personalDraft').DraftPersonal;
const { authJwt } = require("../config");
var assert = require('assert')
module.exports = function(router) {
    //data-en **get page to enter data
    router.get('/data-en', function(req, res, next) {
        if (!req.user == false) {
            Log.create({
                statement: 'User: ' + req.user.userName + ' entered data-en ',
                user: req.user.userName
            });
            let data = {}
                /*
    after javascript code ...
    The last thing is to check if the logged in user has a draft. if so grab it and render data-en-draft
    else, it will render data-en 
    */
            DraftClient.find({ user: req.user.userName }).then(records => {
                if (records.length > 0) {
                    data.draft = records[0];
                    // get data from database
                    Country.find({}).then(countries => {
                        data.countries = countries
                        maritalStatus.find({}).then(maritalstatus => {
                            data.maritalstatus = maritalstatus;
                            Title.find({}).then(titles => {
                                data.titles = titles
                                Religion.find({}).then(religions => {
                                    data.religions = religions
                                    Language.find({}).then(languages => {
                                        data.languages = languages
                                        res.json(data) // at the end
                                    })
                                })
                            })
                        })
                    })
                } else {
                    Country.find({}).then(countries => {
                        data.countries = countries
                        maritalStatus.find({}).then(maritalstatus => {
                            data.maritalstatus = maritalstatus;
                            Title.find({}).then(titles => {
                                data.titles = titles
                                Religion.find({}).then(religions => {
                                    data.religions = religions
                                    Language.find({}).then(languages => {
                                        data.languages = languages
                                        res.json(data) // at the end
                                    })
                                })

                            })

                        })
                    })
                }
            })
        } else {
            res.json('login first');
        }
    })

    /*
    Now I made my ajax call and data is sent to the server
    first, grab the field and the value
    then, make a query, but it's special query. it will create a new draft for the user who logged in if he has no previous drafts
    but if he has a previous draft, it will update it
    that's all
    */
    router.post('/data-en/draft', (req, res) => {
            const field = req.body.field;
            const value = req.body.value;
            var query = { user: req.user.userName },
                update = {
                    [field]: value
                },
                options = { upsert: true, new: true, setDefaultsOnInsert: true };
            // Find the document
            DraftClient.findOneAndUpdate(query, update, options, function(error, result) {
                if (error) return;
                // do something with the document
                res.end();
            })
        })
        //save data in database
    router.post('/data-en', (req, res, next) => {
        DraftClient.deleteOne({ /* user: req.user.userName */ }).then(resolve => {});
        var newClient = new Client(req.body);
        var error

        newClient.save((data) => {
            if (error) {
                return next(error)
            } else {
                res.status(200).json([data, "saved"])
            }
        });
        //when user save data will record that in database
        /*    Log.create({
               statement: 'User: ' + req.user.userName + ' entered /data-en[POST] to add new client with ID: ' + req.body.IC_idNumber +
                   ' and name :' + req.body.PI_firstName + ' ' + req.body.PI_secondName,
               user: req.user.userName
           }); */
    });


    //get client by id 
    router.get('/searchC', [authJwt.verifyToken, authJwt.isAdmin], (req, res) => {
            const searchC = req.query.searchC;
            //when user search client data will record that in database
            Log.create({
                statement: 'User: ' + req.user.userName + ' entered to search for client',
                user: req.user.userName
            });

            Client.find({ "_id": searchC }, (err, data) => {
                if (err) throw (err);
                if (data.length > 0) {
                    res.json({ Client: data[0] })
                } else {
                    res.end('No records were found');
                }
            })
            Log.create({
                statement: 'User: ' + req.user.userName + ' entered /data-en[POST] to search for client :' + searchC,
                user: req.user.userName
            });
        })
        //get page
    router.get('/edit/:_id', [authJwt.verifyToken, authJwt.isAdmin], (req, res) => {
            const _id = req.params._id;
            Log.create({
                statement: 'User: ' + req.user.userName + ' entered /data-en to search for client :' + _id,
                user: req.user.userName
            });

            Client.find({ "_id": _id }, (err, data) => {
                if (err) throw err;
                if (data.length > 0) {
                    res.json({ Client: data[0] })
                } else {
                    res.end('No records were found')
                }
            })
        })
        //update data of specific client
    router.post('/update', [authJwt.verifyToken, authJwt.isAdmin], (req, res) => {
            Log.create({
                statement: 'User: ' + req.user.userName + ' entered /data-en[POST] to update client with ID:' + req.body.userId,
                user: req.user.userName
            });

            const _id = req.body.userId;
            const PI_firstName = req.body.PI_firstName;
            const PI_secondName = req.body.PI_secondName;
            const PI_thirdName = req.body.PI_thirdName;
            const PI_fourthName = req.body.PI_fourthName;
            const PI_lastName = req.body.PI_lastName;
            const PI_gender = req.body.PI_gender;
            const PI_nationality = req.body.PI_nationality;
            const PI_title = req.body.PI_title;


            Client.updateOne({ "_id": _id }, {
                personalInformation: {
                    PI_firstName,
                    PI_secondName,
                    PI_thirdName,
                    PI_fourthName,
                    PI_lastName,
                    PI_gender,
                    PI_nationality,
                    PI_title
                }
            }).then(status => {
                res.redirect(302, '/index')
            }).catch(err => console.log('got an error: ' + err))
        })
        ///
    router.post('/data-en-copy', (req, res) => {
        Log.create({
            statement: 'User: ' + req.user.userName + ' entered /data-en[POST] to update',
            user: req.user.userName
        });
        Client.updateMany({}, (err, updata) => {
            if (err) throw (err);
            res.json({ Client: updata })
        })
    })

    //data client in arabic
    router.get('/data-ar', function(req, res, next) {
        if (!req.user == false) {
            Log.create({
                statement: 'User: ' + req.user.userName + ' entered /data-ar[GET]',
                user: req.user.userName
            });
            let data = {}
                // get data from database
            DraftClientAr.find({ user: req.user.userName }).then(records => {
                if (records.length > 0) {
                    data.draft = records[0];
                    Country.find({}).then(countries => {
                        data.countries = countries
                        maritalStatus.find({}).then(maritalstatus => {
                            data.maritalstatus = maritalstatus;
                            Title.find({}).then(titles => {
                                data.titles = titles
                                Religion.find({}).then(religions => {
                                    data.religions = religions
                                    Language.find({}).then(languages => {
                                        data.languages = languages
                                        res.json(data) // at the end
                                    })
                                })
                            })
                        })
                    })
                } else {
                    Country.find({}).then(countries => {
                        data.countries = countries
                        maritalStatus.find({}).then(maritalstatus => {
                            data.maritalstatus = maritalstatus;
                            Title.find({}).then(titles => {
                                data.titles = titles
                                Religion.find({}).then(religions => {
                                    data.religions = religions
                                    Language.find({}).then(languages => {
                                        data.languages = languages
                                        res.render('data-ar', data) // at the end
                                    })
                                })

                            })

                        })
                    })
                }
            })
        } else {
            res.json('login first');
        }
    })

    router.post('/data-ar/draft', (req, res) => {
        const field = req.body.field;
        const value = req.body.value;
        var query = { user: req.user.userName },
            update = {
                [field]: value
            },
            options = { upsert: true, new: true, setDefaultsOnInsert: true };
        // Find the document
        DraftClientAr.findOneAndUpdate(query, update, options, function(error, result) {
            if (error) return;
            // do something with the document
            res.end();
        })
    })


    router.post('/data-ar', (req, res) => {
        DraftClientAr.deleteOne({ user: req.user.userName }).then(resolve => {});
        var newClient = new Client(req.body);
        newClient.save(() => {
            res.json('saved!')
        });
        Log.create({
            statement: 'User: ' + req.user.userName + ' entered /data-ar[POST] to add new client with ID: ' + req.body._id +
                ' and name :' + req.body.PI_firstName + ' ' + req.body.PI_secondName,
            user: req.user.userName
        });
    })

    router.get('/personalInf', function(req, res, next) {
        if (!req.user == false) {
            let data = {}
                // get data from database
            DraftPersonal.find({ user: req.user.userName }).then(records => {
                if (records.length > 0) {
                    data.draft = records[0];
                    Country.find({}).then(countries => {
                        data.countries = countries
                        maritalStatus.find({}).then(maritalstatus => {
                            data.maritalstatus = maritalstatus;
                            Title.find({}).then(titles => {
                                data.titles = titles
                                res.json(data) // at the end
                            })
                        })
                    })
                } else {
                    Country.find({}).then(countries => {
                        data.countries = countries
                        maritalStatus.find({}).then(maritalstatus => {
                            data.maritalstatus = maritalstatus;
                            Title.find({}).then(titles => {
                                data.titles = titles
                                res.json(data) // at the end
                            })
                        })
                    })
                }
            })
        } else {
            res.json('login first');
        }
    })

    router.post('/personalInf/draft', (req, res) => {
        const field = req.body.field;
        const value = req.body.value;
        var query = { user: req.user.userName },
            update = {
                [field]: value
            },
            options = { upsert: true, new: true, setDefaultsOnInsert: true };
        // Find the document
        DraftPersonal.findOneAndUpdate(query, update, options, function(error, result) {
            if (error) return;
            // do something with the document
            res.end();
        })
    })

    router.post('/personalInf', (req, res) => {
        DraftPersonal.deleteOne({ user: req.user.userName }).then(resolve => {});
        var newClient = new Client(req.body);
        newClient.save(() => {
            res.json('saved!')
        });
        Log.create({
            statement: 'User: ' + req.user.userName + ' entered /personalInfo[POST] to add new client with name :' + req.body.PI_firstName + ' ' + req.body.PI_secondName,
            user: req.user.userName
        });
    });
};