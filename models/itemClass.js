const mongoose = require('mongoose');
const itemClassSchema = mongoose.Schema({
    itemClassCode: String,
    itemGenericDescription: String,
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
    vendorID: String
});

const ItemClass = mongoose.model('itemclasses', itemClassSchema);
exports.ItemClass = ItemClass;