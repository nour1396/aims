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
            vendorId: String,
            vendorName: String,
            vendorCheckName: String,
            vendorShortName: String,
            vendorStatus: String,
            vendorBankAccount1: String,
            vendorBankAccount2: String,
            vendorBankAccount3: String,
            vendorBankAccount4: String,
            vendorClass: String,
            accounts: {
                accountPayable: String,
                tradeDiscount: String,
                miscellaneous: String,
                freight: String,
                tax: String,
                accruedPurchasing: String,
                purchasePricevariance: String
            },
            currencyID: String,
            paymentTerms: String,
            shippingMethod: String,
            creditLimet: String,
            minimumPayment: String,
            minimumOrderAmount: String,
            maximumInvoiceAmont: String,
            taxschedule: String,
            checkbookID: String,

        },
        customer: {
            customerID: String,
            customerName: String,
            customerShortName: String,
            customerStatementName: String,
            customerStatus: String,
            parentCustomerID: String,
            customerClass: String,
            customerBankAccount1: String,
            customerBankAccount2: String,
            customerBankAccount3: String,
            customerBankAccount4: String,
            accounts: {
                AccountsReceivable: String,
                TradeDiscount: String,
                Miscellaneous: String,
                Freight: String,
                Tax: String,
                Sales: String,
                CostofSales: String,
                Inventory: String,
                SalesReturns: String,
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
        }
    }


}, { strict: false })
var Company = mongoose.model('companies', companySchema);
exports.Company = Company