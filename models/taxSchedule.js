const mongoose = require('mongoose');

const taxScheduleSchema = mongoose.Schema({
    _id: String,
    TaxSchedualsDescreption: String,
    SelectedTaxDetailsIDs: [{
        type: mongoose.Schema.Types.String,
        ref: 'taxes'
    }],

});

const TaxSchedule = mongoose.model('taxSchedules', taxScheduleSchema);
exports.TaxSchedule = TaxSchedule;