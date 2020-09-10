const mongoose = require('mongoose');

const transactionSchema = mongoose.Schema( /* {} */ {
    _id: String,
    projectID: String,
    dateCreated: {
        type: Date,
        default: Date.now
    },
    transactionDate: Date,
    postNumber: String,
    orderNumber: String,
    patchNumber: String,
    promiseDate: Date,
    shipmentDate: Date,
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
    transactionsCategory: String,
    transactionClass: String,
    transactionNumber: String,
    parentTransaction: String,
    reaccuranceName: String,
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
        assetsNote: String,
        assetsSubTotal: String,
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
        itemsNotes: String,
        itemsSubTotal: String,
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
        servicesNotes: String,
        servicesSubTotal: String,
    }],
    jobs: [{
        jobID: String,
        jobName: String,
        jobsUnitOfMeasurment: String,
        jobsQuantity: Number,
        jobsPrice: Number,
        jobsNotes: String,
        jobsSubTotal: String,
    }],
    fees: [{
        feeID: String,
        feeName: String,
        feesUnitOfMeasurment: String,
        feesQuantity: Number,
        feesPrice: Number,
        feesSubTotal: String,
        feesNotes: String,

    }],
    fines: [{
        fineID: String,
        fineName: String,
        finesValue: Number,
        finesNotes: String,

    }],
    interestAndProfits: [{
        interestAndProfitsID: String,
        interestAndProfitsName: String,
        interestAndProfitsValue: Number,
        interestAndProfitsNotes: String,
    }],
    taxes: [{
        taxID: String,
        taxName: String,
        taxType: String,
        taxesRatioOrFixedValue: Number,
        taxesValue: Number,
        taxesNotes: String,
    }],
    customs: [{
        customID: String,
        customName: String,
        customType: String,
        customsRatioOrFixedValue: Number,
        customsValue: Number,
        customsNotes: String,
    }],
    currencies: [{
        currencySource: String,
        currencyDestination: String,
        currencyRate: String,
        currencyAmount: String,
        currenciesNotes: String,
    }],
    cash: [{
        cashValue: Number,
        cashCurrency: String,
        cashDetailed: String,
        cashPapers: String,
        cashFrom: String,
        cashTo: String,
        cashNotes: String,
    }],
    accounts: [{
            accountNumber: String,
            accountName: String,
            accountDebit: String,
            accountCredit: String,
            accountCurrency: String,
            accountNotes: String,
            costCenter: [{
                costCenterName: String,
                costCenterValue: String,
                parenta: String,
                projectID: String,
                notes: String,
            }, {
                costCenterName_1: String,
                costCenterValue_1: String,
                parent_1: String,
                projectID_1: String,
                notes_1: String,
            }, {
                costCenterName_2: String,
                costCenterValue_2: String,
                parent_2: String,
                projectID_2: String,
                notes_2: String,
            }]
        },
        {
            accountNumber1: String,
            accountName1: String,
            accountDebit1: String,
            accountCredit1: String,
            accountCurrency1: String,
            accountNotes1: String,
            costCenter1: [{
                costCenterName1_1: String,
                costCenterValue1_1: String,
                parent1_1: String,
                projectID1_1: String,
                notes1_1: String,
            }, {
                costCenterName1_2: String,
                costCenterValue1_2: String,
                parent1_2: String,
                projectID1_2: String,
                notes1_2: String,
            }, {
                costCenterName1_3: String,
                costCenterValue1_3: String,
                parent1_3: String,
                projectID1_3: String,
                notes1_3: String,
            }]
        }, {
            accountNumber2: String,
            accountName2: String,
            accountDebit2: String,
            accountCredit2: String,
            accountCurrency2: String,
            accountNotes2: String,
            costCenter2: [{
                costCenterName2_1: String,
                costCenterValue2_1: String,
                parent2_1: String,
                projectID2_1: String,
                notes2_1: String,
            }, {
                costCenterName2_2: String,
                costCenterValue2_2: String,
                parent2_2: String,
                projectID2_2: String,
                notes2_2: String,
            }, {
                costCenterName2_3: String,
                costCenterValue2_3: String,
                parent2_3: String,
                projectID2_3: String,
                notes2_3: String,
            }]
        }, {
            accountNumber3: String,
            accountName3: String,
            accountDebit3: String,
            accountCredit3: String,
            accountCurrency3: String,
            accountNotes3: String,
            costCenter3: [{
                costCenterName3_1: String,
                costCenterValue1_1: String,
                parent3_1: String,
                projectID3_1: String,
                notes3_1: String,
            }, {
                costCenterName3_2: String,
                costCenterValue1_2: String,
                parent3_2: String,
                projectID3_2: String,
                notes3_2: String
            }, {
                costCenterName3_3: String,
                costCenterValue3_3: String,
                parent3_3: String,
                projectID3_3: String,
                notes3_3: String,
            }]
        }
    ],
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
        checkNotes: String,

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
        hrSyndicate: String,
        hrNotes: String,
    }],
    transactionFooter: {
        subTotalEnd: String,
        miscellaneousEnd: String,
        freightEnd: String,
        taxEnd: String,
        totalEnd: String
    }
}, { strict: false })
const Transaction = mongoose.model('transactions', transactionSchema);
exports.Transaction = Transaction