const addItem = require('../models/addItem').addItem; //items schema
const addItemCategory = require('../models/addItem').addItemCategory; //item category schema
const addAcc = require('../models/accountCard').addAcc; //account card schema
const Organization = require('../models/orgSchema').Organization; //org schema
const addAsset = require('../models/assets').addAsset; //assetr schema
const addService = require('../models/services').addService; //service schema
const companyController = require('../controller/company.controller');
module.exports = function(router) {
    //get form to add new item 
    router.get('/accounts/newItem', function(req, res, next) {
            let data = {}
                //get list of item's categories
            addItemCategory.find({}).then(categories => {
                data.categories = categories
                res.render('accounts/newItem', data, console.log(data))
            })
        })
        //post (add) new item to database
    router.post('/accounts/newItem', (req, res, next) => {
            var addNewItem = new addItem({
                itemInEnglish: req.body.itemInEnglish,
                itemInArabic: req.body.itemInArabic,
                categoryEnglish: req.body.categoryEnglish,
                categoryArabic: req.body.categoryArabic,
                pricePerOne: req.body.pricePerOne,
                quantity: req.body.quantity
            })
            addNewItem.save(() => {
                res.redirect(302, '../index')
            })
        })
        //get form to add account
    router.get('/accounts/addAccCard', function(req, res, next) {
            res.render('accounts/addAccCard')
        })
        //post account form
    router.post('/accounts/addAcccard', (req, res) => {
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
        })
        //get form to add new company
    router.get('/newCompany', (req, res, next) => {
        res.render('accounts/addCompany')
    })

    //post (add) form of new co. to database
    router.post('/newCompany', companyController.newCompanyHandler);


    //get form to add new organization
    router.get('/accounts/addOrganization', (req, res, next) => {
        res.render('accounts/addOrganization')
    })

    //post (add) form of new organization to database
    router.post('/accounts/addOrganization', (req, res, next) => {
        var newOrganization = new Organization({
            organizationInformation: {
                orgNameInArabic: req.body.orgNameInArabic,
                orgNameInEnglish: req.body.orgNameInEnglish,
                establishmentDate: req.body.establishmentDate,
                organizationType: req.body.organizationType
            },

            addressDetails: {
                addressType: req.body.addressType,
                country: req.body.country,
                city: req.body.city,
                streetName: req.body.streetName,
                area: req.body.area,
                realStateType: req.body.realStateType,
                realStateNumber: req.body.realStateNumber,
                detailedAddress: req.body.detailedAddress,
                coordinates: req.body.coordinates
            },

            contactInformation: {
                countryCode: req.body.countryCode,
                governorateCode: req.body.governorateCode,
                landLine: req.body.landLine,
                faxNumber: req.body.faxNumber,
                email: req.body.email,
                logoURL: req.body.logoURL,
                website: req.body.website,
                mobileNumber: req.body.mobileNumber,
                contactLanguage: req.body.contactLanguage,
                postOfficeCode: req.body.postOfficeCode,
                bankAccount: req.body.bankAccount,
                accountType: req.body.accountType,
                accountNumber: req.body.accountNumber,
                bankName: req.body.bankName,
                currency: req.body.currency,
                branch: req.body.branch
            },
            activityOfBusiness: {
                category: req.body.category,
                subCategory: req.body.subCategory
            }
        });
        newOrganization.save(() => {
            res.redirect(302, '../index')
        })
    });

    //get page to add new asset
    router.get('/accounts/addAsset', (req, res, next) => {
        res.render('accounts/addAsset')
    });
    //add new asset data to database
    router.post('/accounts/addAsset', (req, res, next) => {
        var newAsset = new addAsset({
            information: {
                assetNumber: req.body.assetNumber,
                assetCode: req.body.assetCode,
                description: req.body.description,
                serialNumber: req.body.serialNumber,
                acquisitionDate: req.body.acquisitionDate,
                placedInServiceDate: req.body.placedInServiceDate,
                purchaseValue: req.body.purchaseValue,
                location: req.body.location,
                department: req.body.department,
                purchaseOrderNumber: req.body.purchaseOrderNumber,
                quantity: req.body.quantity,
                manufacturer: req.body.manufacturer,
                warrantyNumber: req.body.warrantyNumber,
                model: req.body.model,
                ownership: req.body.ownership,
                bought: req.body.bought,
                propertyType: req.body.propertyType,
                leaseNumber: req.body.leaseNumber,
                lessor: req.body.lessor
            },
            depreciation: {
                currentCost: req.body.currentCost,
                originalCost: req.body.originalCost,
                salvageValue: req.body.salvageValue,
                salvageValuePercen: req.body.salvageValuePercen,
                netBookValue: req.body.netBookValue,
                depreciationMethod: req.body.depreciationMethod,
                lifeYears: req.body.lifeYears,
                months: req.body.months,
                bonusRule: req.body.bonusRule,
                amortizationStarDate: req.body.amortizationStarDate,
                amortizeNBVoverRemainingLife: req.body.amortizeNBVoverRemainingLife,
                Ceiling: req.body.Ceiling,
                YTDDepreciation: req.body.YTDDepreciation,
                accumulatedDepreciation: req.body.accumulatedDepreciation,
                depreciationValue: req.body.depreciationValue
            },
            depreciationLimit: {
                type: req.body.type,
                limitAmount: req.body.limitAmount,
                percent: req.body.percent
            }
        });
        newAsset.save(() => {
            res.redirect(302, '../index')
        })
    });
    //get page to add new service
    router.get('/accounts/addservice', (req, res, next) => {
        res.render('accounts/addService')
    });
    //post data of add new service to database
    router.post('/accounts/addService', (req, res, next) => {
        var newService = new addService({
            information: {
                serviceID: req.body.serviceID,
                serviceName: req.body.serviceName,
                owner: req.body.owner,
                serviceDescription: req.body.serviceDescription,
                status: req.body.status,
                type: req.body.type,
                startDate: req.body.startDate,
                startTime: req.body.startTime,
                endDate: req.body.endDate,
                endTime: req.body.endTime,
                serviceRendered: req.body.serviceRendered,
                detailsOfService: req.body.detailsOfService,
                requestStartDate: req.body.requestStartDate,
                schduledStartDate: req.body.schduledStartDate,
                servicePeriod: req.body.servicePeriod,
                lastUpdated: req.body.lastUpdated,
                job: req.body.job,
                dataCenter: req.body.dataCenter,
                paymentMethod: req.body.paymentMethod,
                firstPaymentAmount: req.body.firstPaymentAmount,
                recurringAmount: req.body.recurringAmount,
                billingCycle: req.body.billingCycle,
                servicePrice: req.body.servicePrice
            }
        })
        newService.save(() => {
            res.redirect(302, '../index')
        })
    })

}