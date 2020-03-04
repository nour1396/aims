const mongoose = require('mongoose');

const paymentSchema = mongoose.Schema({
    documentNumber: String,
    name: String,
    paymentMethod: String,
    paid: Number

})
const Payment = mongoose.model('payments', paymentSchema);
exports.Payment = Payment