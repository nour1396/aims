const mongoose = require('mongoose');

var orgSchema = mongoose.Schema({
    organizationInformation: {
        orgNameInArabic: String,
        orgNameInEnglish: String,
        establishmentDate: String,
        organizationType: String
    },
    addressDetails: {
        addressType: String,
        country: String,
        city: String,
        streetName: String,
        area: String,
        realStateType: String,
        realStateNumber: String,
        detailedAddress: String,
        coordinates: String
    },
    contactInformation: {
        countryCode: String,
        governorateCode: String,
        landLine: String,
        faxNumber: String,
        email: String,
        logoURL: String,
        website: String,
        mobileNumber: String,
        contactLanguage: String,
        postOfficeCode: String
    },
    bankAccount: {
        accountType: String,
        accountNumber: String,
        bankName: String,
        currency: {
            type: mongoose.Schema.Types.String,
            ref: 'currencies'
        },
        branch: String
    },
    activityOfBusiness: {
        category: String,
        subCategory: String
    },
    personClass: {
        vendor: {
            V_vendorId: String,
            V_vendorName: String,
            V_vendorCheckName: String,
            V_vendorShortName: String,
            V_vendorStatus: String,
            V_vendorBankAccount1: String,
            V_vendorBankAccount2: String,
            V_vendorBankAccount3: String,
            V_vendorBankAccount4: String,
            V_vendorClass: String,
            V_accounts: {
                V_accountPayable: String,
                V_tradeDiscount: String,
                V_miscellaneous: String,
                V_freight: String,
                V_tax: String,
                V_accruedPurchasing: String,
                V_purchasePricevariance: String
            },
            V_currencyID: {
                type: mongoose.Schema.Types.String,
                ref: 'currencies'
            },
            V_paymentTerms: String,
            V_shippingMethod: String,
            V_creditLimet: String,
            V_minimumPayment: String,
            V_minimumOrderAmount: String,
            V_maximumInvoiceAmont: String,
            V_taxschedule: String,
            V_checkbookID: String,

        },
        customer: {
            C_customerID: String,
            C_customerName: String,
            C_customerShortName: String,
            C_customerStatementName: String,
            C_customerStatus: String,
            C_parentCustomerID: String,
            C_customerClass: String,
            C_customerBankAccount1: String,
            C_customerBankAccount2: String,
            C_customerBankAccount3: String,
            C_customerBankAccount4: String,
            C_accounts: {
                C_accountsReceivable: String,
                C_tradeDiscount: String,
                C_miscellaneous: String,
                C_freight: String,
                C_tax: String,
                C_sales: String,
                C_costofSales: String,
                C_inventory: String,
                C_salesReturns: String
            },
            C_currencyID: {
                type: mongoose.Schema.Types.String,
                ref: 'currencies'
            },
            C_paymentTerms: String,
            C_shippingMethod: String,
            C_creditLimit: String,
            C_minimumPayment: String,
            C_minimumOrderAmount: String,
            C_maximumInvoiceAmount: String,
            C_taxschedule: String,
            C_salesperson: String,
            C_territoryArea: String,
            C_priceList: String
        }
    }
}, { strict: false })
var Organization = mongoose.model('organizations', orgSchema);
exports.Organization = Organization