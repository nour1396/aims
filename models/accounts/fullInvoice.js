const mongoose = require('mongoose');

const fullInvoiceSchema = mongoose.Schema({
    clientID: String,
    type: String,
    date: Date,
    documentNumber: String,
    accounts: [{
        accountID: String,
        debit: Number,
        credit: Number,

    }],
    products: [{
        productID: [{ serialNumber: String }],
        description: String,
        quantity: Number,
        price: Number,

    }]
})
const fullInvoice = mongoose.model('fullinvoices', fullInvoiceSchema);
exports.fullInvoice = fullInvoice