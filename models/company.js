const mongoose = require('mongoose');

var companySchema = mongoose.Schema({
    companyInformation: {
        nameInArabic: String,
        nameInEnglish: String,
        namePronunciation: String,
        descreption: String,
        allies: String,
        parentCompany: String,
        legalForm: String,
        legalInformation: String,
        startDate: String,
        cityInCorporated: String,
        ultimateParentName: String,
        companyNationality: String
    },
    addressDetails: {
        addressType: String,
        country: String,
        city: String,
        streetName: String,
        area: String,
        realStateType: String,
        realStateNumber: String,
        floorNumber: String,
        apartmentNumber: String,
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
        currency: String,
        branch: String
    },
    activityBusiness: {
        category: String,
        subcategory: String
    },
    taxCard: {
        name: String,
        address: String,
        UnderlyingOffice: String,
        typeOfCompany: String,
        companyActivity: String,
        fileNumber: String,
        registerNumber: String,
        issueDate: Date,
        expirationDate: Date,
        uploadCopy: String
    },
    commercialRegister: {
        nationalNumberForCompany: String,
        commercialRgisterNumber: String,
        depositNumber: String,
        depositDate: String,
        registrationNumberInCommercialRegister: String,
        depositNumberOfRenewalNumber: String,
        depositDateOf: String,
        renewalDate: String,
        commercialName: String,
        CommercialDenomination: String,
        nameProceedHisTrade: String,
        legalForm: String,
        addressOfCompanyOrCooperativeSociety: String,
        commercialAttribute: String,
        CommercialDenominationForBranch: String,
        nameOfMerchantHisNickNameDateAndPalceOfHisBirthAndHisNationality: {
            merchantName: String,
            merchantNickName: String,
            dateOfBirth: String,
            placeOfBirth: String,
            nationality: String
        },
        namesNickNamesOfJointlyResponsibleInGeneralPartnershipOrLimitedPartnershipBirthDateAndPlaceAndTheirNationality: {
            partnerName: String,
            partnerNickName: String,
            dateOfBirth: String,
            placeOfBirth: String,
            nationality: String
        },
        namesNickNamesOfPartnersOrWhoResponsibleOfManageCompanyAbdWhoHaveRightInSignWithTheirNamesTheirAttributeBirthDateAndPlaceTheirNationalityAndTheirPowerInSdministrationAndSigning: {
            name: String,
            nickName: String,
            attribute: String,
            dateOfBirth: String,
            placeOfBirth: String,
            nationality: String,
            hisPowerScopeInAdministrationAndSignature: String
        },
        namesNickNamesOfDirectorsBordInJointStockCompanyOrCoopretativeSocietyTheirAgentsTheirAttributeBirthDateAndPlaceTheirNationalityAndTheirPowerOnAdministerationAndSigning: {
            directorName: String,
            dateOfBirth: String,
            placeOfBirth: String,
            nationality: String,
            powerScopeInAdministration: String,
            hisAgents: String
        },
        nameNickNameOfHeadOfficeDirectorOrGeneralAgentInEgyptBirthDateAndPlaceAndHisNationalityIfGeneralCenterOfCompanyWasOutside: {
            managerOfHeadOfficeName: String,
            hisNickName: String,
            dateOfBirth: String,
            placeOfBirth: String,
            nationality: String,
            typeOfTrade: String,
            purposeOfEstablishingCompanyOrCooperativeSociety: String,
            whenMerchantBeganHisWorksInEgypt: String,
            dateOfEngagementBusinessLicence: String,
            startDateOfCompany: String,
            sendDateOfCompany: String,
            openingDateOfAgentOrBranch: String,
            addressOfHeadOffice: String,
            addressOfGeneralCenterForCompanyOrCooperativeSociety: String,
            recordNumberOfMainShopOrGeneralCenter: String,
            addressesOfBranchesOrAgentsSubsetToMainShopOrGeneralCenter: String,
            addressOfBrachOrAgent: String,
            uploadCopy: String
        }
    },
    recordCardInImporterRegister: {
        recordNumber: String,
        valiedFrom: String,
        valiedUntil: String,
        tradeName: String,
        CommercialDenomination: String,
        type: String,
        capital: String,
        addressOfBusiness: String,
        governorate: String,
        dateOfRecord: String,
        uploadCopy: String
    },
    recordInExporterRegister: {
        valiedFrom: String,
        valiedUntile: String,
        tradeName: String,
        CommercialDenomination: String,
        legalForm: String,
        capital: String,
        addressOfBusiness: String,
        governorate: String,
        dateOfRecord: String,
        commercialRegisterNumber: String,
        hisPlace: String,
        taxRegisterationNumber: String,
        IdNumberOfOwner: String,
        telephoneNumber: String,
        faxNumber: String,
        itemsAreExported: String,
        uploadCopy: String
    },
    registerationGeneralTaxOnSales: {
        businessName: String,
        address: String,
        registerationNumber: String,
        registerationDate: String,
        uploadCopy: String
    },
    engagementBusinessLicense: {
        licenceNumber: String,
        companyName: String,
        CommercialDenomination: String,
        legalForm: String,
        commercialRegisterNumber: String,
        issuedPlaceOfCommercialRegister: String,
        issuedDateOfCommercialRegister: String,
        activity: String,
        responsibleDirectorName: String,
        address: String,
        governorate: String,
        issuedDateOfLicence: String,
        expirationDateOfLicence: String,
        uploadCopy: String
    },
    regiseterationCertifecateOfValueAddedTaxe: {
        distrect: String,
        office: String,
        address: String,
        issuedFrom: String,
        registerationNumber: String,
        registerationDate: String,
        uploadCopy: String
    },
    companyClass: {
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
var Company = mongoose.model('companies', companySchema);
exports.Company = Company