const Transaction = require('../models/transactions').Transaction; //transactions Schema
const addItem = require('../models/addItem').addItem; //items Schema
const Log = require('../models/log').Log;
const fs = require('fs');
const transactionController = require('../controller/transaction.controller');

module.exports = function(router) {
    //get page to enter data of invoice (transaction)
    router.get('/accounts/invoices/transactions', (req, res, next) => {
        let data = {}
            //get list of items
        addItem.find({}).then(items => {
                data.items = items;
                res.render('accounts/invoices/transactions', data)
            })
            //record when user do something
            /* Log.create({
                statement: 'User: ' + req.user.userName + ' entered transactionPage to add new transaction',
                user: req.user.userName
            }); */

    });

    //save transaction(invoice) in database
    router.post('/transactions', transactionController.transactionPostHandler);

    //save newAccInAccChart in database
    router.post('/newAccInAccChart', transactionController.newAccInAccountsChartHandler);

    //save transaction(invoice) in database
    router.post('/newCostCenter', transactionController.newCostCenterHandler);

    //new vendor class 
    router.post('/vendorClass', transactionController.vendorClassHandler);
    //query vendor class
    router.get('/vendorClassQuery', transactionController.vendorClassQuery);

    //=======new cehckbook=======
    router.post('/checkbook', transactionController.cehckbookHandler)




    //get page to enter data will be pushed in database
    router.get('/accounts/invoices/pushtransactions', (req, res) => {
        //record when user do something
        /* Log.create({
            statement: 'User: ' + req.user.userName + ' entered transactionPage to push new items to exsiting transaction',
            user: req.user.userName
        }); */
        res.render('accounts/invoices/pushtransactions')
    });

    //push object in specific and specific array document
    router.post('/accounts/invoices/pushtransactions', (req, res) => {
        Transaction.updateMany({ docNumber: req.body.documentNumber }, {
                $push: {
                    assets: {
                        assetID: req.body.assetID,
                        assetName: req.body.assetName,
                        assetsSerialNumber: req.body.assetsSerialNumber,
                        assetsQuantity: req.body.assetsQuantity,
                        assetsUnitOfMeasurment: req.body.assetsUnitOfMeasurment,
                        assetsPrice: req.body.assetsPrice,
                        assetsFrom: req.body.assetsFrom,
                        assetsTo: req.body.assetsTo,
                    },
                    items: {
                        itemID: req.body.itemID,
                        itemName: req.body.itemName,
                        itemsSerialNumber: req.body.itemsSerialNumber,
                        itemsQuantity: req.body.itemsQuantity,
                        itemsUnitOfMeasurment: req.body.itemsUnitOfMeasurment,
                        itemsPrice: req.body.itemsPrice,
                        itemsPackageID: req.body.itemsPackageID,
                        itemsPackageName: req.body.itemsPackageName,
                        itemsFrom: req.body.itemsFrom,
                        itemsTo: req.body.itemsTo,
                    },
                    services: {
                        serviceID: req.body.serviceID,
                        serviceName: req.body.serviceName,
                        servicesUnitOfMeasurment: req.body.servicesUnitOfMeasurment,
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
                        jobsUnitOfMeasurment: req.body.jobsUnitOfMeasurment,
                        jobsQuantity: req.body.jobsQuantity,
                        jobsPrice: req.body.jobsPrice
                    },
                    fees: {
                        feeID: req.body.feeID,
                        feeName: req.body.feeName,
                        feesUnitOfMeasurment: req.body.feesUnitOfMeasurment,
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
                    currencies: {
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
            //record when user do something
            /* Log.create({
                statement: 'User: ' + req.user.userName + ' pushed new items to exsiting transaction with document number:' + req.query.docNumber,
                user: req.user.userName
            }); */
    });

    //get customize page to search item by name
    router.get('/accounts/invoices/search', (req, res) => {
        let data = {}
            //get list of items
        addItem.find({}).then(items => {
            data.items = items;
            newAccInAccChart.find({}).then(newAccInAccCharts => {
                data.newAccInAccCharts = newAccInAccCharts;
                CostCenter.find({}).then(CostCenters => {
                    data.CostCenters = CostCenters;
                    res.render('accounts/invoices/search', data)
                });
            });
        });
        //record when user do something
        /* Log.create({
            statement: 'User: ' + req.user.userName + ' entered to search in items',
            user: req.user.userName
        }); */
    });

    //search assets by name
    router.get('/assetName', (req, res) => {
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
                    res.render('accounts/invoices/customize', data)
                })
            })
            //record when user do something
        Log.create({
            statement: 'User: ' + req.user.userName + ' entered to search in assets name:' + assetName,
            user: req.user.userName
        });
    });
    /*search item by name (single name , multi names ,
     if not choosen get all ,if single name was chosen not exist return no record)*/
    router.get('/costCenterName', (req, res) => {
        let data = {}
        let costCenter = req.query.costCenter;
        if (costCenter == undefined) {
            Transaction.aggregate([{ $unwind: "$accounts" },
                {
                    $project: {
                        transactionDate: "$transactionDate",
                        dateCreated: "$dateCreated",
                        transactionType: "$transactionType",
                        parent: "$accounts.costCenter.parent",
                        costCenterName: `$accounts.costCenter.costCenterName`,
                        total: { $sum: "$accounts.costCenter.costCenterValue" },
                    }
                }, { $project: { _id: "$costCenterName", total: "$total", parent: "$parent", transactionDate: "$transactionDate", dateCreated: "$dateCreated", transactionType: "$transactionType" } }
            ]).then(costCenters => {
                data.costCenters = costCenters;

                res.render('accounts/invoices/costCenter', data)
            })
        } else
        if (costCenter.constructor === String) {
            Transaction.aggregate([{ $unwind: "$accounts" },
                {
                    $match: {
                        "accounts.costCenter.costCenterName": costCenter
                    }
                }, {
                    $project: {
                        transactionDate: "$transactionDate",
                        dateCreated: "$dateCreated",
                        transactionType: "$transactionType",
                        costCenterName: "$accounts.costCenter.costCenterName",
                        parent: "$accounts.costCenter.parent",
                        total: { $sum: "$accounts.costCenter.costCenterValue" },
                    }
                }, { $project: { _id: "$costCenterName", total: "$total", parent: "$parent", transactionDate: "$transactionDate", dateCreated: "$dateCreated", transactionType: "$transactionType" } }
            ]).then(costCenters => {
                data.costCenters = costCenters;
                res.render('accounts/invoices/costCenter', data)
            })
        } else {
            var x = []
            costCenter.forEach((CCname) => {
                x.push({ "accounts.costCenter.costCenterName": CCname })
            });
            Transaction.aggregate([{ $unwind: "$accounts" },
                {
                    $match: {
                        $or: x
                    }
                }, {
                    $project: {
                        transactionDate: "$transactionDate",
                        dateCreated: "$dateCreated",
                        transactionType: "$transactionType",
                        costCenterName: "$accounts.costCenter.costCenterName",
                        parent: "$accounts.costCenter.parent",
                        total: { $sum: "$accounts.costCenter.costCenterValue" },
                    }
                }, { $project: { _id: "$costCenterName", parent: "$parent", total: "$total", transactionDate: "$transactionDate", dateCreated: "$dateCreated", transactionType: "$transactionType" } }
            ]).then(costCenters => {
                data.costCenters = costCenters;
                Transaction.aggregate([{ $unwind: "$accounts" },
                    {
                        $match: {
                            $or: x
                        }
                    },
                    {
                        $project: {
                            _id: "$accounts.costCenter.costCenterName",
                            total: { $sum: "$accounts.costCenter.costCenterValue" }
                        }
                    }, {
                        $group: {

                            _id: "$_id",
                            total: { $sum: "$total" },
                        }
                    }
                ]).then(costCentersx => {
                    console.log(costCentersx);
                    data.costCentersx = costCentersx;
                    res.render('accounts/invoices/costCenter', data)
                });
            })
        }
    });
    /*search item by name (single name , multi names ,
     if not choosen get all ,if single name was chosen not exist return no record)*/
    router.get('/itemName', (req, res) => {
        let data = {}
        var itemName = req.query.itemName;
        if (itemName == undefined) {
            var itemName = req.query.itemName;
            Transaction.aggregate([{ $unwind: "$items" },
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
                    res.render('accounts/invoices/customize', data)
                })
                //record when user do something
            Log.create({
                statement: 'User: ' + req.user.userName + ' entered to get all items',
                user: req.user.userName
            });
        } else if (itemName.constructor === String) {
            var itemName = req.query.itemName;
            Transaction.aggregate([{ $unwind: "$items" },
                    {
                        $match: {
                            "items.itemName": itemName
                        }
                    }, {
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
                    if (transactions == 0) {
                        res.end('no record found')
                    } else {
                        /* Using fs package we can create excel/CSV file from JSON data.

                            Step 1: Store JSON data in a variable (here it is in transactions variable).

                            Step 2: Create empty string variable(here it is data).

                            Step 3: Append every property of transactions to string variable data, while appending put '\t' in-between 2 cells and '\n' after completing the row. */
                        var dataA = '';
                        for (var i = 0; i < transactions.length; i++) {
                            dataA = dataA + transactions[i]._id + '\t' + transactions[i].total + '\t' + transactions[i].price + '\t' + transactions[i].transactionDate + '\t' + transactions[i].totalQuantity + '\t' + '\n';
                        }
                        fs.appendFile('Filename.pdf', dataA, (err) => {
                            if (err) throw err;
                            res.render('accounts/invoices/customize', data)
                        });
                    }
                })
                //record when user do something
            Log.create({
                statement: 'User: ' + req.user.userName + ' entered to search in item name:' + itemName,
                user: req.user.userName
            });
        } else {
            var itemName = req.query.itemName;
            var x = []
            itemName.forEach((value) => {
                x.push({ "items.itemName": value })
            });
            Transaction.aggregate([{ $unwind: "$items" },
                {
                    $match: {
                        $or: x
                    }
                }, {
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

                var dataA = '';
                for (var i = 0; i < transactions.length; i++) {
                    dataA = dataA + transactions[i]._id + '\t' + transactions[i].total + '\t' + transactions[i].price + '\t' + transactions[i].transactionDate + '\t' + transactions[i].totalQuantity + '\t' + '\n';
                }
                fs.appendFile('Filename.xls', dataA, (err) => {
                    if (err) throw err;
                    res.render('accounts/invoices/customize', data)
                });
            })

            //record when user do something
            Log.create({
                statement: 'User: ' + req.user.userName + ' entered to search in items :' + itemName,
                user: req.user.userName
            });
        }
    });

    //search by transactionType
    router.get('/transactionType', (req, res) => {
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
                res.render('accounts/invoices/customize1', data)
            })
            //record when user do something
        Log.create({
            statement: 'User: ' + req.user.userName + ' entered to search in items by transactionType :' + transactionType,
            user: req.user.userName
        });
    });

    //search by transactionDate
    router.get('/transactionDate', (req, res) => {
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
                res.render('accounts/invoices/customize2', data, console.log(data))
            })
            //record when user do something
        Log.create({
            statement: 'User: ' + req.user.userName + ' entered to search in items by transactionDate from :' + transactionDatefrom + 'to: ' + transactionDateto,
            user: req.user.userName
        });
    });

    //search by transactionDate, itemName, transactionType,entities
    router.get('/specific', (req, res) => {
        let data = {}
        const transactionDatefrom = req.query.transactionDatefrom
        const transactionDateto = req.query.transactionDateto
        const itemName = req.query.itemName;
        const transactionType = req.query.transactionType
        const fromEntity = req.query.fromEntity
        const fromSubEntity = req.query.fromSubEntity
        const toEntity = req.query.toEntity
        const toSubEntity = req.query.toSubEntity
        Transaction.aggregate([{ $unwind: "$items" },
                {
                    $match: {
                        transactionDate: {
                            $gte: transactionDatefrom,
                            $lt: transactionDateto
                        },
                        "items.itemName": itemName,
                        transactionType: transactionType,
                        "from.fromEntity": fromEntity,
                        "from.fromSubEntity": fromSubEntity,
                        "to.toEntity": toEntity,
                        "to.toSubEntity": toSubEntity
                    }
                },
                {
                    $project: {
                        fromEntity: "$from.fromEntity",
                        fromSubEntity: "$from.fromSubEntity",
                        toEntity: "$to.toEntity",
                        toSubEntity: "$to.toSubEntity",
                        transactionDate: "$transactionDate",
                        dateCreated: "$dateCreated",
                        transactionType: "$transactionType",
                        itemName: "$items.itemName",
                        price: "$items.itemsPrice",
                        totalQuantity: { $sum: "$items.itemsQuantity" },
                        total: { $multiply: ["$items.itemsPrice", "$items.itemsQuantity"] }
                    }
                }, {
                    $project: {
                        _id: "$itemName",
                        fromEntity: "$fromEntity",
                        fromSubEntity: "$fromSubEntity",
                        toEntity: "$toEntity",
                        toSubEntity: "$toSubEntity",
                        total: "$total",
                        price: "$price",
                        transactionDate: "$transactionDate",
                        dateCreated: "$dateCreated",
                        transactionType: "$transactionType",
                        totalQuantity: { $sum: "$totalQuantity" }
                    }
                }
            ]).then(transactions => {
                data.transactions = transactions;
                res.render('accounts/invoices/customize3', data, console.log(data))
            })
            //record when user do something
        Log.create({
            statement: 'User: ' + req.user.userName + ' entered to search in items by transactionDate from :' + transactionDatefrom + 'to: ' + transactionDateto + 'and itemName:' + itemName + 'and transactionType:' + transactionType + 'and fromEntity:' + fromEntity + 'and fromSubEntity:' + fromSubEntity + 'and toEntity:' + toEntity + 'and toSubEntity:' + toSubEntity,
            user: req.user.userName
        });
    });
    //search items by name of entity and subEntity
    router.get('/entities', (req, res) => {
        let data = {}
        const fromEntity = req.query.fromEntity
        const fromSubEntity = req.query.fromSubEntity
        const toEntity = req.query.toEntity
        const toSubEntity = req.query.toSubEntity
        Transaction.aggregate([{ $unwind: "$items" },
                {
                    $match: {
                        "from.fromEntity": fromEntity,
                        "from.fromSubEntity": fromSubEntity,
                        "to.toEntity": toEntity,
                        "to.toSubEntity": toSubEntity
                    }
                },
                {
                    $project: {
                        fromEntity: "$from.fromEntity",
                        fromSubEntity: "$from.fromSubEntity",
                        toEntity: "$to.toEntity",
                        toSubEntity: "$to.toSubEntity",
                        transactionDate: "$transactionDate",
                        dateCreated: "$dateCreated",
                        transactionType: "$transactionType",
                        itemName: "$items.itemName",
                        price: "$items.itemsPrice",
                        totalQuantity: { $sum: "$items.itemsQuantity" },
                        total: { $multiply: ["$items.itemsPrice", "$items.itemsQuantity"] }
                    }
                }, {
                    $project: {
                        _id: "$itemName",
                        fromEntity: "$fromEntity",
                        fromSubEntity: "$fromSubEntity",
                        toEntity: "$toEntity",
                        toSubEntity: "$toSubEntity",
                        total: "$total",
                        price: "$price",
                        transactionDate: "$transactionDate",
                        dateCreated: "$dateCreated",
                        transactionType: "$transactionType",
                        totalQuantity: { $sum: "$totalQuantity" }
                    }
                }
            ]).then(transactions => {
                data.transactions = transactions;
                if (transactions == 0) {
                    res.end('no record found')
                } else {
                    res.render('accounts/invoices/customize4', data, console.log(data))
                }
            })
            //record when user do something
        Log.create({
            statement: 'User: ' + req.user.userName + ' entered to search in entites fromEntity:' + fromEntity + 'and fromSubEntity:' + fromSubEntity + 'and toEntity:' + toEntity + 'and toSubEntity:' + toSubEntity,
            user: req.user.userName
        });
    });

}