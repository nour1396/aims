const mongoose = require("mongoose");
var labelsTranslateSchema = new mongoose.Schema({
    _id: String,
    english: String,
    arabic: String,
    spanish: String
        /* ,
            Farsi: String */
})
const labelstranslated = mongoose.model("labelstranslates", labelsTranslateSchema);
module.exports = labelstranslated;