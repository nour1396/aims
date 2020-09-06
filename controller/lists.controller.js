const Client = require('../models/clients').Client,
    Log = require('../models/log').Log,
    DraftClient = require('../models/drafts/draftClientEN').DraftClient,
    DraftClientAr = require('../models/drafts/draftClientAR').DraftClientAr,
    DraftPersonal = require('../models/drafts/personalDraft').DraftPersonal,
    labelstranslated = require('../models/labels'),
    Country = require('../models/lists').Country,
    MilitaryStatus = require('../models/lists').MilitaryStatus,
    Language = require('../models/lists').Language,
    BloodGroup = require('../models/lists').BloodGroup,
    ResidencePermitTypes = require('../models/lists').ResidencePermitsTypes,
    maritalStatus = require('../models/lists').maritalStatus,
    Currency = require('../models/lists').Currency,
    VisaType = require('../models/lists').VisaType,
    Religion = require('../models/lists').Religion,
    degreeLevel = require('../models/lists').degreeLevel,
    PassportType = require('../models/lists').PassportType,
    Title = require('../models/lists').Title,
    Gender = require('../models/lists').Gender,
    Nationality = require('../models/lists').Nationality,
    addressTypes = require('../models/lists').addressTypes,
    drivingLicenceType = require('../models/lists').drivingLicenceType,
    realEstateType = require('../models/lists').realEstateType,
    parentStatus = require('../models/lists').parentStatus,
    schoolsType = require('../models/lists').schoolsType,
    Position = require('../models/lists').Position,
    Colors = require('../models/lists').Colors,
    bodyType = require('../models/lists').bodyType,
    syndicatesType = require('../models/lists').syndicatesType,
    hairType = require('../models/lists').hairType,
    hairColor = require('../models/lists').hairColor,
    Disabilities = require('../models/lists').Disabilities,
    missingPart = require('../models/lists').missingParts,
    bankAccountsTypes = require('../models/lists').bankAccountsTypes,
    banksInEgypt = require('../models/lists').banksInEgypt,
    yearsOfExperience = require('../models/lists').yearsOfExperience,
    Grades = require('../models/lists').Grades,
    transactionTypes = require('../models/lists').transactionsTypes,
    reccurrenceTypes = require('../models/lists').reccurrenceTypes,
    taxState = require('../models/lists').taxState,
    addItem = require('../models/addItem').addItem,
    newAccInAccChart = require('../models/addAccountInChart').newAccInAccChart,
    CostCenter = require('../models/costCenter').CostCenter,
    transactionsCategory = require('../models/lists').transactionsCategory,
    measUnits = require('../models/lists').measUnits,
    VendorClass = require('../models/vendorClass').VendorClass,
    CustomerClass = require('../models/customerClass').CustomerClass,
    PaymentTerms = require('../models/lists').PaymentTerms,
    ShippingMethod = require('../models/lists').ShippingMethod,
    Tax = require('../models/taxDetails').Tax,
    TaxSchedule = require('../models/taxSchedule').TaxSchedule,
    BusCat = require('../models/lists').BusCat,
    BusSubCat = require('../models/lists').BusSubCat,
    OrgType = require('../models/lists').OrgType;
exports.handleLists = async(req, res, next) => {
    let countries = await Country.find(),
        nationalities = await Nationality.find(),
        maritalstatus = await maritalStatus.find(),
        titles = await Title.find(),
        religions = await Religion.find(),
        languages = await Language.find(),
        gender = await Gender.find(),
        militarystatuses = await MilitaryStatus.find(),
        passportTypes = await PassportType.find(),
        bloodgroups = await BloodGroup.find(),
        visatypes = await VisaType.find(),
        ResidencePermitsTypes = await ResidencePermitTypes.find(),
        currencies = await Currency.find(),
        degreelevels = await degreeLevel.find(),
        grades = await Grades.find(),
        labels = await labelstranslated.find(),
        addressType = await addressTypes.find(),
        drivingLicenceTypes = await drivingLicenceType.find(),
        parentstatus = await parentStatus.find(),
        realEstateTypes = await realEstateType.find(),
        schoolsTypes = await schoolsType.find(),
        syndicatesTypes = await syndicatesType.find(),
        Positions = await Position.find(),
        colors = await Colors.find(),
        bodyTypes = await bodyType.find(),
        hairTypes = await hairType.find(),
        hairColors = await hairColor.find({}),
        disabilities = await Disabilities.find(),
        missingparts = await missingPart.find(),
        bankAccountsType = await bankAccountsTypes.find(),
        bankInEgypt = await banksInEgypt.find({}),
        yearsOfExperiences = await yearsOfExperience.find(),
        transactionstypes = await transactionTypes.find(),
        addItems = await addItem.find(),
        CostCenters = await CostCenter.find(),
        newAccInAccCharts = await newAccInAccChart.find(),
        reccuranceTypes = await reccurrenceTypes.find(),
        taxStates = await taxState.find(),
        transactionsCategories = await transactionsCategory.find(),
        measurementUnits = await measUnits.find(),
        vendorClasses = await VendorClass.find(),
        customerClasses = await CustomerClass.find(),
        paymentTerms = await PaymentTerms.find(),
        shippingMethod = await ShippingMethod.find(),
        taxes = await Tax.find(),
        OrgTypes = await OrgType.find(),
        taxSchedule = await TaxSchedule.find(),
        busCat = await BusCat.find(),
        busSubCat = await BusSubCat.find();

    let data = {
        countries,
        nationalities,
        maritalstatus,
        titles,
        religions,
        languages,
        gender,
        militarystatuses,
        passportTypes,
        bloodgroups,
        visatypes,
        ResidencePermitsTypes,
        currencies,
        degreelevels,
        grades,
        labels,
        addressType,
        drivingLicenceTypes,
        parentstatus,
        realEstateTypes,
        schoolsTypes,
        syndicatesTypes,
        Positions,
        colors,
        bodyTypes,
        hairTypes,
        hairColors,
        disabilities,
        missingparts,
        bankAccountsType,
        bankInEgypt,
        yearsOfExperiences,
        transactionstypes,
        addItems,
        CostCenters,
        newAccInAccCharts,
        reccuranceTypes,
        taxStates,
        transactionsCategories,
        measurementUnits,
        vendorClasses,
        customerClasses,
        paymentTerms,
        shippingMethod,
        taxes,
        taxSchedule,
        OrgTypes,
        busCat,
        busSubCat
    }
    res.json(data)
};