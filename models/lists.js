const mongoose = require('mongoose');

const countrySchema = mongoose.Schema({
    country_english: String,
    country_arabic: String,
    time_zone: String,
    currency_code: String,
    Measuring_System_of_Units: String,
    international_union: String,
    language: String,
    flag: String,
    nationality_english: String,
    nationality_arabic: String,
    full_name: String,
    capital: String,
    Phone_code: String,
    TLD: String,
    continent: String,
    A2_ISO: String,
    A3_UN: String,
    NUM_UN: String
})
const Country = mongoose.model('Country', countrySchema);
exports.Country = Country


const maritalStatusSchema = mongoose.Schema({
    english: String,
    arabic: String,
    gender: String
})
const maritalStatus = mongoose.model('marital_status', maritalStatusSchema);
exports.maritalStatus = maritalStatus


const religionSchema = mongoose.Schema({
    english: String,
    arabic: String,
    category_english: String,
    category_arabic: String
});
const Religion = mongoose.model('religious_subcategory', religionSchema);
exports.Religion = Religion


const languageSchema = mongoose.Schema({
    english_name: String,
    symbol: String,
    arabic_name: String,
    base_language: String,
    script: String,
    written_direction: String
});
const Language = mongoose.model('Language', languageSchema);
exports.Language = Language


const titleSchema = mongoose.Schema({
    male_english: String,
    male_arabic: String,
    Gender: String
});
const Title = mongoose.model('honorifi_title', titleSchema);
exports.Title = Title