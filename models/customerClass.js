const mongoose = require('mongoose');

const customerClassSchema = mongoose.Schema({
    _id: String,
    nameEnglish: String,
    nameArabic: String,
    accounts: {
        AccountsReceivable: String,
        TradeDiscount: String,
        Miscellaneous: String,
        Freight: String,
        Tax: String,
        Sales: String,
        CostofSales: String,
        Inventory: String,
        SalesReturns: String
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