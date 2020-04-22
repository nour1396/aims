const mongoose = require('mongoose');

var transactionSchema = mongoose.Schema({
    dateCreated: {
        type: Date,
        default: Date()
    },
    transactionDate: String,
    postNumber: {
        type: Number,
        min: 5,
        max: 10,
        validate: {
            validator: function(n) {
                return n.length >= 5 && n.length < 10;
            },
            message: 'Invalid postNumber , postNumber should contain from 4 to 10 charcters  b'
        }
    },
    patchNumber: {
        type: Number,
        min: 5,
        max: 10,
        validate: {
            validator: function(n) {
                return n.length >= 5 && n.length < 10;
            },
            message: 'Invalid patchNumber , patchNumber should contain from 4 to 10 charcters  b'
        }
    },
    docNumber: {
        type: Number,
        min: 5,
        max: 10,
        validate: {
            validator: function(n) {
                return n.length >= 5 && n.length < 10;
            },
            message: 'Invalid docNumber , docNumber should contain from 4 to 10 charcters  b'
        }
    },
    invoiceNumber: {
        type: Number,
        min: 5,
        max: 10,
        validate: {
            validator: function(n) {
                return n.length >= 5 && n.length < 10;
            },
            message: 'Invalid invoiceNumber , invoiceNumber should contain from 4 to 10 charcters  b'
        }
    },
    from: {
        fromEntity: {
            type: String,
            lowercase: true,
        },
        fromSubEntity: {
            type: String,
            lowercase: true,
        }
    },
    to: {
        toEntity: {
            type: String,
            lowercase: true,
        },
        toSubEntity: {
            type: String,
            lowercase: true,
        }
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
        assetName: {
            type: String,
            lowercase: true,
        },
        assetsSerialNumber: Array,
        assetsQuantity: Number,
        assetsUintOfMeasurment: String,
        assetsPrice: Number,
        assetsFrom: String,
        assetsTo: String,
    }],
    items: [{
        itemID: {
            type: Number,
            min: 4
        },
        itemName: {
            type: String,
            lowercase: true,
        },
        itemsSerialNumber: Array,
        itemsQuantity: Number,
        itemsUintOfMeasurment: String,
        itemsPrice: Number,
        itemsPackageID: String,
        itemsPackageName: String,
        itemsFrom: String,
        itemsTo: String,
    }],
    services: [{
        serviceID: String,
        serviceName: String,
        servicesUintOfMeasurment: String,
        servicesQuantity: Number,
        servicesPrice: Number,
        servicesStart: {
            type: String,
            unique: true,
            validate: [{
                validator: function(n) {
                    prevent = /^\d{2}[./-]\d{2}[./-]\d{4}$/
                    return prevent.test(n);
                },
                message: 'Invalid date'
            }]
        },
        servicesEnd: {
            type: String,
            unique: true,
            validate: [{
                validator: function(n) {
                    prevent = /^\d{2}[./-]\d{2}[./-]\d{4}$/
                    return prevent.test(n);
                },
                message: 'Invalid date'
            }]
        },
        servicesPackage: String,
        servicesFrom: String,
        servicesTo: String,
    }],
    jobs: [{
        jobID: String,
        jobName: String,
        jobsUintOfMeasurment: String,
        jobsQuantity: Number,
        jobsPrice: Number,
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
        checkDate: {
            type: String,
            unique: true,
            validate: [{
                validator: function(n) {
                    prevent = /^\d{2}[./-]\d{2}[./-]\d{4}$/
                    return prevent.test(n);
                },
                message: 'Invalid date'
            }]
        },
        checkAmount: Number,
        checkCurrency: String,
        checkNumber: String,
        checkDueDate: {
            type: String,
            unique: true,
            validate: [{
                validator: function(n) {
                    prevent = /^\d{2}[./-]\d{2}[./-]\d{4}$/
                    return prevent.test(n);
                },
                message: 'Invalid date'
            }]
        },
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