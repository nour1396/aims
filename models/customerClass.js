const mongoose = require('mongoose');

const customerClassSchema = mongoose.Schema({
    _id: String,
    nameEnglish: String,
    nameArabic: String,
    accounts: {
        accountsReceivable: String,
        tradeDiscount: String,
        miscellaneous: String,
        freight: String,
        tax: String,
        sales: String,
        costofSales: String,
        inventory: String,
        salesReturns: String
    },
    currencyID: {
        type: mongoose.Schema.Types.String,
        ref: 'currencies'
    },
    paymentTerms: String,
    shippingMethod: String,
    creditLimit: String,
    minimumPayment: String,
    minimumOrderAmount: String,
    maximumInvoiceAmount: String,
    taxschedule: String,
    salesperson: String,
    territoryArea: String,
    priceList: String
});

const CustomerClass = mongoose.model('customerClasses', customerClassSchema);
exports.CustomerClass = CustomerClass