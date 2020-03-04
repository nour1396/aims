const addItem = require('../models/accounts/addItem').addItem;
const addItemCategory = require('../models/accounts/addItem').addItemCategory;
const addAcc = require('../models/accounts/accountCard').addAcc;
const Company = require('../models/accounts/companySchema').Company;
const Organization = require('../models/accounts/orgSchema').Organization;
const addAsset = require('../models/accounts/assets').addAsset;
const addService = require('../models/accounts/services').addService;
const journalEntry = require('../models/accounts/journal').journalEntry;
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
                journalEntry.create([{
                    accountCode: "merchandise inventory",
                    documentNumber: addNewItem._id,
                    debit: addNewItem.pricePerOne * addNewItem.quantity,
                    credit: 0
                }, {
                    accountCode: "AP",
                    documentNumber: addNewItem._id,
                    debit: 0,
                    credit: addNewItem.pricePerOne * addNewItem.quantity
                }]).then(() => {
                    res.redirect(302, '../index')
                })
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
    router.get('/accounts/addCompany', (req, res, next) => {
        res.render('accounts/addCompany')
    })

    //post (add) form of new co. to database
    router.post('/accounts/addCompany', (req, res, next) => {
        var newCompany = new Company({
            companyInformation: {
                nameInArabic: req.body.nameInArabic,
                nameInEnglish: req.body.nameInEnglish,
                namePronunciation: req.body.namePronunciation,
                descreption: req.body.descreption,
                allies: req.body.allies,
                parentCompany: req.body.parentCompany,
                legalForm: req.body.legalForm,
                legalInformation: req.body.legalInformation,
                startDate: req.body.startDate,
                cityInCorporated: req.body.cityInCorporated,
                ultimateParentName: req.body.ultimateParentName,
                companyNationality: req.body.companyNationality
            },
            addressDetails: {
                addressType: req.body.addressType,
                country: req.body.country,
                city: req.body.city,
                streetName: req.body.streetName,
                area: req.body.area,
                realStateType: req.body.realStateType,
                realStateNumber: req.body.realStateNumber,
                floorNumber: req.body.floorNumber,
                apartmentNumber: req.body.apartmentNumber,
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
                postOfficeCode: req.body.postOfficeCode
            },
            accounts: {
                balance: req.body.balance,
                ARbalance: req.body.ARbalance,
                paymentTerm: req.body.paymentTerm,
                accountNumber: req.body.accountNumber,
                creditLimit: req.body.creditLimit,
                invoiceToParent: req.body.invoiceToParent,
                salesOrderToParent: req.body.salesOrderToParent,
                openItem: req.body.openItem,
                stopCredit: req.body.stopCredit,
                primaryGroup: req.body.primaryGroup,
                secondryGroup: req.body.secondryGroup,
                defaultCurrency: req.body.defaultCurrency,
                strategy: req.body.strategy
            },
            bankAccount: {
                accountType: req.body.accountType,
                accountNumber: req.body.accountNumber,
                bankName: req.body.bankName,
                currency: req.body.currency,
                branch: req.body.branch
            },
            activityBusiness: {
                category: req.body.category,
                subcategory: req.body.subcategory
            },
            taxCard: {
                name: req.body.name,
                address: req.body.address,
                UnderlyingOffice: req.body.UnderlyingOffice,
                typeOfCompany: req.body.typeOfCompany,
                companyActivity: req.body.companyActivity,
                fileNumber: req.body.fileNumber,
                registerNumber: req.body.registerNumber,
                issueDate: req.body.issueDate,
                expirationDate: req.body.expirationDate,
                uploadCopy: req.body.uploadCopy
            },
            commercialRegister: {
                nationalNumberForCompany: req.body.nationalNumberForCompany,
                commercialRgisterNumber: req.body.commercialRgisterNumber,
                depositNumber: req.body.depositNumber,
                depositDate: req.body.depositDate,
                registrationNumberInCommercialRegister: req.body.registrationNumberInCommercialRegister,
                depositNumberOfRenewalNumber: req.body.depositNumberOfRenewalNumber,
                depositDateOf: req.body.depositDateOf,
                renewalDate: req.body.renewalDate,
                commercialName: req.body.commercialName,
                CommercialDenomination: req.body.CommercialDenomination,
                nameProceedHisTrade: req.body.nameProceedHisTrade,
                legalForm: req.body.legalForm,
                addressOfCompanyOrCooperativeSociety: req.body.addressOfCompanyOrCooperativeSociety,
                commercialAttribute: req.body.commercialAttribute,
                CommercialDenominationForBranch: req.body.CommercialDenominationForBranch,
                nameOfMerchantHisNickNameDateAndPalceOfHisBirthAndHisNationality: {
                    merchantName: req.body.merchantName,
                    merchantNickName: req.body.merchantNickName,
                    dateOfBirth: req.body.dateOfBirth,
                    placeOfBirth: req.body.placeOfBirth,
                    nationality: req.body.nationality
                },
                namesNickNamesOfJointlyResponsibleInGeneralPartnershipOrLimitedPartnershipBirthDateAndPlaceAndTheirNationality: {
                    partnerName: req.body.partnerName,
                    partnerNickName: req.body.partnerNickName,
                    dateOfBirth: req.body.dateOfBirth,
                    placeOfBirth: req.body.placeOfBirth,
                    nationality: req.body.nationality
                },
                namesNickNamesOfPartnersOrWhoResponsibleOfManageCompanyAbdWhoHaveRightInSignWithTheirNamesTheirAttributeBirthDateAndPlaceTheirNationalityAndTheirPowerInSdministrationAndSigning: {
                    name: req.body.name,
                    nickName: req.body.nickName,
                    attribute: req.body.attribute,
                    dateOfBirth: req.body.dateOfBirth,
                    placeOfBirth: req.body.placeOfBirth,
                    nationality: req.body.nationality,
                    hisPowerScopeInAdministrationAndSignature: req.body.hisPowerScopeInAdministrationAndSignature
                },
                namesNickNamesOfDirectorsBordInJointStockCompanyOrCoopretativeSocietyTheirAgentsTheirAttributeBirthDateAndPlaceTheirNationalityAndTheirPowerOnAdministerationAndSigning: {
                    directorName: req.body.directorName,
                    dateOfBirth: req.body.dateOfBirth,
                    placeOfBirth: req.body.placeOfBirth,
                    nationality: req.body.nationality,
                    powerScopeInAdministration: req.body.powerScopeInAdministration,
                    hisAgents: req.body.hisAgents
                },
                nameNickNameOfHeadOfficeDirectorOrGeneralAgentInEgyptBirthDateAndPlaceAndHisNationalityIfGeneralCenterOfCompanyWasOutside: {
                    managerOfHeadOfficeName: req.body.managerOfHeadOfficeName,
                    hisNickName: req.body.hisNickName,
                    dateOfBirth: req.body.dateOfBirth,
                    placeOfBirth: req.body.placeOfBirth,
                    nationality: req.body.nationality,
                    typeOfTrade: req.body.typeOfTrade,
                    purposeOfEstablishingCompanyOrCooperativeSociety: req.body.purposeOfEstablishingCompanyOrCooperativeSociety,
                    whenMerchantBeganHisWorksInEgypt: req.body.whenMerchantBeganHisWorksInEgypt,
                    dateOfEngagementBusinessLicence: req.body.dateOfEngagementBusinessLicence,
                    startDateOfCompany: req.body.startDateOfCompany,
                    sendDateOfCompany: req.body.sendDateOfCompany,
                    openingDateOfAgentOrBranch: req.body.openingDateOfAgentOrBranch,
                    addressOfHeadOffice: req.body.addressOfHeadOffice,
                    addressOfGeneralCenterForCompanyOrCooperativeSociety: req.body.addressOfGeneralCenterForCompanyOrCooperativeSociety,
                    recordNumberOfMainShopOrGeneralCenter: req.body.recordNumberOfMainShopOrGeneralCenter,
                    addressesOfBranchesOrAgentsSubsetToMainShopOrGeneralCenter: req.body.addressesOfBranchesOrAgentsSubsetToMainShopOrGeneralCenter,
                    addressOfBrachOrAgent: req.body.addressOfBrachOrAgent,
                    uploadCopy: req.body.uploadCopy
                }
            },
            recordCardInImporterRegister: {
                recordNumber: req.body.recordNumber,
                valiedFrom: req.body.valiedFrom,
                valiedUntil: req.body.valiedUntil,
                tradeName: req.body.tradeName,
                CommercialDenomination: req.body.CommercialDenomination,
                type: req.body.type,
                capital: req.body.capital,
                addressOfBusiness: req.body.addressOfBusiness,
                governorate: req.body.governorate,
                dateOfRecord: req.body.dateOfRecord,
                uploadCopy: req.body.uploadCopy
            },
            recordInExporterRegister: {
                valiedFrom: req.body.valiedFrom,
                valiedUntile: req.body.valiedUntile,
                tradeName: req.body.tradeName,
                CommercialDenomination: req.body.CommercialDenomination,
                legalForm: req.body.legalForm,
                capital: req.body.capital,
                addressOfBusiness: req.body.addressOfBusiness,
                governorate: req.body.governorate,
                dateOfRecord: req.body.dateOfRecord,
                commercialRegisterNumber: req.body.commercialRegisterNumber,
                hisPlace: req.body.hisPlace,
                taxRegisterationNumber: req.body.taxRegisterationNumber,
                IdNumberOfOwner: req.body.IdNumberOfOwner,
                telephoneNumber: req.body.telephoneNumber,
                faxNumber: req.body.faxNumber,
                itemsAreExported: req.body.itemsAreExported,
                uploadCopy: req.body.uploadCopy
            },
            registerationGeneralTaxOnSales: {
                businessName: req.body.businessName,
                address: req.body.address,
                registerationNumber: req.body.registerationNumber,
                registerationDate: req.body.registerationDate,
                uploadCopy: req.body.uploadCopy
            },
            engagementBusinessLicense: {
                licenceNumber: req.body.licenceNumber,
                companyName: req.body.companyName,
                CommercialDenomination: req.body.CommercialDenomination,
                legalForm: req.body.legalForm,
                commercialRegisterNumber: req.body.commercialRegisterNumber,
                issuedPlaceOfCommercialRegister: req.body.issuedPlaceOfCommercialRegister,
                issuedDateOfCommercialRegister: req.body.issuedDateOfCommercialRegister,
                activity: req.body.activity,
                responsibleDirectorName: req.body.responsibleDirectorName,
                address: req.body.address,
                governorate: req.body.governorate,
                issuedDateOfLicence: req.body.issuedDateOfLicence,
                expirationDateOfLicence: req.body.expirationDateOfLicence,
                uploadCopy: req.body.uploadCopy
            },
            regiseterationCertifecateOfValueAddedTaxe: {
                distrect: req.body.distrect,
                office: req.body.office,
                address: req.body.address,
                issuedFrom: req.body.issuedFrom,
                registerationNumber: req.body.registerationNumber,
                registerationDate: req.body.registerationDate,
                uploadCopy: req.body.uploadCopy
            }
        });
        newCompany.save(() => {
            res.redirect(302, '../index')
        })
    });
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