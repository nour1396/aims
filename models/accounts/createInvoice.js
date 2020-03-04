const mongoose = require('mongoose');

var invoiceSchema = mongoose.Schema({
    vendor: {
        name: String,
        address: String
    },
    confirmationDate: String,
    paymentTerms: String,
    orderlines: {
        productName: String,
        description: String,
        orderedQty: Number,
        Delievered: Number,
        invoiced: Number,
        unitPrice: Number,
        unitCost: Number,
        taxes: Number,
        sellingPrice: {
            type: Number,
            default: function() {
                return (this.orderlines.orderedQty * this.orderlines.unitPrice) + this.orderlines.taxes * (this.orderlines.orderedQty * this.orderlines.unitPrice)
            }
        },
        costPrice: {
            type: Number,
            default: function() {
                return (this.orderlines.orderedQty * this.orderlines.unitCost) + this.orderlines.taxes * (this.orderlines.orderedQty * this.orderlines.unitCost)
            }

        }
    }
})
var Invoice = mongoose.model('invoices', invoiceSchema);
exports.Invoice = Invoice