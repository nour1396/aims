const mongoose = require('mongoose');

const taxScheduleSchema = mongoose.Schema({
    TaxSchedualsID: String,
    TaxSchedualsDescreption: String,
    SelectedTaxDetailsIDs: String,

}, { strict: false });

const TaxSchedule = mongoose.model('taxSchedules', taxScheduleSchema);
exports.TaxSchedule = TaxSchedule;