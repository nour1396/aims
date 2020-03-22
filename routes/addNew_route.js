const addItem = require('../models/accounts/addItem').addItem; //items schema
const addItemCategory = require('../models/accounts/addItem').addItemCategory; //item category schema
const addAcc = require('../models/accounts/accountCard').addAcc; //account card schema
const Company = require('../models/accounts/companySchema').Company; //company schema
const Organization = require('../models/accounts/orgSchema').Organization; //org schema
const addAsset = require('../models/accounts/assets').addAsset; //assetr schema
const addService = require('../models/accounts/services').addService; //service schema
module.exports = function(router) {

    //post (add) new item to database
    router.post('/accounts/newItem', (req, res, next) => {
        var addNewItem = new addItem(req.body)
        addNewItem.save(() => {
            res.redirect(302, '../index')
        })
    })

    //post account form
    router.post('/accounts/addAcccard', (req, res) => {
        var addAccCard = new addAcc(req.body);
        addAccCard.save(() => {
            res.redirect(302, '../index')
        })
    })


    //post (add) form of new co. to database
    router.post('/accounts/addCompany', (req, res, next) => {
        var newCompany = new Company(req.body);
        newCompany.save(() => {
            res.redirect(302, '../index')
        })
    });


    //post (add) form of new organization to database
    router.post('/accounts/addOrganization', (req, res, next) => {
        var newOrganization = new Organization(req.body);
        newOrganization.save(() => {
            res.redirect(302, '../index')
        })
    });


    //add new asset data to database
    router.post('/accounts/addAsset', (req, res, next) => {
        var newAsset = new addAsset(req, body);
        newAsset.save(() => {
            res.redirect(302, '../index')
        })
    });

    //post data of add new service to database
    router.post('/accounts/addService', (req, res, next) => {
        var newService = new addService(req.body)
        newService.save(() => {
            res.redirect(302, '../index')
        })
    })

}