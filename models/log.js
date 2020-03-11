const mongoose = require('mongoose');

const logSchema = mongoose.Schema({
    statement: String,
    user: String,
    createdAt: {
        type: Date,
        default: new Date()
    }
})
const Log = mongoose.model('log', logSchema)
exports.Log = Log