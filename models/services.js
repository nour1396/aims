const mongoose = require('mongoose');

var serviceSchema = mongoose.Schema({
    information: {
        serviceID: String,
        serviceName: String,
        owner: String,
        serviceDescription: String,
        status: String,
        type: String,
        startDate: String,
        startTime: String,
        endDate: String,
        endTime: String,
        serviceRendered: String,
        detailsOfService: String,
        requestStartDate: String,
        schduledStartDate: String,
        servicePeriod: String,
        lastUpdated: String,
        job: String,
        dataCenter: String,
        paymentMethod: String,
        firstPaymentAmount: String,
        recurringAmount: String,
        billingCycle: String,
        servicePrice: String
    }
})
var addService = mongoose.model('service', serviceSchema);
exports.addService = addService