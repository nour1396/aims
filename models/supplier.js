const mongoose = require('mongoose');

const supplierSchema = mongoose.Schema({
    name: String,
    address: String,
    phoneNumber: Number,
    documentNumber: String,
    date: Date,
    debit: Number,
    credit: Number
})
const Supplier = mongoose.model('suppliers', supplierSchema);
exports.Supplier = Supplier