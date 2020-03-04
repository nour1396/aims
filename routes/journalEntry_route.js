const journalEntry = require('../models/accounts/journal').journalEntry;
const accountsChart = require('../models/accounts/accountsChart').accountsChart;
const listjournalX = require('../models/accounts/listjournalX').listjournalX;
const Expenses = require('../models/accounts/expenses').Expenses;
const ExpensesList = require('../models/accounts/expenses').ExpensesList;
var configDB = require('../config/database');
var mongoose = require('mongoose');
module.exports = function(router) {

    //add new transaction  
    router.get('/accounts/journalEntry', (req, res, next) => {
        res.render('accounts/journalEntry')

    })


    router.post('/accounts/journalEntry', (req, res) => {
            var newjournalEntry = new journalEntry({
                accountCode: req.body.accountCode,
                documentNumber: req.body.documentNumber,
                debit: req.body.debit,
                credit: req.body.credit,
                dueDate: req.body.dueDate,


            });
            newjournalEntry.save(() => {
                journalEntry.aggregate([{
                        $group: {
                            _id: "$accountCode",
                            totalDebit: { $sum: "$debit" },
                            totalCredit: { $sum: "$credit" }
                        }
                    },
                    { $out: "listjournalX" }
                ]).then(() => {
                    res.redirect(302, '../index')
                })
            })
        })
        //get total of each account in journal entry
    router.get('/accounts/listJournal', (req, res, next) => {
            let data = {}
            journalEntry.aggregate([{
                $group: {
                    _id: "$accountCode",
                    totalDebit: { $sum: "$debit" },
                    totalCredit: { $sum: "$credit" }
                }
            }]).then((tt) => {
                data.tt = tt;
                /*accountsChart.findOneAndUpdate({ accountEnglish: journalEntry.accountCode }, { $inc: { debit: journalEntry.debit } }, {
                    $inc: { credit: journalEntry.credit }
                }).then((uu) => {*/
                res.render('accounts/listJournal', data)

            })
        })
        //..........................
    router.get('/accounts/income', (req, res, next) => {
            let data = {}
            listjournalX.aggregate([{
                $project: {
                    totalCr: { $sum: "$totalCredit" }
                }
            }]).then((incomes) => {
                data.incomes = incomes;
                res.render('accounts/income', data, console.log(data))
            })

        })
        //add new exense
    router.get('/accounts/expenses', (req, res, next) => {
        let data = {}
        ExpensesList.find({}).then((expenses) => {
            data.expenses = expenses;
            res.render('accounts/expenses', data)
        })
    });

    router.post('/accounts/expenses', (req, res) => {
        var newExpense = new Expenses({
            expenseName: req.body.expenseName,
            documentNumber: req.body.documentNumber,
            amount: req.body.amount
        });
        journalEntry.create([{
            accountCode: newExpense.expenseName,
            documentNumber: newExpense.documentNumber,
            debit: newExpense.amount,
            credit: 0
        }, {
            accountCode: "Cash",
            documentNumber: newExpense.documentNumber,
            debit: 0,
            credit: newExpense.amount
        }]).then(() => {
            res.redirect(302, '../index')
        })
    })

}