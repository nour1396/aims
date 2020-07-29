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
const maritalStatus = mongoose.model('maritalstatuses', maritalStatusSchema);
exports.maritalStatus = maritalStatus


const religionSchema = mongoose.Schema({
    english: String,
    arabic: String,
    category_english: String,
    category_arabic: String
});
const Religion = mongoose.model('religioussubcategories', religionSchema);
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
const Title = mongoose.model('honorifititle', titleSchema);
exports.Title = Title

const genderSchema = mongoose.Schema({
    english: String,
    arabic: String
});
const Gender = mongoose.model('genders', genderSchema);
exports.Gender = Gender

const nationalitySchema = mongoose.Schema({
    english: String,
    arabic: String
});
const Nationality = mongoose.model('nationalities', nationalitySchema);
exports.Nationality = Nationality

const militaryStatusSchema = mongoose.Schema({
    english: String,
    arabic: String
});
const MilitaryStatus = mongoose.model('militarystatuses', militaryStatusSchema);
exports.MilitaryStatus = MilitaryStatus

const passportTypeSchema = mongoose.Schema({
    english: String,
    arabic: String
});
const PassportType = mongoose.model('passporttypes', passportTypeSchema);
exports.PassportType = PassportType;

const bloodGroupSchema = mongoose.Schema({
    english: String,
    arabic: String
});
const BloodGroup = mongoose.model('bloodgroups', bloodGroupSchema);
exports.BloodGroup = BloodGroup;

const visaTypeSchema = mongoose.Schema({
    english: String,
    arabic: String
});
const VisaType = mongoose.model('visatypes', visaTypeSchema);
exports.VisaType = VisaType;

const residencePermitsTypesSchema = mongoose.Schema({
    english: String,
    arabic: String
});
const ResidencePermitsTypes = mongoose.model('residencepermitstypes', residencePermitsTypesSchema);
exports.ResidencePermitsTypes = ResidencePermitsTypes;

const currencySchema = mongoose.Schema({
    english: String,
    arabic: String
});
const Currency = mongoose.model('currencies', currencySchema);
exports.Currency = Currency;

const degreeLevelSchema = mongoose.Schema({
    english: String,
    arabic: String
});
const degreeLevel = mongoose.model('degreelevels', degreeLevelSchema);
exports.degreeLevel = degreeLevel;


const gradesSchema = mongoose.Schema({
    english: String,
    arabic: String
});
const Grades = mongoose.model('grades', gradesSchema);
exports.Grades = Grades;

const addressTypesSchema = mongoose.Schema({
    english: String,
    arabic: String
});
const addressTypes = mongoose.model('addresstypes', addressTypesSchema);
exports.addressTypes = addressTypes;

const realestatetypesSchema = mongoose.Schema({
    english: String,
    arabic: String
});
const realEstateType = mongoose.model('realestatetypes', realestatetypesSchema);
exports.realEstateType = realEstateType;

const drivinglicencetypesSchema = mongoose.Schema({
    english: String,
    arabic: String
});
const drivingLicenceType = mongoose.model('drivinglicencetypes', drivinglicencetypesSchema);
exports.drivingLicenceType = drivingLicenceType;

const parentstatusSchema = mongoose.Schema({
    english: String,
    arabic: String
});
const parentStatus = mongoose.model('parentstatuses', parentstatusSchema);
exports.parentStatus = parentStatus;

const schoolstypesSchema = mongoose.Schema({
    english: String,
    arabic: String
});
const schoolsType = mongoose.model('schoolstypes', schoolstypesSchema);
exports.schoolsType = schoolsType;

const syndicatestypesSchema = mongoose.Schema({
    english: String,
    arabic: String
});
const syndicatesType = mongoose.model('syndicatestypes', syndicatestypesSchema);
exports.syndicatesType = syndicatesType;

const positionsSchema = mongoose.Schema({
    english: String,
    arabic: String
});
const Position = mongoose.model('positions', positionsSchema);
exports.Position = Position;

const colorsSchema = mongoose.Schema({
    english: String,
    arabic: String
});
const Colors = mongoose.model('colors', colorsSchema);
exports.Colors = Colors;

const bodytypesSchema = mongoose.Schema({
    english: String,
    arabic: String
});
const bodyType = mongoose.model('bodytypes', bodytypesSchema);
exports.bodyType = bodyType;

const hairtypesSchema = mongoose.Schema({
    english: String,
    arabic: String
});
const hairType = mongoose.model('hairtypes', hairtypesSchema);
exports.hairType = hairType;

const haircolorsSchema = mongoose.Schema({
    english: String,
    arabic: String
});
const hairColor = mongoose.model('haircolors', haircolorsSchema);
exports.hairColor = hairColor;

const disabilitiesSchema = mongoose.Schema({
    english: String,
    arabic: String
});
const Disabilities = mongoose.model('disabilities', disabilitiesSchema);
exports.Disabilities = Disabilities;

const missingPartsSchema = mongoose.Schema({
    english: String,
    arabic: String
});
const missingParts = mongoose.model('missingparts', missingPartsSchema);
exports.missingParts = missingParts;

const bankaccountSchema = mongoose.Schema({
    english: String,
    arabic: String
});
const bankAccountsTypes = mongoose.model('bankaccountstypes', bankaccountSchema);
exports.bankAccountsTypes = bankAccountsTypes;

const banksInEgyptSchema = mongoose.Schema({
    english: String,
    arabic: String
});
const banksInEgypt = mongoose.model('banksinegypts', banksInEgyptSchema);
exports.banksInEgypt = banksInEgypt;

const yearsOfExperienceSchema = mongoose.Schema({
    english: String,
    arabic: String
});
const yearsOfExperience = mongoose.model('yearsofexperiences', yearsOfExperienceSchema);
exports.yearsOfExperience = yearsOfExperience;

const transactionsTypesSchema = mongoose.Schema({
    english: String,
    arabic: String
});
const transactionsTypes = mongoose.model('transactionstypes', transactionsTypesSchema);
exports.transactionsTypes = transactionsTypes;