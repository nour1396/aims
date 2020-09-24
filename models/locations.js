const mongoose = require('mongoose');
const locationSchema = mongoose.Schema({
    locationID: String,
    locationDescription: String,
    cityCode: String,
    cityDescription: String,
    countryCode: String,
    countryDescription: String
});

const Location = mongoose.model('locations', locationSchema);
exports.Location = Location;