const Transaction = require('../models/accounts/invoices/transactions').Transaction; //transactions Schema
const addItem = require('../models/accounts/addItem').addItem; //items Schema
const configDB = require('../config/database'); //Connections to database
const mongoose = require('mongoose'); //mongoose module
const csv = require('csv-express'); // csv module
const mongoXlsx = require('mongo-xlsx'); //mongoXlsx module
module.exports = function(router) {
    //get page to enter data of invoice (transaction)
    router.get('/accounts/invoices/transactions', (req, res, next) => {
        //connect to databse which contain list of data
        mongoose.connect(configDB.urlP, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        }, (err) => { console.log('DBP connected ^_^ ') })
        let data = {}
            //get list of items
        addItem.find({}).then(items => {
            data.items = items;
            res.render('accounts/invoices/transactions', data)
                //disconnect first database which contain list of data
            mongoose.disconnect();
        })
    })

    //save transaction(invoice) in database
    router.post('/accounts/invoices/transactions', (req, res) => {
        //connect to database where we save entered data
        mongoose.connect(configDB.urlS, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        }, (err) => { console.log('DBS connected ^_^ ') })
        var newTransaction = new Transaction({
            dateCreated: req.body.dateCreated,
            transactionDate: req.body.transactionDate,
            postDate: req.body.postDate,
            postNumber: req.body.postNumber,
            patchNumber: req.body.patchNumber,
            docNumber: req.body.docNumber,
            invoiceNumber: req.body.invoiceNumber,
            from: {
                fromEntity: req.body.fromEntity,
                fromSubEntity: req.body.fromSubEntity,
            },
            to: {
                toEntity: req.body.toEntity,
                toSubEntity: req.body.toSubEntity,
            },
            transactionType: req.body.transactionType,
            transactionClass: req.body.transactionClass,
            transactionNumber: req.body.transactionNumber,
            parentTransaction: req.body.parentTransaction,
            reaccurance: req.body.reaccurance,
            reaacuraneType: req.body.reaacuraneType,
            taxState: req.body.taxState,
            currency: req.body.currency,
            assets: [{
                assetID: req.body.assetID,
                assetName: req.body.assetName,
                assetsSerialNumber: req.body.assetsSerialNumber,
                assetsQuantity: req.body.assetsQuantity,
                assetsUintOfMeasurment: req.body.assetsUintOfMeasurment,
                assetsPrice: req.body.assetsPrice,
                assetsFrom: req.body.assetsFrom,
                assetsTo: req.body.assetsTo,
            }],
            items: [{
                itemID: req.body.itemID,
                itemName: req.body.itemName,
                itemsSerialNumber: req.body.itemsSerialNumber,
                itemsQuantity: req.body.itemsQuantity,
                itemsUintOfMeasurment: req.body.itemsUintOfMeasurment,
                itemsPrice: req.body.itemsPrice,
                itemsPackageID: req.body.itemsPackageID,
                itemsPackageName: req.body.itemsPackageName,
                itemsFrom: req.body.itemsFrom,
                itemsTo: req.body.itemsTo,
            }],
            services: [{
                serviceID: req.body.serviceID,
                serviceName: req.body.serviceName,
                servicesUintOfMeasurment: req.body.servicesUintOfMeasurment,
                servicesQuantity: req.body.servicesQuantity,
                servicesPrice: req.body.servicesPrice,
                servicesStart: req.body.servicesStart,
                servicesEnd: req.body.servicesEnd,
                servicesPackage: req.body.servicesPackage,
                servicesFrom: req.body.servicesFrom,
                servicesTo: req.body.servicesTo
            }],
            jobs: [{
                jobID: req.body.jobID,
                jobName: req.body.jobName,
                jobsUintOfMeasurment: req.body.jobsUintOfMeasurment,
                jobsQuantity: req.body.jobsQuantity,
                jobsPrice: req.body.jobsPrice
            }],
            fees: [{
                feeID: req.body.feeID,
                feeName: req.body.feeName,
                feesUintOfMeasurment: req.body.feesUintOfMeasurment,
                feesQuantity: req.body.feesQuantity,
                feesPrice: req.body.feesPrice
            }],
            fines: [{
                fineID: req.body.fineID,
                fineName: req.body.fineName,
                finesValue: req.body.finesValue

            }],
            interestAndProfits: [{
                interestAndProfitsID: req.body.interestAndProfitsID,
                interestAndProfitsName: req.body.interestAndProfitsName,
                interestAndProfitsValue: req.body.interestAndProfitsValue
            }],
            taxes: [{
                taxID: req.body.taxID,
                taxName: req.body.taxName,
                taxType: req.body.taxType,
                taxesRatioOrFixedValue: req.body.taxesRatioOrFixedValue,
                taxesValue: req.body.taxesValue,
            }],
            customs: [{
                customID: req.body.customID,
                customName: req.body.customName,
                customType: req.body.customType,
                customsRatioOrFixedValue: req.body.customsRatioOrFixedValue,
                customsValue: req.body.customsValue,
            }],
            currency: [{
                currencySource: req.body.currencySource,
                currencyDestination: req.body.currencyDestination,
                currencyRate: req.body.currencyRate,
                currencyAmount: req.body.currencyAmount,
            }],
            cash: [{
                cashValue: req.body.cashValue,
                cashCurrency: req.body.cashCurrency,
                cashDetailed: req.body.cashDetailed,
                cashPapers: req.body.cashPapers,
                cashFrom: req.body.cashFrom,
                cashTo: req.body.cashTo,
            }],
            accounts: [{
                accountNumber: req.body.accountNumber,
                accountName: req.body.accountName,
                accountDebit: req.body.accountDebit,
                accountCredit: req.body.accountCredit,
                accountCurrency: req.body.accountCurrency,
                accountNotes: req.body.accountNotes
            }],
            checks: [{
                checkOwner: req.body.checkOwner,
                checkBankName: req.body.checkBankName,
                checkPayee: req.body.checkPayee,
                checkDate: req.body.checkDate,
                checkAmount: req.body.checkAmount,
                checkCurrency: req.body.checkCurrency,
                checkNumber: req.body.checkNumber,
                checkDueDate: req.body.checkDueDate,
                checkType: req.body.checkType,
                checkCopy: req.body.checkCopy
            }],
            hr: [{
                hrEmployeeCode: req.body.hrEmployeeCode,
                hrBaseSalary: req.body.hrBaseSalary,
                hrGroupedSpecialBonus: req.body.hrGroupedSpecialBonus,
                hrPreviousYearBonus: req.body.hrPreviousYearBonus,
                hrExceptionalExpensiveLivingBonus: req.body.hrExceptionalExpensiveLivingBonus,
                hrWorkNatureAllowance: req.body.hrWorkNatureAllowance,
                hrLaborHolidayBonus: req.body.hrLaborHolidayBonus,
                hrFoodAllowance: req.body.hrFoodAllowance,
                hrSocialBonus: req.body.hrSocialBonus,
                hrInsurance: req.body.hrInsurance,
                hrStamp: req.body.hrStamp,
                hrWorkGainTax: req.body.hrWorkGainTax,
                hrSyndicate: req.body.hrSyndicate,
            }]
        });
        newTransaction.save().then(() => {
            res.redirect(302, '../../index', console.log(newTransaction))
        })
    })

    //get page to enter data will be pushed in database
    router.get('/accounts/invoices/pushtransactions', (req, res) => {
        res.render('accounts/invoices/pushtransactions')
    });

    //push object in specific and specific array document
    router.post('/accounts/invoices/pushtransactions', (req, res) => {
        //connect to database where we saved entered data
        mongoose.connect(configDB.urlS, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        }, (err) => { console.log('DBS connected ^_^ ') })
        Transaction.updateMany({ docNumber: req.body.documentNumber }, {
            $push: {
                assets: {
                    assetID: req.body.assetID,
                    assetName: req.body.assetName,
                    assetsSerialNumber: req.body.assetsSerialNumber,
                    assetsQuantity: req.body.assetsQuantity,
                    assetsUintOfMeasurment: req.body.assetsUintOfMeasurment,
                    assetsPrice: req.body.assetsPrice,
                    assetsFrom: req.body.assetsFrom,
                    assetsTo: req.body.assetsTo,
                },
                items: {
                    itemID: req.body.itemID,
                    itemName: req.body.itemName,
                    itemsSerialNumber: req.body.itemsSerialNumber,
                    itemsQuantity: req.body.itemsQuantity,
                    itemsUintOfMeasurment: req.body.itemsUintOfMeasurment,
                    itemsPrice: req.body.itemsPrice,
                    itemsPackageID: req.body.itemsPackageID,
                    itemsPackageName: req.body.itemsPackageName,
                    itemsFrom: req.body.itemsFrom,
                    itemsTo: req.body.itemsTo,
                },
                services: {
                    serviceID: req.body.serviceID,
                    serviceName: req.body.serviceName,
                    servicesUintOfMeasurment: req.body.servicesUintOfMeasurment,
                    servicesQuantity: req.body.servicesQuantity,
                    servicesPrice: req.body.servicesPrice,
                    servicesStart: req.body.servicesStart,
                    servicesEnd: req.body.servicesEnd,
                    servicesPackage: req.body.servicesPackage,
                    servicesFrom: req.body.servicesFrom,
                    servicesTo: req.body.servicesTo
                },
                jobs: {
                    jobID: req.body.jobID,
                    jobName: req.body.jobName,
                    jobsUintOfMeasurment: req.body.jobsUintOfMeasurment,
                    jobsQuantity: req.body.jobsQuantity,
                    jobsPrice: req.body.jobsPrice
                },
                fees: {
                    feeID: req.body.feeID,
                    feeName: req.body.feeName,
                    feesUintOfMeasurment: req.body.feesUintOfMeasurment,
                    feesQuantity: req.body.feesQuantity,
                    feesPrice: req.body.feesPrice
                },
                fines: {
                    fineID: req.body.fineID,
                    fineName: req.body.fineName,
                    finesValue: req.body.finesValue

                },
                interestAndProfits: {
                    interestAndProfitsID: req.body.interestAndProfitsID,
                    interestAndProfitsName: req.body.interestAndProfitsName,
                    interestAndProfitsValue: req.body.interestAndProfitsValue
                },
                taxes: {
                    taxID: req.body.taxID,
                    taxName: req.body.taxName,
                    taxType: req.body.taxType,
                    taxesRatioOrFixedValue: req.body.taxesRatioOrFixedValue,
                    taxesValue: req.body.taxesValue,
                },
                customs: {
                    customID: req.body.customID,
                    customName: req.body.customName,
                    customType: req.body.customType,
                    customsRatioOrFixedValue: req.body.customsRatioOrFixedValue,
                    customsValue: req.body.customsValue,
                },
                currency: {
                    currencySource: req.body.currencySource,
                    currencyDestination: req.body.currencyDestination,
                    currencyRate: req.body.currencyRate,
                    currencyAmount: req.body.currencyAmount,
                },
                cash: {
                    cashValue: req.body.cashValue,
                    cashCurrency: req.body.cashCurrency,
                    cashDetailed: req.body.cashDetailed,
                    cashPapers: req.body.cashPapers,
                    cashFrom: req.body.cashFrom,
                    cashTo: req.body.cashTo,
                },
                accounts: {
                    accountNumber: req.body.accountNumber,
                    accountName: req.body.accountName,
                    accountDebit: req.body.accountDebit,
                    accountCredit: req.body.accountCredit,
                    accountCurrency: req.body.accountCurrency,
                    accountNotes: req.body.accountNotes
                },
                checks: {
                    checkOwner: req.body.checkOwner,
                    checkBankName: req.body.checkBankName,
                    checkPayee: req.body.checkPayee,
                    checkDate: req.body.checkDate,
                    checkAmount: req.body.checkAmount,
                    checkCurrency: req.body.checkCurrency,
                    checkNumber: req.body.checkNumber,
                    checkDueDate: req.body.checkDueDate,
                    checkType: req.body.checkType,
                    checkCopy: req.body.checkCopy
                },
                hr: {
                    hrEmployeeCode: req.body.hrEmployeeCode,
                    hrBaseSalary: req.body.hrBaseSalary,
                    hrGroupedSpecialBonus: req.body.hrGroupedSpecialBonus,
                    hrPreviousYearBonus: req.body.hrPreviousYearBonus,
                    hrExceptionalExpensiveLivingBonus: req.body.hrExceptionalExpensiveLivingBonus,
                    hrWorkNatureAllowance: req.body.hrWorkNatureAllowance,
                    hrLaborHolidayBonus: req.body.hrLaborHolidayBonus,
                    hrFoodAllowance: req.body.hrFoodAllowance,
                    hrSocialBonus: req.body.hrSocialBonus,
                    hrInsurance: req.body.hrInsurance,
                    hrStamp: req.body.hrStamp,
                    hrWorkGainTax: req.body.hrWorkGainTax,
                    hrSyndicate: req.body.hrSyndicate,
                }
            }
        }).then(() => {
            res.redirect('pushtransactions')
        })
    })

    //get all transactions
    router.get('/accounts/invoices/totalinvoices', (req, res, next) => {
        //connect to database where we save entered data
        mongoose.connect(configDB.urlS, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        }, (err) => { console.log('DBS connected ^_^ ') })
        var transactionsList = function(callback) {
            Transaction.find().
            exec(function(err, transactions) {
                // docs contains an array of MongooseJS Documents
                // so you can return that...
                // reverse does an in-place modification, so there's no reason
                // to assign to something else ...
                transactions.reverse();
                callback(err, transactions);
            });
        };
        transactionsList(function(err, transactions) {
            if (err) {
                /* panic! there was an error fetching the list of transactions */
                return;
            }
            // do something with the transactions here ...
            res.render('accounts/invoices/totalinvoices', { transactions: transactions }, console.log(transactions));
        });
    });


    //get customize page to search item by name
    router.get('/accounts/invoices/customize', (req, res) => {
        res.render('accounts/invoices/customizeCopy')
    })

    //search item by name
    router.get('/itemName', (req, res) => {
            //connect to database where we save entered data 
            mongoose.connect(configDB.urlS, {
                useUnifiedTopology: true,
                useNewUrlParser: true,
            }, (err) => { console.log('DBS connected ^_^ ') });
            let data = {}
            const itemName = req.query.itemName;
            Transaction.aggregate([{ $unwind: "$items" },
                { $match: { "items.itemName": itemName } }, {
                    $project: {
                        transactionDate: "$transactionDate",
                        dateCreated: "$dateCreated",
                        transactionType: "$transactionType",
                        itemName: "$items.itemName",
                        price: "$items.itemsPrice",
                        totalQuantity: { $sum: "$items.itemsQuantity" },
                        total: { $multiply: ["$items.itemsPrice", "$items.itemsQuantity"] }
                    }
                }, { $project: { _id: "$itemName", total: "$total", price: "$price", transactionDate: "$transactionDate", dateCreated: "$dateCreated", transactionType: "$transactionType", totalQuantity: { $sum: "$totalQuantity" } } }
            ]).then(transactions => {

                data.transactions = transactions;
                res.render('accounts/invoices/customize', data, console.log(data))
            })
        })
        //search by transactionType
    router.get('/transactionType', (req, res) => {
            //connect to database where we save entered data 
            mongoose.connect(configDB.urlS, {
                useUnifiedTopology: true,
                useNewUrlParser: true,
            }, (err) => { console.log('DBS connected ^_^ ') });
            let data = {}
            const transactionType = req.query.transactionType
            Transaction.aggregate([{ $unwind: "$items" },
                { $match: { transactionType: transactionType } },
                {
                    $project: {
                        transactionDate: "$transactionDate",
                        dateCreated: "$dateCreated",
                        transactionType: "$transactionType",
                        itemName: "$items.itemName",
                        price: "$items.itemsPrice",
                        totalQuantity: { $sum: "$items.itemsQuantity" },
                        total: { $multiply: ["$items.itemsPrice", "$items.itemsQuantity"] }
                    }
                }, { $project: { _id: "$itemName", total: "$total", price: "$price", transactionDate: "$transactionDate", dateCreated: "$dateCreated", transactionType: "$transactionType", totalQuantity: { $sum: "$totalQuantity" } } }
            ]).then(transactions => {
                data.transactions = transactions;
                res.render('accounts/invoices/customize', data, console.log(data))
            })
        })
        //search by transactionDate
    router.get('/transactionDate', (req, res) => {
            //connect to database where we save entered data 
            mongoose.connect(configDB.urlS, {
                useUnifiedTopology: true,
                useNewUrlParser: true,
            }, (err) => { console.log('DBS connected ^_^ ') });
            let data = {}
            const transactionDatefrom = req.query.transactionDatefrom
            const transactionDateto = req.query.transactionDateto
            Transaction.aggregate([{ $unwind: "$items" },
                {
                    $match: {
                        transactionDate: {
                            $gte: transactionDatefrom,
                            $lt: transactionDateto
                        }
                    }
                },
                {
                    $project: {
                        transactionDate: "$transactionDate",
                        dateCreated: "$dateCreated",
                        transactionType: "$transactionType",
                        itemName: "$items.itemName",
                        price: "$items.itemsPrice",
                        totalQuantity: { $sum: "$items.itemsQuantity" },
                        total: { $multiply: ["$items.itemsPrice", "$items.itemsQuantity"] }
                    }
                }, { $project: { _id: "$itemName", total: "$total", price: "$price", transactionDate: "$transactionDate", dateCreated: "$dateCreated", transactionType: "$transactionType", totalQuantity: { $sum: "$totalQuantity" } } }
            ]).then(transactions => {
                data.transactions = transactions;
                res.render('accounts/invoices/customize', data, console.log(data))
            })
        })
        //............
    router.get('/specific', (req, res) => {
        //connect to database where we save entered data 
        mongoose.connect(configDB.urlS, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        }, (err) => { console.log('DBS connected ^_^ ') });
        let data = {}
        const transactionDatefrom = req.query.transactionDatefrom
        const transactionDateto = req.query.transactionDateto
        const itemName = req.query.itemName;
        const transactionType = req.query.transactionType
        Transaction.aggregate([{ $unwind: "$items" },
            {
                $match: {
                    transactionDate: {
                        $gte: transactionDatefrom,
                        $lt: transactionDateto
                    },
                    "items.itemName": itemName,
                    transactionType: transactionType
                }
            },
            {
                $project: {
                    transactionDate: "$transactionDate",
                    dateCreated: "$dateCreated",
                    transactionType: "$transactionType",
                    itemName: "$items.itemName",
                    price: "$items.itemsPrice",
                    totalQuantity: { $sum: "$items.itemsQuantity" },
                    total: { $multiply: ["$items.itemsPrice", "$items.itemsQuantity"] }
                }
            }, { $project: { _id: "$itemName", total: "$total", price: "$price", transactionDate: "$transactionDate", dateCreated: "$dateCreated", transactionType: "$transactionType", totalQuantity: { $sum: "$totalQuantity" } } }
        ]).then(transactions => {
            data.transactions = transactions;
            res.render('accounts/invoices/customize', data, console.log(data))
        })
    })

    //search assets by name
    router.get('/assetName', (req, res) => {
        //connect to database where we save entered data
        mongoose.connect(configDB.urlS, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        }, (err) => { console.log('DBS connected ^_^ ') });
        let data = {}
        const assetName = req.query.assetName;
        Transaction.aggregate([{ $unwind: "$assets" },
            { $match: { transactionType: "sales", "assets.assetName": assetName } }, {
                $project: {
                    transactionType: "$transactionType",
                    assetName: "$assets.assetName",
                    totalQuantitySales: { $sum: "$assets.assetsQuantity" }
                }
            }, { $group: { _id: "$assetName", totalQuantitySales: { $sum: "$totalQuantitySales" } } }
        ]).exec(transactions => {
            data.transactions = transactions;
            Transaction.aggregate([{ $unwind: "$assets" },
                { $match: { transactionType: "purchase", "assets.assetName": assetName } }, {
                    $project: {
                        transactionType: "$transactionType",
                        assetName: "$assets.assetName",
                        totalQuantityPurchases: { $sum: "$assets.assetsQuantity" }
                    }
                }, {
                    $group: { _id: "$assetName", totalQuantityPurchases: { $sum: "$totalQuantityPurchases" } }
                }
            ]).then(transactions2 => {
                data.transactions2 = transactions2;
                res.render('accounts/invoices/customize', data, console.log(data))
            })
        })
    })

    //connvert to excel sheet
    router.get('/export', (req, res) => {
        /* var filename = "transactions.csv";
        var dataArray;
        Transaction.find().lean().exec({}, function(err, transactions) {
            if (err) res.send(err);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/csv');
            res.setHeader("Content-Disposition", 'attachment; filename=' + filename);
            res.csv(transactions, true);
        }) */
        /* var model = mongoXlsx.buildDynamicModel(Transaction);
        mongoXlsx.mongoData2Xlsx(Transaction, model, function(err, Transaction) {
            console.log('File saved at:', Transaction.fullPath);
        }); */
        var data = Transaction.find({})
        var model = mongoXlsx.buildDynamicModel(data);
        mongoXlsx.mongoData2Xlsx(data, model, function(err, data) {
            console.log('File saved at:', data.fullPath);
        });
        mongoXlsx.xlsx2MongoData("./file.xlsx", model, function(err, mongoData) {
            console.log('Mongo data:', mongoData);
        });
    })
}