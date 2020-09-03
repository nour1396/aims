const mongoose = require('mongoose');

const vendorClassSchema = mongoose.Schema({
    _id: String,
    nameEnglish: String,
    nameArabic: String,
    accounts: {
        accountPayable: String,
        tradeDiscount: String,
        miscellaneous: String,
        frieght: String,
        tax: String,
        accruedPurchasing: String,
        purchasePriceVariance: String
    },
    currencyID: { type: String, ref: 'currencies' },
    paymentTerms: String,
    shippingMethod: String,
    creditLimit: String,
    minimumPayment: String,
    minimumOrderAmount: String,
    maximumInvoiceAmount: String,
    taxSchedule: String,
    checkbookId: String
});

const vendorClass = mongoose.model('vendorclasses', vendorClassSchema);
exports.vendorClass = vendorClass