const mongoose = require('mongoose');
const itemSchema = mongoose.Schema({
    itemClassCode: String,
    itemNumber: String,
    itemDescription: String,
    itemGenericDescription: String,
    itemShortName: String,
    itemType: String,
    valuationMethod: String,
    itemTaxScheduleID: {
        type: String,
        ref: 'taxSchedules'
    },
    unitofMeasurementScheduleID: {
        type: String,
        ref: 'measurementunitslists'
    },
    sellingUnitofMeasurement: {
        type: String,
        ref: 'measurementunitslists'
    },
    purchasingUnitofMeasurement: {
        type: String,
        ref: 'measurementunitslists'
    },
    itemTrackingOption: String,
    reorderLevel: String,
    maximumLevel: String,
    siteID: String,
    vendorID: String,
    standardCost: String,
    currentCost: String,
    accounts: {
        inventory: String,
        inventoryOffset: String,
        inventoryReturn: String,
        costOfGoodsSold: String,
        sales: String,
        markdowns: String,
        salesReturn: String,
        dropShipItems: String,
        inUse: String,
        inService: String,
        Damaged: String,
        Variance: String,
        purchasePriceVariance: String,
    }

});

const Item = mongoose.model('items', itemSchema);
exports.Item = Item;