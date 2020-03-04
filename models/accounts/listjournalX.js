const mongoose = require('mongoose');

const listjournalXSchema = mongoose.Schema({
    _id: String,
    totalDebit: Number,
    totalCredit: Number
})

const listjournalX = mongoose.model('listjournalxs', listjournalXSchema);
exports.listjournalX = listjournalX