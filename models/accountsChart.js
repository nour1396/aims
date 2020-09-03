const mongoose = require('mongoose');

const accountsChartSchema = mongoose.Schema({
    accountEnglish: String,
    nature: String,
    accountArabic: Date,
    category: String,
    subCategory: String,
    debit: Number,
    credit: Number,
    NetBalance: {
        type: Number,
        default: function() {
            return this.debit - this.credit
        }
    }
})

const accountsChart = mongoose.model('accountscharts', accountsChartSchema);
exports.accountsChart = accountsChart