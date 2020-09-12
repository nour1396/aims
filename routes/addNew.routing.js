const router = require('express').Router(),
    addItem = require('../models/addItem').addItem,
    addAcc = require('../models/accountCard').addAcc,
    Asset = require('../models/assets').addAsset,
    addService = require('../models/services').addService,
    orgController = require('../controller/org.controller'),
    companyController = require('../controller/company.controller');


//post (add) form of new co. to database
router.post('/api/newCompany', companyController.newCompanyHandler);

//post (add) form of new organization to database
router.post('/api/newOrg', orgController.orgHandler);


//post (add) new item to database
router.post('/api/newItem', (req, res, next) => {
    let addNewItem = new addItem({
        itemInEnglish: req.body.itemInEnglish,
        itemInArabic: req.body.itemInArabic,
        categoryEnglish: req.body.categoryEnglish,
        categoryArabic: req.body.categoryArabic,
        pricePerOne: req.body.pricePerOne,
        quantity: req.body.quantity
    })
    addNewItem.save()
    res.json('saved')

});

//post account form
router.post('/api/addAcccard', (req, res) => {
    var addAccCard = new addAcc({
        general: {
            accountName: req.body.accountName,
            accountType: req.body.accountType,
            accountCode: req.body.accountCode,
            parentAccount: req.body.parentAccount,
            description: req.body.description,
            IncomeOrBalanceSheet: req.body.IncomeOrBalanceSheet,
            debitOrCredit: req.body.debitOrCredit,
            totaling: req.body.totaling,
            numberOfBlanksLine: req.body.numberOfBlanksLine,
            newPage: req.body.newPage,
            searchName: req.body.searchName,
            balance: req.body.balance,
            reconciliationAccount: req.body.reconciliationAccount,
            automaticExtendedTexts: req.body.automaticExtendedTexts,
            directPosting: req.body.directPosting,
            blocked: req.body.blocked,
            lastDateModified: req.body.lastDateModified,
            currencyType: req.body.currencyType,
            active: req.body.active
        },
        posting: {
            generalPostingType: req.body.generalPostingType,
            generalBusinessPostingGroup: req.body.generalBusinessPostingGroup,
            generalProductPostingGroup: req.body.generalProductPostingGroup,
            VATBusinessPostingGroup: req.body.VATBusinessPostingGroup,
            VATProductPostingGroup: req.body.VATProductPostingGroup,
            defaultIntercompanyPartnerGeneralLedgerAccNumber: req.body.defaultIntercompanyPartnerGeneralLedgerAccNumber
        }
    });
    addAccCard.save(() => {
        res.redirect(302, '../index')
    })
});

//add new asset data to database
router.post('/api/addAsset', async(req, res) => {
    var newAsset = new Asset({});
    await newAsset.save()
    res.json('saved')
});

//post data of add new service to database
router.post('/api/addService', async(req, res, next) => {
    var newService = new addService()
    await newService.save()
    res.json('saved')
});

module.exports = router;