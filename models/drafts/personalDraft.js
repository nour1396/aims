const mongoose = require('mongoose');

const draftSchema = mongoose.Schema({
    user: String,
    personalInformation: {
        PI_firstName: String,
        PI_secondName: String,
        PI_thirdName: String,
        PI_fourthName: String,
        PI_lastName: String,
        PI_title: String,
        PI_gender: String,
        PI_nationality: String,
        PI_maritalStatus: String
    }
})
const DraftPersonal = mongoose.model('draft_personal', draftSchema)
exports.DraftPersonal = DraftPersonal