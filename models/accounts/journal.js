const mongoose = require('mongoose');

const journalSchema = mongoose.Schema({
    accountCode: String,
    documentNumber: String,
    debit: {
        type: Number,
        required: true
    },
    credit: {
        type: Number,
        required: true
    },
    dueDate: Date

})
const journalEntry = mongoose.model('newjournalentries', journalSchema);
exports.journalEntry = journalEntry