const mongoose = require('mongoose');

const purchaseSchema = mongoose.Schema({
    supplier: {
        name: String,
        address: String,
        phoneNumber: String
    },
    confirmationDate: String,
    paymentTerms: String,
    documentNumber: String,
    productName: String,
    pricePerOne: Number,
    quantity: Number
})
const Purchase = mongoose.model('purchases', purchaseSchema);
exports.Purchase = Purchase