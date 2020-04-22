const Transaction = require('../models/accounts/transactions').Transaction; //transactions Schema
const addItem = require('../models/accounts/addItem').addItem; //items Schema
const configDB = require('../config/database'); //Connections to database
const mongoose = require('mongoose'); //mongoose module
const csv = require('csv-express'); // csv module
const mongoXlsx = require('mongo-xlsx'); //mongoXlsx module
const Log = require('../models/log').Log;
const { authJwt } = require("../config");
var tableify = require('tableify');
module.exports = function(router) {
    //get page to enter data of invoice (transaction)
    router.get('/accounts/invoices/transactions', (req, res, next) => {
        let data = {}
            //get list of items
        addItem.find({}).then(items => {
                data.items = items;
                res.json(data)
            })
            //record when user do something
        Log.create({
            statement: 'User: ' + req.user.userName + ' entered transactionPage to add new transaction',
            user: req.user.userName
        });

    })

    //save transaction(invoice) in database
    router.post('/accounts/invoices/transactions', (req, res, next) => {
        var newTransaction = new Transaction(req.body);
        newTransaction.save().then(() => {
                console.log(tableify(newTransaction))
                res.json(newTransaction)
            })
            //record when user do something
            /*         Log.create({
                        statement: 'User: ' + req.user.userName + ' saved new transaction with number' + req.body.docNumber + 'and type:' + req.body.transactionType,
                        user: req.user.userName
                    }); */
    })

    //get page to enter data will be pushed in database
    router.get('/accounts/invoices/pushtransactions', (req, res) => {
        //record when user do something
        Log.create({
            statement: 'User: ' + req.user.userName + ' entered transactionPage to push new items to exsiting transaction',
            user: req.user.userName
        });
        res.render('accounts/invoices/pushtransactions')
    });

    //push object in specific and specific array document
    router.post('/accounts/invoices/pushtransactions', (req, res) => {
        Transaction.aggregate({ $match: { docNumber: req.body.docNumber } }, { $push: req.body }).then(() => {
                res.json(Transaction)
            })
            //record when user do something
        Log.create({
            statement: 'User: ' + req.user.userName + ' pushed new items to exsiting transaction with document number:' + req.query.docNumber,
            user: req.user.userName
        });
    })

    //get customize page to search item by name
    router.get('/accounts/invoices/search', [authJwt.verifyToken, authJwt.isAdmin], (req, res) => {
        let data = {}
            //get list of items
        addItem.find({}).then(items => {
                data.items = items;
                res.render('accounts/invoices/search', data)
            })
            //record when user do something
        Log.create({
            statement: 'User: ' + req.user.userName + ' entered to search in items',
            user: req.user.userName
        });
    })

    //search assets by name
    router.get('/assetName', [authJwt.verifyToken, authJwt.isAdmin], (req, res) => {
        let data = {}
        const assetName = req.body;
        Transaction.aggregate([{ $unwind: "$assets" },
                { $match: assetName }, {
                    $project: {
                        transactionType: "$transactionType",
                        assetName: "$assets.assetName",
                        totalQuantitySales: { $sum: "$assets.assetsQuantity" }
                    }
                }, { $group: { _id: "$assetName", totalQuantitySales: { $sum: "$totalQuantitySales" } } }
            ]).exec(transactions => {
                data.transactions = transactions;
                Transaction.aggregate([{ $unwind: "$assets" },
                    { $match: assetName }, {
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
                    res.json(data)
                })
            })
            //record when user do something
            /*  Log.create({
                 statement: 'User: ' + req.user.userName + ' entered to search in assets name:' + assetName,
                 user: req.user.userName
             }); */
    })

    /*search item by name (single name , multi names ,
     if not choosen get all ,if single name was chosen not exist return no record)*/
    router.get('/itemName', /* [authJwt.verifyToken, authJwt.isAdmin],  */ (req, res) => {
        let data = {}
        var itemName = req.body;
        console.log(itemName)
        if (itemName == 0) {
            var itemName = req.body;
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
                    res.json(data)
                })
                //record when user do something
                /*    Log.create({
                       statement: 'User: ' + req.user.userName + ' entered to get all items',
                       user: req.user.userName
                   }); */
        } else if (itemName.constructor === Object) {
            var itemName = req.body;
            Transaction.aggregate([{ $unwind: "$items" },
                    {
                        $match: itemName
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
                    }, { $project: { _id: "$itemName", total: "$total", price: "$price", transactionDate: "$transactionDate", transactionType: "$transactionType", totalQuantity: { $sum: "$totalQuantity" } } }
                ]).then(transactions => {
                    data.transactions = transactions;
                    if (transactions == 0) {
                        res.end('no record found')
                    } else {
                        res.json(tableify(data))
                    }
                })
                //record when user do something
                /* Log.create({
                    statement: 'User: ' + req.user.userName + ' entered to search in item name:' + itemName,
                    user: req.user.userName
                }); */
        } else {
            var itemName = req.body;
            /* var x = []
            itemName.forEach(function(value) {
                x.push({ "items.itemName": value })
                console.log(x);
            }); */
            Transaction.aggregate([{ $unwind: "$items" },
                    {
                        $match: {
                            $or: itemName
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
                    res.json(data)
                })
                //record when user do something
                /* Log.create({
                    statement: 'User: ' + req.user.userName + ' entered to search in items :' + itemName,
                    user: req.user.userName
                }); */
        }
    })

    //search by transactionType
    router.get('/transactionType', [authJwt.verifyToken, authJwt.isAdmin], (req, res) => {
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
    })

    //search by transactionDate
    router.get('/transactionDate', [authJwt.verifyToken, authJwt.isAdmin], (req, res) => {
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
    })

    //search by transactionDate, itemName, transactionType,entities
    router.get('/specific', [authJwt.verifyToken, authJwt.isAdmin], (req, res) => {
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
        })
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
    })
}