const mongoose = require('mongoose');
const subAccountsSchema = new mongoose.Schema({
    nameEnglish: String,
    nature: String,
    nameArabic: String,
    parent: [{
        type: mongoose.Schema.ObjectId,
        ref: "Account"
    }]

})

const subAccounts = mongoose.model('subaccounts', subAccountsSchema);
module.exports = subAccounts;