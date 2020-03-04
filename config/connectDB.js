const configDB = require('../config/database');
const mongoose = require('mongoose');
const dataS =
    mongoose.connect(configDB.urlS, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    }, (err) => { console.log('DBS connected ^_^ ') })

const data = module.exports