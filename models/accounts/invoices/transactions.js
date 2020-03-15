const mongoose = require('mongoose');

var transactionSchema = mongoose.Schema({
    dateCreated: {
        type: Date,
        default: Date.now
    },
    transactionDate: String,
    postDate: Date,
    postNumber: String,
    patchNumber: String,
    docNumber: String,
    invoiceNumber: String,
    from: {
        fromEntity: String,
        fromSubEntity: String
    },
    to: {
        toEntity: String,
        toSubEntity: String
    },
    transactionType: String,
    transactionClass: String,
    transactionNumber: String,
    parentTransaction: String,
    reaccurance: String,
    reaacuraneType: String,
    taxState: String,
    currency: String,
    assets: [{
        assetID: String,
        assetName: String,
        assetsSerialNumber: Array,
        assetsQuantity: Number,
        assetsUintOfMeasurment: String,
        assetsPrice: Number,
        assetsFrom: String,
        assetsTo: String,
        /* assetsTotal: {
             type: Number,
             default: function() {
                 return (this.assets.assetsQuantity * this.assets.assetsPrice)
             }
         }*/
    }],
    items: [{
        itemID: String,
        itemName: String,
        itemsSerialNumber: Array,
        itemsQuantity: Number,
        itemsUintOfMeasurment: String,
        itemsPrice: Number,
        itemsPackageID: String,
        itemsPackageName: String,
        itemsFrom: String,
        itemsTo: String,
        /* itemsTotal: {
             type: String,
             default: function() {
                 return (this.items[0].itemsQuantity * this.items[0].itemsPrice)
             }
         }*/
    }],
    services: [{
        serviceID: String,
        serviceName: String,
        servicesUintOfMeasurment: String,
        servicesQuantity: Number,
        servicesPrice: Number,
        servicesStart: Date,
        servicesEnd: Date,
        servicesPackage: String,
        servicesFrom: String,
        servicesTo: String,
        /* servicesTotal: {
             type: Number,
             default: function() {
                 return (this.services.servicesQuantity * this.services.servicesPrice)
             }
         }*/
    }],
    jobs: [{
        jobID: String,
        jobName: String,
        jobsUintOfMeasurment: String,
        jobsQuantity: Number,
        jobsPrice: Number,
        /* jobsTotal: {
             type: Number,
             default: function() {
                 return (this.jobs.jobsQuantity * this.jobs.jobsPrice)
             }
         }*/
    }],
    fees: [{
        feeID: String,
        feeName: String,
        feesUintOfMeasurment: String,
        feesQuantity: Number,
        feesPrice: Number,

    }],
    fines: [{
        fineID: String,
        fineName: String,
        finesValue: Number

    }],
    interestAndProfits: [{
        interestAndProfitsID: String,
        interestAndProfitsName: String,
        interestAndProfitsValue: Number
    }],
    taxes: [{
        taxID: String,
        taxName: String,
        taxType: String,
        taxesRatioOrFixedValue: Number,
        taxesValue: Number,
    }],
    customs: [{
        customID: String,
        customName: String,
        customType: String,
        customsRatioOrFixedValue: Number,
        customsValue: Number,
    }],
    currency: [{
        currencySource: String,
        currencyDestination: String,
        currencyRate: String,
        currencyAmount: String,
    }],
    cash: [{
        cashValue: Number,
        cashCurrency: String,
        cashDetailed: String,
        cashPapers: String,
        cashFrom: String,
        cashTo: String,
    }],
    accounts: [{
        accountNumber: String,
        accountName: String,
        accountDebit: Number,
        accountCredit: Number,
        accountCurrency: String,
        accountNotes: String
    }],
    checks: [{
        checkOwner: String,
        checkBankName: String,
        checkPayee: String,
        checkDate: Date,
        checkAmount: Number,
        checkCurrency: String,
        checkNumber: String,
        checkDueDate: Date,
        checkType: String,
        checkCopy: String,

    }],
    hr: [{
        hrEmployeeCode: String,
        hrBaseSalary: String,
        hrGroupedSpecialBonus: String,
        hrPreviousYearBonus: String,
        hrExceptionalExpensiveLivingBonus: String,
        hrWorkNatureAllowance: String,
        hrLaborHolidayBonus: String,
        hrFoodAllowance: String,
        hrSocialBonus: String,
        hrInsurance: String,
        hrStamp: String,
        hrWorkGainTax: String,
        hrSyndicate: String
    }]
})
var Transaction = mongoose.model('transactions', transactionSchema);
exports.Transaction = Transaction