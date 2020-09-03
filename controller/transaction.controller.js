const Transaction = require('../models/transactions').Transaction; //transactions Schema
const newAccInAccChart = require('../models/addAccountInChart').newAccInAccChart;
const CostCenter = require('../models/costCenter').CostCenter;
const vendorClass = require('../models/vendorClass').vendorClass;
const Checkbook = require('../models/checkbook').Checkbook;
const Tax = require('../models/taxDetails').Tax;
const TaxSchedule = require('../models/taxSchedule').TaxSchedule;

exports.transactionPostHandler = async(req, res) => {
    let data =
        /*  {
                _id,
                projectID,
                transactionDate,
                postNumber,
                patchNumber,
                docNumber,
                orderNumber,

                invoiceNumber,

                fromEntity,
                fromSubEntity,

                to,
                toEntity,
                toSubEntity,
                transactionType,
                transactionsCategory,
                transactionClass,
                transactionNumber,
                parentTransaction,
                reaccuranceName,
                reaccuranceType,
                taxState,
                currency,
                assets,
                assetID,
                assetName,
                assetsSerialNumber,
                assetsQuantity,
                assetsUnitOfMeasurment,
                assetsPrice,
                assetsFrom,
                assetsTo,
                assetsNote,
                assetsSubTotal,

                items,
                itemID,
                itemName,
                itemsSerialNumber,
                itemsQuantity,
                itemsUnitOfMeasurment,
                itemsPrice,
                itemsPackageID,
                itemsPackageName,
                itemsFrom,
                itemsTo,
                itemsNotes,
                itemsSubTotal,

                services,
                serviceID,
                serviceName,
                servicesUnitOfMeasurment,
                servicesQuantity,
                servicesPrice,
                servicesStart,
                servicesEnd,
                servicesPackage,
                servicesFrom,
                servicesTo,
                servicesNotes,
                servicesSubTotal,

                jobs,
                jobID,
                jobName,
                jobsUnitOfMeasurment,
                jobsQuantity,
                jobsPrice,
                jobsNotes,
                jobsSubTotal,

                fees,
                feeID,
                feeName,
                feesUnitOfMeasurment,
                feesQuantity,
                feesPrice,
                feesNotes,

                fines,
                fineID,
                fineName,
                finesValue,
                finesNotes,

                interestAndProfits,
                interestAndProfitsID,
                interestAndProfitsName,
                interestAndProfitsValue,
                interestAndProfitsNotes,

                taxes,
                taxID,
                taxName,
                taxType,
                taxesRatioOrFixedValue,
                taxesValue,
                taxesNotes,

                customs,
                customID,
                customName,
                customType,
                customsRatioOrFixedValue,
                customsValue,
                customsNotes,

                currencies,
                currencySource,
                currencyDestination,
                currencyRate,
                currencyAmount,
                currenciesNotes,

                cash,
                cashValue,
                cashCurrency,
                cashDetailed,
                cashPapers,
                cashFrom,
                cashTo,
                cashNotes,

                accounts,
                accountNumber,
                accountName,
                accountDebit,
                accountCredit,
                accountCurrency,
                accountNotes,
                costCenter,
                costCenterName,
                costCenterValue,
                parenta,
                projectID,
                notes,

                costCenterName_1,
                costCenterValue_1,
                parent_1,
                projectID_1,
                notes_1,

                costCenterName_2,
                costCenterValue_2,
                parent_2,
                projectID_2,
                notes_2,


                accountNumber1,
                accountName1,
                accountDebit1,
                accountCredit1,
                accountCurrency1,
                accountNotes1,
                costCenter1,
                costCenterName1_1,
                costCenterValue1_1,
                parent1_1,
                projectID1_1,
                notes1_1,

                costCenterName1_2,
                costCenterValue1_2,
                parent1_2,
                projectID1_2,
                notes1_2,

                costCenterName1_3,
                costCenterValue1_3,
                parent1_3,
                projectID1_3,
                notes1_3,

                accountNumber2,
                accountName2,
                accountDebit2,
                accountCredit2,
                accountCurrency2,
                accountNotes2,
                costCenter2,
                costCenterName2_1,
                costCenterValue2_1,
                parent2_1,
                projectID2_1,
                notes2_1,

                costCenterName2_2,
                costCenterValue2_2,
                parent2_2,
                projectID2_2,
                notes2_2,

                costCenterName2_3,
                costCenterValue2_3,
                parent2_3,
                projectID2_3,
                notes2_3,

                accountNumber3,
                accountName3,
                accountDebit3,
                accountCredit3,
                accountCurrency3,
                accountNotes3,
                costCenter3,
                costCenterName3_1,
                costCenterValue1_1,
                parent3_1,
                projectID3_1,
                notes3_1,

                costCenterName3_2,
                costCenterValue1_2,
                parent3_2,
                projectID3_2,
                notes3_2,

                costCenterName3_3,
                costCenterValue3_3,
                parent3_3,
                projectID3_3,
                notes3_3,

                checks,
                checkOwner,
                checkBankName,
                checkPayee,
                checkDate,
                checkAmount,
                checkCurrency,
                checkNumber,
                checkDueDate,
                checkType,
                checkCopy,
                checkNotes,

                hr,
                hrEmployeeCode,
                hrBaseSalary,
                hrGroupedSpecialBonus,
                hrPreviousYearBonus,
                hrExceptionalExpensiveLivingBonus,
                hrWorkNatureAllowance,
                hrLaborHolidayBonus,
                hrFoodAllowance,
                hrSocialBonus,
                hrInsurance,
                hrStamp,
                hrWorkGainTax,
                hrSyndicatehrNotes,

            } = */
        req.body;
    let transaction = await Transaction.insertMany(data)
    console.log(transaction);
    res.json(transaction)
};

exports.newAccInAccountsChartHandler = async(req, res) => {
    var data = {
        accountNumber: req.body.accountNumber,
        accountEnglish: req.body.accountEnglish,
        nature: req.body.nature,
        accountArabic: req.body.accountArabic,
        status: req.body.status,
        category: req.body.category,
        parent: req.body.parent,
        descreptionEnglish: req.body.descreptionEnglish,
        descreptionArabic: req.body.descreptionArabic,
        notes: req.body.notess
    } = req.body
    let newAccInAccountsChart = await newAccInAccChart.insertMany(data)
    res.json(newAccInAccountsChart)

    //record when user do something
    /* Log.create({
        statement: 'User: ' + req.user.userName + ' saved new transaction with number' + req.body.docNumber + 'and type:' + req.body.transactionType,
        user: req.user.userName
    }); */
};

exports.newCostCenterHandler = async(req, res) => {
    let data = {
        CostCenterCode,
        controllingArea,
        valid,
        from,
        to,
        basicData,
        name,
        description,
        userResponsible,
        personResponsible,
        department,
        costCenterCategory,
        hierarchyArea,
        businessArea,
        functionalArea,
        currency,
        profitCenter,
    } = req.body
    let newCostCenter = await CostCenter.insertMany(data)
    res.json(newCostCenter)

    //record when user do something
    /* Log.create({
        statement: 'User: ' + req.user.userName + ' saved new transaction with number' + req.body.docNumber + 'and type:' + req.body.transactionType,
        user: req.user.userName
    }); */
};

exports.vendorClassHandler = async(req, res) => {
    let data = {
        _id,
        nameEnglish,
        nameArabic,
        accounts,
        accountPayable,
        tradeDiscount,
        miscellaneous,
        frieght,
        tax,
        accruedPurchasing,
        purchasePriceVariance,
        currencyID,
        paymentTerms,
        shippingMethod,
        creditLimit,
        minimumPayment,
        minimumOrderAmount,
        maximumInvoiceAmount,
        taxSchedule,
        taxId,
        taxRegestration,
        taxesNotesId,
        checkbookId
    } = req.body;
    let vendorClasses = await vendorClass.insertMany(data);
    res.json(vendorClasses)
};

exports.vendorClassQuery = async(req, res) => {
    let vc = await vendorClass.find().populate('currencyID')
    res.json(vc)
};

exports.cehckbookHandler = async(req, res) => {
    let data = {
        CheckbookID,
        CheckbookDescreption,
        CheckbookCurrencyID,
        CheckbookAccountNumber,
        CheckbookAccountDescreption,
        CheckbookSerialNumber,
        BankAccountNumber,
    } = req.body;
    let checkbook = new Checkbook(data)
    await checkbook.save();
    res.json(checkbook)
};

exports.taxDetailsHandler = async(req, res) => {
    let data = {
        TaxID,
        TaxDescreption,
        TaxType,
        TaxPercentage,
        TaxAccount,
        TaxAccountDescreption,
    } = req.body;

    let tax = new Tax(data);
    await tax.save();
    res.json()
};

exports.taxScheduleHandler = async(req, res) => {
    let data = {
        TaxSchedualsID,
        TaxSchedualsDescreption,
        SelectedTaxDetailsIDs,
    } = req.body;

    let taxSchedule = new TaxSchedule(data);

    await taxSchedule.save();
    res.json()
}