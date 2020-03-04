const journalEntry = require('../models/accounts/journal').journalEntry;
const accountsChart = require('../models/accounts/accountsChart').accountsChart;
const addItem = require('../models/accounts/addItem').addItem;
const Purchase = require('../models/accounts/purchase').Purchase;
const Payment = require('../models/accounts/createPayment').Payment;
const Supplier = require('../models/accounts/supplier').Supplier;
var configDB = require('../config/database');
var mongoose = require('mongoose');
module.exports = function(router) {
    //new purchase
    router.get('/accounts/purchase', (req, res, next) => {
        let data = {}
        addItem.find({}).then((items) => {
            data.items = items;
            res.render('accounts/purchase', data)
        })
    })
    router.post('/accounts/purchase', (req, res) => {
        var newPurchase = new Purchase({
            supplier: {
                name: req.body.name,
                address: req.body.address,
                phoneNumber: req.body.phoneNumber
            },
            confirmationDate: req.body.confirmationDate,
            paymentTerms: req.body.paymentTerms,
            documentNumber: req.body.documentNumber,
            productName: req.body.productName,
            pricePerOne: req.body.pricePerOne,
            quantity: req.body.quantity
        })
        newPurchase.save(() => {
            journalEntry.create([{
                accountCode: "merchandise inventory",
                documentNumber: newPurchase._id,
                debit: newPurchase.pricePerOne * newPurchase.quantity,
                credit: 0
            }, {
                accountCode: "AP",
                documentNumber: newPurchase._id,
                debit: 0,
                credit: newPurchase.pricePerOne * newPurchase.quantity
            }]).then(() => {
                addItem.findOneAndUpdate({ itemInEnglish: newPurchase.productName }, {
                    $inc: { quantity: newPurchase.quantity }
                }).then(() => {
                    Supplier.create({
                        name: newPurchase.supplier.name,
                        address: newPurchase.supplier.address,
                        phoneNumber: newPurchase.supplier.phoneNumber,
                        documentNumber: newPurchase.documentNumber,
                        date: Date.now(),
                        debit: 0,
                        credit: newPurchase.pricePerOne * newPurchase.quantity,
                    }).then(() => {
                        res.redirect(302, '../index')
                    })
                })
            })
        })
    })

    //payment of purchases
    router.get('/accounts/payment', (req, res, next) => {
        let data = {}
        journalEntry.find({}).then((jE) => {
            data.jE = jE;
            res.render('accounts/payment', data)
        })
    })

    router.post('/accounts/payment', (req, res) => {
        var newPayment = new Payment({
            documentNumber: req.body.documentNumber,
            paymentMethod: req.body.paymentMethod,
            name: req.body.name,
            paid: req.body.paid
        });
        var newPurchase = new Purchase({
            supplier: {
                name: req.body.name,
                address: req.body.address,
                phoneNumber: req.body.phoneNumber
            },
            confirmationDate: req.body.confirmationDate,
            paymentTerms: req.body.paymentTerms,
            documentNumber: req.body.documentNumber,
            productName: req.body.productName,
            pricePerOne: req.body.pricePerOne,
            quantity: req.body.quantity
        })
        journalEntry.create([{
            accountCode: "AP",
            documentNumber: newPayment.documentNumber,
            debit: newPayment.paid,
            credit: 0
        }, {
            accountCode: "Cash",
            documentNumber: newPayment.documentNumber,
            debit: 0,
            credit: newPayment.paid
        }]).then(() => {
            Supplier.findOneAndUpdate({ documentNumber: newPurchase.documentNumber }, {
                $inc: { debit: newPayment.paid, credit: -1 * newPayment.paid }
            }).then(() => {
                res.redirect(302, '../index')
            })
        })
    })

}