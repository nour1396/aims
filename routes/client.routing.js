const router = require('express').Router();
const Client = require('../models/clients').Client;
const Log = require('../models/log').Log;
const clientController = require('../controller/client.controller');
const listController = require('../controller/lists.controller');
const verifyJWT = require('../middleware/auth');


router.get('/api/lists', listController.handleLists);

//save data in database
router.post('/api/personForm', clientController.personFormHandler);

//get list of clients saved
router.get('/api/clients', clientController.getAllClients)

//get client by id 
router.get('/api/searchClient/:_id', (req, res) => {
    const id = req.params._id;
    Client.find({ "_id": id }, (err, client) => {
        if (err) throw (err);
        if (client.length > 0) {
            res.json(client[0])
            console.log(client);
        } else {
            res.end('No records were found');
        }
    })
});

//get page
router.get('/api/edit/:_id', (req, res) => {
    const _id = req.params._id;

    Client.find({ "_id": _id }, (err, data) => {
        if (err) throw err;
        if (data.length > 0) {
            res.json(data[0])
        } else {
            res.end('No records were found')
        }
    })
});

module.exports = router;