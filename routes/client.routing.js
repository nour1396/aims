const router = require('express').Router();
const Client = require('../models/clients').Client;
const Log = require('../models/log').Log;
const clientController = require('../controller/client.controller');
const listController = require('../controller/lists.controller');
const cors = require('cors');
let corsOptions = {
    origin: "https://aimsroots.herokuapp.com",
    optionsSuccessStatus: 200
}
router.get('/lists', cors(corsOptions), listController.handleLists);

//save data in database
router.post('/personForm', cors(corsOptions), clientController.personFormHandler);

//get list of clients saved
router.get('/clients', cors(corsOptions), clientController.getAllClients)

//get client by id 
router.get('/searchClient/:_id', cors(corsOptions), (req, res) => {
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
router.get('/edit/:_id', cors(corsOptions), (req, res) => {
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