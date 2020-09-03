const mongoose = require('mongoose');

const addItemSchema = mongoose.Schema({
    english: String,
    arabic: String,
    categoryEnglish: String,
    categoryArabic: String,
    pricePerOne: Number,
    quantity: Number
})
const addItem = mongoose.model('listitem', addItemSchema);
exports.addItem = addItem



const addItemCategorySchema = mongoose.Schema({
    categoryInEnglish: String,
    categoryInArabic: String
})
const addItemCategory = mongoose.model('itemcategories', addItemCategorySchema);
exports.addItemCategory = addItemCategory