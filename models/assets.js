const mongoose = require('mongoose');

var assetSchema = mongoose.Schema({
    information: {
        assetNumber: String,
        assetCode: String,
        description: String,
        serialNumber: String,
        acquisitionDate: String,
        placedInServiceDate: String,
        purchaseValue: String,
        location: String,
        department: String,
        purchaseOrderNumber: String,
        quantity: String,
        manufacturer: String,
        warrantyNumber: String,
        model: String,
        ownership: String,
        bought: String,
        propertyType: String,
        leaseNumber: String,
        lessor: String
    },
    depreciation: {
        currentCost: String,
        originalCost: String,
        salvageValue: String,
        salvageValuePercen: String,
        netBookValue: String,
        depreciationMethod: String,
        lifeYears: String,
        months: String,
        bonusRule: String,
        amortizationStarDate: String,
        amortizeNBVoverRemainingLife: String,
        Ceiling: String,
        YTDDepreciation: String,
        accumulatedDepreciation: String,
        depreciationValue: String
    },
    depreciationLimit: {
        type: String,
        limitAmount: String,
        percent: String
    }
})
var addAsset = mongoose.model('addedAsset', assetSchema);
exports.addAsset = addAsset