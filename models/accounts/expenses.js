const mongoose = require('mongoose');

const expenseSchema = mongoose.Schema({
    expenseName: String,
    documentNumber: String,
    amount: Number

})
const Expenses = mongoose.model('expenses', expenseSchema);
exports.Expenses = Expenses

const expenseListSchema = mongoose.Schema({
    nameInEnglish: String,
    nameInArabic: String,
    nature: Number

})
const ExpensesList = mongoose.model('expenseslists', expenseListSchema);
exports.ExpensesList = ExpensesList