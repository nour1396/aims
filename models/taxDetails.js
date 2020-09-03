const mongoose = require('mongoose');

const taxDetailsSchema = mongoose.Schema({
    TaxID: String,
    TaxDescreption: String,
    TaxType: String,
    TaxPercentage: String,
    TaxAccount: String,
    TaxAccountDescreption: String,
}, { strict: false });

const Tax = mongoose.model('taxes', taxDetailsSchema);
exports.Tax = Tax;