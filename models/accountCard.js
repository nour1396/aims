const mongoose = require('mongoose');

const accCardSchema = mongoose.Schema({
    general: {
        accountName: String,
        accountType: String,
        accountCode: String,
        parentAccount: String,
        description: String,
        IncomeOrBalanceSheet: String,
        debitOrCredit: String,
        totaling: String,
        numberOfBlanksLine: String,
        newPage: String,
        searchName: String,
        balance: String,
        reconciliationAccount: String,
        automaticExtendedTexts: String,
        directPosting: String,
        blocked: String,
        lastDateModified: String,
        currencyType: String,
        active: String
    },
    posting: {
        generalPostingType: String,
        generalBusinessPostingGroup: String,
        generalProductPostingGroup: String,
        VATBusinessPostingGroup: String,
        VATProductPostingGroup: String,
        defaultIntercompanyPartnerGeneralLedgerAccNumber: String
    }
})
const addAcc = mongoose.model('accountCard', accCardSchema);
exports.addAcc = addAcc