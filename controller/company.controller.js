const Company = require('../models/company').Company /* company schema */ ;

exports.newCompanyHandler = async(req, res, next) => {
    let data = {
        companyInformation,
        nameInArabic,
        nameInEnglish,
        namePronunciation,
        descreption,
        allies,
        parentCompany,
        legalForm,
        legalInformation,
        startDate,
        cityInCorporated,
        ultimateParentName,
        companyNationality,
        addressDetails,
        addressType,
        country,
        city,
        streetName,
        area,
        realStateType,
        realStateNumber,
        floorNumber,
        apartmentNumber,
        detailedAddress,
        coordinates,
        contactInformation,
        countryCode,
        governorateCode,
        landLine,
        faxNumber,
        email,
        logoURL,
        website,
        mobileNumber,
        contactLanguage,
        postOfficeCode,
        bankAccount,
        accountType,
        accountNumber,
        bankName,
        currency,
        branch,
        activityBusiness,
        category,
        subcategory,
        taxCard,
        name,
        address,
        UnderlyingOffice,
        typeOfCompany,
        companyActivity,
        fileNumber,
        registerNumber,
        issueDate,
        expirationDate,
        uploadCopy,
        V_vendorId,
        V_vendorName,
        V_vendorCheckName,
        V_vendorShortName,
        V_vendorStatus,
        V_vendorBankAccount1,
        V_vendorBankAccount2,
        V_vendorBankAccount3,
        V_vendorBankAccount4,
        V_vendorClass,
        V_accountPayable,
        V_tradeDiscount,
        V_miscellaneous,
        V_freight,
        V_tax,
        V_accruedPurchasing,
        V_purchasePricevariance,
        V_currencyID,
        V_paymentTerms,
        V_shippingMethod,
        V_creditLimet,
        V_minimumPayment,
        V_minimumOrderAmount,
        V_maximumInvoiceAmont,
        V_taxschedule,
        V_checkbookID,
        C_customerID,
        C_customerName,
        C_customerShortName,
        C_customerStatementName,
        C_customerStatus,
        C_parentCustomerID,
        C_customerClass,
        C_customerBankAccount1,
        C_customerBankAccount2,
        C_customerBankAccount3,
        C_customerBankAccount4,
        C_accountsReceivable,
        C_tradeDiscount,
        C_miscellaneous,
        C_freight,
        C_tax,
        C_sales,
        C_costofSales,
        C_inventory,
        C_salesReturns,
        C_currencyID,
        C_paymentTerms,
        C_shippingMethod,
        C_creditLimit,
        C_minimumPayment,
        C_minimumOrderAmount,
        C_maximumInvoiceAmount,
        C_taxschedule,
        C_salesperson,
        C_territoryArea,
        C_priceList
        /*   commercialRegister: {
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
          } */
    } = req.body;
    let newCompany = await Company.insertMany(data);
    res.json(newCompany)
};