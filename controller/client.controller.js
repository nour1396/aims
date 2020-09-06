const Client = require('../models/clients').Client;


exports.getAllClients = async function(req, res) {
    /* if (!req.user == false) {
        Log.create({
            statement: 'User: ' + req.user.userName + ' entered All Clients '
        });
        clientsModel.getAllClients().then(clients => {
            res.json({
                clients: clients
            })
        })
    } else {
        res.redirect(302, '/login');
    } */
    let clients = await Client.find()
    res.json({ clients })

};

exports.personFormHandler = async(req, res) => {
    let data = {
        personalInformation,
        PI_name,
        english,
        PI_firstName,
        PI_secondName,
        PI_thirdName,
        PI_fourthName,
        PI_lastName,
        arabic,
        PI_firstName_arabic,
        PI_secondName_arabic,
        PI_thirdName_arabic,
        PI_fourthName_arabic,
        PI_lastName_arabic,
        Farsi,
        PI_firstName_Farsi,
        PI_secondName_Farsi,
        PI_thirdName_Farsi,
        PI_fourthName_Farsi,
        PI_lastName_Farsi,
        spanish,
        PI_firstName_spanish,
        PI_secondName_spanish,
        PI_thirdName_spanish,
        PI_fourthName_spanishPI_lastName_spanish,
        PI_title,
        PI_gender,
        PI_nationality,
        PI_maritalStatus,
        identityCard,
        IC_idNumber,
        IC_issuedFrom,
        IC_startDate,
        IC_endDate,
        IC_fullName,
        IC_gender,
        IC_address,
        IC_religion,
        IC_maritalStatus,
        IC_job,
        IC_husbandName,
        IC_uploadId,
        militaryState,
        MS_fullName,
        MS_birthDate,
        MS_militaryServiceIDTriple,
        MS_issuedFrom,
        MS_idNumberMS_IDIssuedFrom,
        MS_decisionCode,
        MS_decisionDate,
        MS_decisionNumber,
        MS_decision,
        MS_uploadMilitary,
        birthDetails,
        BD_nationalNumber,
        BD_fullNameInEnglish,
        BD_fullNameInArabic,
        BD_nationality,
        BD_placeOfBirth,
        BD_religion,
        BD_gender,
        BD_dateOfBirth,
        BD_fullFatherName,
        BD_hisReligion,
        BD_hisNationality,
        BD_fullMotherName,
        BD_herReligion,
        BD_herNationality,
        BD_civilRegister,
        BD_issueRegister,
        BD_registerDate,
        BD_issueDate,
        BD_uploadCopy,
        addressDetails,
        AD_addressType,
        AD_expirationDateOfRenting,
        AD_country,
        AD_city,
        AD_area,
        AD_realEstateTypeAD_realEstateNumber,
        AD_floorNumber,
        AD_appartmentNumber,
        AD_streetName,
        AD_detailedAddress,
        AD_owns,
        familyStatus,
        FS_numberOfFamilyMembers,
        FS_numberOfChildrenMales,
        FS_numberOfChildrenFemales,
        FS_numberOfWifes,
        FS_parentStatus,
        legalInformation,
        drivingLicence,
        DL_trafficUnit,
        DL_ID,
        DL_address,
        DL_nationality,
        DL_issueDate,
        DL_endDate,
        DL_job,
        DL_typeOfLicence,
        DL_licenceNumber,
        DL_typeOfVehicle,
        DL_wearingGlassesDL_copyOfLicence,
        internationalDrivingLicence,
        IDL_name,
        IDL_address,
        IDL_placeOfBirth,
        IDL_dateOfBirth,
        IDL_height,
        IDL_gender,
        IDL_eyesColor,
        IDL_bloodGroup,
        IDL_passportNumberIDL_classCategory,
        IDL_licenceType,
        IDL_issuedDate,
        IDL_expireDate,
        IDL_category,
        IDL_uploadCopy,
        passport,
        P_passportNumber,
        P_militaryStatus,
        P_passportType,
        P_passportCountry,
        P_issuedAt,
        P_issueDate,
        P_endDate,
        P_profession,
        P_issueOffice,
        P_copyOfPassport,
        visa,
        V_typeOfVisa,
        V_validFor,
        V_periodValidity,
        V_periodValidity_From,
        V_periodValidity_To,
        V_numberOfEntries,
        V_durationOfStay,
        V_profession,
        V_religion,
        V_nationality,
        V_issuingAuthority,
        V_issuedDate,
        V_expirationDate,
        V_purpose,
        V_transporter,
        V_passportNumber,
        V_firstName,
        V_lastName,
        V_remarks,
        V_Upload,
        residencePermit,
        RP_typeOfResidencePermit,
        RP_fullNameRP_numberOfResidencePermit,
        RP_issuedPlace,
        RP_issuedDate,
        RP_expirationDate,
        RP_birthDate,
        RP_profession,
        RP_nationality,
        RP_religion,
        RP_employerSponser,
        RP_accompaniedBy,
        RP_copyOfResidencePermit,
        sponserInformation,
        SI_name,
        SI_id,
        SI_mobileNumber,
        SI_workPlace,
        SI_contractName,
        SI_contractNumber,
        SI_licenceNumber,
        SI_issuedDate,
        SI_expirationDate,
        SI_country,
        SI_city,
        policeRecordsCertificate,
        PC_fullName,
        PC_gender,
        PC_IDNumber,
        PC_from,
        PC_address,
        PC_presentedTo,
        PC_transactionNumber,
        PC_dateOfIssue,
        PC_resultOfInspection,
        PC_ifAnyMentionIt,
        PC_uploadCopy,
        bankAccount,
        BA_accountType,
        BA_accountNumber,
        BA_bankName,
        BA_currency,
        BA_branch,
        contactData,
        CD_telephoneNumber,
        CD_mobileNumber,
        CD_postalCode,
        CD_email,
        CD_contactLanguage,
        CD_nativeLanguage,
        CD_spokenLanguage,
        Education,
        E_lastDegreeLevel,
        university,
        UNI_universtyName,
        UNI_facultyName,
        UNI_degreeLevel,
        UNI_department,
        UNI_grade,
        UNI_graduateDate,
        UNI_copyOfCertificate,
        secondrySchool,
        SEC_schoolType,
        SEC_secondrySchoolName,
        SEC_grade,
        SEC_graduateDate,
        SEC_copyOfCertificate,
        middleSchool,
        MIDD_typeOfSchool,
        MIDD_schoolName,
        MIDD_grade,
        MIDD_graduateDate,
        MIDD_copyOfCertificate,
        primarySchool,
        PRIM_schoolType,
        PRIM_schoolName,
        PRIM_grade,
        PRIM_graduateDate,
        PRIM_copyOfCertificate,
        trainingAndCourses,
        TAC_trainingTopic,
        TAC_organizationOrinstitutionName,
        TAC_month,
        TAC_year,
        TAC_additionalInformation,
        skills,
        SK_skillName,
        SK_proficiency,
        SK_interest,
        SK_yearsOfExperience,
        SK_addJustification,
        languages,
        LANG_language,
        LANG_readingProficiency,
        LANG_writingProficiency,
        LANG_listeningProficiency,
        LANG_speakingProficiency,
        LANG_addJustification,
        medicalProfile,
        MP_vitalRates,
        VR_bloodPressure,
        VR_breathingAverage,
        VR_pulseAverage,
        MP_bloodGroup,
        MP_physicalProperties,
        PP_hipSize,
        PP_wristSize,
        PP_height,
        PP_weight,
        PP_eyeGlasses,
        PP_rightEyeOptometry,
        PP_leftEyeOptometry,
        MP_regularHabits,
        RH_eatFruits,
        RH_eatVegetables,
        RH_eatChicken,
        RH_eatMeats,
        RH_smoke,
        RH_drinkAlchole,
        RH_takeDrugs,
        RH_effortWithinWork,
        RH_effortWithinFootwork,
        RH_effortWithinVacations,
        MP_tattoo,
        MP_chronicDiseases,
        CHR_diseases,
        CHR_dengrouseDiseasesAndPreviousSurgeries,
        MP_currentMedicines,
        CM_medicine,
        CM_vaccinations,
        MP_allergy,
        ALL_allergyOfFood,
        ALL_allergyOfMedicine,
        ALL_allergyOfMaterial,
        MP_diseasesOfFamily,
        MP_statusOfPhysicalAndMentalsocialInsurance,
        INS_type,
        INS_insuranceNumber,
        INS_dateOfRegistryCertificate,
        INS_numberOfRegistryCertificate,
        INS_numberOfHealthInsurance,
        INS_uploadCopy,
        syndicate,
        SY_syndicateName,
        SY_name,
        SY_licencingNumber,
        SY_registryDate,
        SY_lastYearDischarge,
        SY_expirationDate,
        SY_typeOfSpecialization,
        SY_branchUnion,
        SY_uploadCopy,
        careerInterests,
        CI_minimumSalaryWouldBeAccepted,
        CI_currentCareerLevel,
        CI_typesOfJobAreBeOpenedTo,
        CI_jobRolesAreBeInteresetedIn,
        CI_countriesAndCitiesToBeWorkedIn,
        CI_currentJobSearchStatus,
        careerHistory,
        CH_companyName,
        CH_position,
        CH_startDate,
        CH_endDate,
        CH_reasonOfLeaving,
        CH_yearsOfExperience,
        appearance,
        APP_bodyType,
        APP_hairType,
        APP_hairColor,
        APP_height,
        APP_weight,
        APP_specialMark,
        APP_eyeColor,
        sizes,
        SZ_clothSize,
        SZ_pantsSize,
        SZ_hatSize,
        SZ_shoesSize,
        deathData,
        DD_name,
        DD_gender,
        DD_nationality,
        DD_motherName,
        DD_maritalStatus,
        DD_deathDate,
        DD_deathPlace,
        DD_ageAtDeath,
        DD_birthPlace,
        activities,
        ACT_sportType,
        ACT_achievement,
        ACT_numberOfMedals,
        ACT_copyOfCerticates,
        ACT_hobbies,
        healthCertificate,
        HC_startDate,
        HC_endDate,
        HC_fullName,
        HC_job,
        HC_birthDateAndAge,
        HC_familyID,
        HC_withDate,
        HC_civilRegister,
        HC_result,
        HC_uploadCopy,
        financialStatus,
        socialMediaAccounts,
        facebook,
        instagram,
        whatsapp,
        twitter,
        linkedin,
        Behance,
        GitHub,
        StackOverflow,
        Blog,
        Website,
        Other,
        bodyMeasures,
        female,
        F_neckRotation,
        F_bustRotation,
        F_bustHeight,
        F_armRotation,
        F_wristRotation,
        F_waistRotation,
        F_hipHeight,
        F_hipRotation,
        F_shoulderLength,
        F_backHeight,
        F_sleeveLength,
        male,
        M_shoulderLength,
        M_chestRotation,
        M_sleeveLength,
        M_neckRotation,
        M_waistRotation,
        M_hipHeight,
        M_hipRotation,
        disabilities,
        disabilityType,
        missingParts,
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
    } = req.body;
    let clients = await Client.insertMany(data);
    console.log(clients);
    res.json(clients)
};