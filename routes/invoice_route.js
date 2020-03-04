const Invoice = require('../models/accounts/createInvoice').Invoice;
const addItem = require('../models/accounts/addItem').addItem;
const journalEntry = require('../models/accounts/journal').journalEntry;
const accountsChart = require('../models/accounts/accountsChart').accountsChart;
const fullInvoice = require('../models/accounts/fullInvoice').fullInvoice;
var configDB = require('../config/database');
var mongoose = require('mongoose');
module.exports = function(router) {
    //get invoice page
    router.get('/accounts/createInvoice', (req, res, next) => {
        let data = {}
        addItem.find().then(items => {
            data.items = items
            res.render('accounts/createInvoice', data)
        })
    })

    //save invoice to database
    router.post('/accounts/createInvoice', (req, res) => {
        var newInvoice = new Invoice({
            vendor: {
                name: req.body.name,
                address: req.body.address
            },
            confirmationDate: req.body.confirmationDate,
            paymentTerms: req.body.paymentTerms,
            orderlines: {
                productName: req.body.productName,
                description: req.body.description,
                orderedQty: req.body.orderedQty,
                Delievered: req.body.Delievered,
                invoiced: req.body.invoiced,
                unitPrice: req.body.unitPrice,
                unitCost: req.body.unitCost,
                taxes: req.body.taxes
            }
        });
        newInvoice.save(() => {
            /*accountsChart.findOneAndUpdate({ accountEnglish: "AR" }, {
                $inc: { debit: newInvoice.orderlines.subTotal, NetBalance: newInvoice.orderlines.subTotal }
            }).then((rr) => {
                accountsChart.findOneAndUpdate({ accountEnglish: "sales revenue" }, {
                    $inc: { credit: newInvoice.orderlines.subTotal, NetBalance: newInvoice.orderlines.subTotal }
                }).then(() => {
                    res.redirect(302, '/index')
                })
            })*/
            journalEntry.create([{
                    accountCode: "AR",
                    documentNumber: newInvoice._id,
                    debit: newInvoice.orderlines.sellingPrice,
                    credit: 0
                }, {
                    accountCode: "COGS",
                    documentNumber: newInvoice._id,
                    debit: newInvoice.orderlines.costPrice,
                    credit: 0
                }, {
                    accountCode: "merchandise inventory",
                    documentNumber: newInvoice._id,
                    debit: 0,
                    credit: newInvoice.orderlines.costPrice
                },
                {
                    accountCode: "sales revenue",
                    documentNumber: newInvoice._id,
                    debit: 0,
                    credit: newInvoice.orderlines.sellingPrice
                }
            ]).then(() => {
                addItem.findOneAndUpdate({ itemInEnglish: newInvoice.orderlines.productName }, {
                    $inc: { quantity: -1 * newInvoice.orderlines.orderedQty }
                }).then(() => {
                    res.redirect(302, '../index')
                });
            })
        })
    })

    //full invoice
    router.get('/accounts/fullInvoice', (req, res, next) => {
        let data = {}
        addItem.find().then(items => {
            data.items = items
            res.render('accounts/fullInvoice', data)
        })
    });

    router.post('/accounts/fullInvoice', (req, res) => {
        var newFullInvoice = new fullInvoice({
            clientID: req.body.clientID,
            type: req.body.type,
            date: req.body.date,
            documentNumber: req.body.documentNumber,
            accounts: [{
                accountID: req.body.accountID,
                debit: req.body.debit,
                credit: req.body.credit,
            }],
            products: [{
                productID: [{ serialNumber: req.body.serialNumber }],
                description: req.body.description,
                quantity: req.body.quantity,
                price: req.body.price

            }]
        });
        newFullInvoice.save().then(() => {
            res.render(302, '../index', console.log(newFullInvoice))
        })
    });

    router.get('/accounts/newpushinvoice', (req, res, next) => {
        let data = {}
        addItem.find().then(items => {
            data.items = items
            res.render('accounts/newpushinvoice', data)
        })
    })
    router.post('/accounts/newpushinvoice', (req, res) => {
        var newFullInvoice = new fullInvoice({
            clientID: req.body.clientID,
            type: req.body.type,
            date: req.body.date,
            documentNumber: req.body.documentNumber,
            accounts: [{
                accountID: req.body.accountID,
                debit: req.body.debit,
                credit: req.body.credit,
            }],
            products: [{
                productID: req.body.productID,
                description: req.body.description,
                quantity: req.body.quantity,
                price: req.body.price

            }]
        })
        fullInvoice.updateMany({ documentNumber: req.body.documentNumber }, {
            $push: {
                products: {
                    productID: req.body.productID,
                    description: req.body.description,
                    quantity: req.body.quantity,
                    price: req.body.price,

                },
                accounts: {
                    accountID: req.body.accountID,
                    debit: req.body.debit,
                    credit: req.body.credit
                }
            }
        }).then((rr) => {
            res.render('index', console.log(rr))
        })
    })


}