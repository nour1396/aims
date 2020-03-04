const mongoose = require('mongoose');

var orgSchema = mongoose.Schema({
    organizationInformation: {
        orgNameInArabic: String,
        orgNameInEnglish: String,
        establishmentDate: String,
        organizationType: String
    },
    addressDetails: {
        addressType: String,
        country: String,
        city: String,
        streetName: String,
        area: String,
        realStateType: String,
        realStateNumber: String,
        detailedAddress: String,
        coordinates: String
    },
    contactInformation: {
        countryCode: String,
        governorateCode: String,
        landLine: String,
        faxNumber: String,
        email: String,
        logoURL: String,
        website: String,
        mobileNumber: String,
        contactLanguage: String,
        postOfficeCode: String,
        bankAccount: String,
        accountType: String,
        accountNumber: String,
        bankName: String,
        currency: String,
        branch: String
    },
    activityOfBusiness: {
        category: String,
        subCategory: String
    }

})
var Organization = mongoose.model('organization', orgSchema);
exports.Organization = Organization