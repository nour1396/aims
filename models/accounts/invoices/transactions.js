const mongoose = require('mongoose');

const transactionSchema = mongoose.Schema({
    _id: String,
    projectID: String,
    dateCreated: {
        type: Date,
        default: Date.now
    },
    transactionDate: Date,
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
    reaccuranceType: String,
    taxState: String,
    currency: String,
    assets: [{
        assetID: String,
        assetName: String,
        assetsSerialNumber: Array,
        assetsQuantity: Number,
        assetsUnitOfMeasurment: String,
        assetsPrice: Number,
        assetsFrom: String,
        assetsTo: String,
    }],
    items: [{
        itemID: String,
        itemName: String,
        itemsSerialNumber: Array,
        itemsQuantity: Number,
        itemsUnitOfMeasurment: String,
        itemsPrice: Number,
        itemsPackageID: String,
        itemsPackageName: String,
        itemsFrom: String,
        itemsTo: String,
    }],
    services: [{
        serviceID: String,
        serviceName: String,
        servicesUnitOfMeasurment: String,
        servicesQuantity: Number,
        servicesPrice: Number,
        servicesStart: Date,
        servicesEnd: Date,
        servicesPackage: String,
        servicesFrom: String,
        servicesTo: String,

    }],
    jobs: [{
        jobID: String,
        jobName: String,
        jobsUnitOfMeasurment: String,
        jobsQuantity: Number,
        jobsPrice: Number,
    }],
    fees: [{
        feeID: String,
        feeName: String,
        feesUnitOfMeasurment: String,
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
        accountNotes: String,
        costCenter: [{
            costCenterName: String,
            costCenterValue: Number,
            parent: String,
            projectID: String
        }]
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
const Transaction = mongoose.model('transactions', transactionSchema);
exports.Transaction = Transaction