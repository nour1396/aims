const mongoose = require('mongoose');

const costCenterSchema = mongoose.Schema({
    CostCenterCode: String,
    controllingArea: String,
    valid: {
        from: Date,
        to: Date
    },
    basicData: {
        name: String,
        description: String,
        userResponsible: String,
        personResponsible: String,
        department: String,
        costCenterCategory: String,
        hierarchyArea: String,
        businessArea: String,
        functionalArea: String,
        currency: String,
        profitCenter: String
    }
})
const CostCenter = mongoose.model('costcenters', costCenterSchema)
exports.CostCenter = CostCenter