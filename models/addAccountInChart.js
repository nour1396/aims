const mongoose = require('mongoose');

const newAccInAccChartSchema = mongoose.Schema({
    accountNumber: String,
    accountEnglish: String,
    nature: String,
    accountArabic: String,
    status: String,
    category: String,
    parent: String,
    descreptionEnglish: String,
    descreptionArabic: String,
    notes: String
})
const newAccInAccChart = mongoose.model('accountscharts', newAccInAccChartSchema)
exports.newAccInAccChart = newAccInAccChart;