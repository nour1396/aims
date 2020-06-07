const mongoose = require("mongoose");
var labelsTranslateSchema = new mongoose.Schema({
    english1: String,
    english2: String,
    english3: String,
    english4: String,
    english5: String,
    english6: String,
    spanish1: String,
    spanish2: String,
    spanish3: String,
    spanish4: String,
    spanish5: String,
    spanish6: String,
})
const labelstranslated = mongoose.model("newlabels", labelsTranslateSchema);
module.exports = labelstranslated;