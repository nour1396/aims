const mongoose = require('mongoose');

const checkbookSchema = mongoose.Schema({
    CheckbookID: String,
    CheckbookDescreption: String,
    CheckbookCurrencyID: String,
    CheckbookAccountNumber: { type: String, ref: 'accountscharts' },
    CheckbookAccountDescreption: String,
    CheckbookSerialNumber: String,
    BankAccountNumber: String,
}, { strict: false })
const Checkbook = mongoose.model('checkbooks', checkbookSchema);
exports.Checkbook = Checkbook;