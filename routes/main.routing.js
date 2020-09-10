const router = require('express').Router(),
    User = require('../models/users').User,
    Log = require('../models/log').Log;

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
});

//main page
router.get('/', (req, res) => {
    res.render('index')
});

module.exports = router