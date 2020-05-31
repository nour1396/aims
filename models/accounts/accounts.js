const mongoose = require('mongoose');

const Account = mongoose.model(
    "Account",
    new mongoose.Schema({
        _id: Number,
        nameEnglish: String,
        nature: String,
        nameArabic: String
    })
);

module.exports = Account;