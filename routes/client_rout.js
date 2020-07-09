const configDB = require('../config/database'),
    mongoose = require('mongoose'),
    multer = require('multer'),
    Client = require('../models/clients').Client,
    Log = require('../models/log').Log,
    DraftClient = require('../models/drafts/draftClientEN').DraftClient,
    DraftClientAr = require('../models/drafts/draftClientAR').DraftClientAr,
    DraftPersonal = require('../models/drafts/personalDraft').DraftPersonal,
    labelstranslated = require('../models/labels'),
    Country = require('../models/lists').Country,
    MilitaryStatus = require('../models/lists').MilitaryStatus,
    Language = require('../models/lists').Language,
    BloodGroup = require('../models/lists').BloodGroup,
    ResidencePermitsTypes = require('../models/lists').ResidencePermitsTypes,
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
    missingParts = require('../models/lists').missingParts,
    bankAccountsTypes = require('../models/lists').bankAccountsTypes,
    banksInEgypt = require('../models/lists').banksInEgypt,
    yearsOfExperience = require('../models/lists').yearsOfExperience,
    Grades = require('../models/lists').Grades;
module.exports = function(router) {
    router.get('/lists', function(req, res, next) {
        let data = {};

        Country.find({}).then(countries => {
            data.countries = countries
            Nationality.find({}).then(nationalities => {
                data.nationalities = nationalities
                maritalStatus.find({}).then(maritalstatus => {
                    data.maritalstatus = maritalstatus;
                    Title.find({}).then(titles => {
                        data.titles = titles
                        Religion.find({}).then(religions => {
                            data.religions = religions
                            Language.find({}).then(languages => {
                                data.languages = languages
                                Gender.find({}).then(gender => {
                                    data.gender = gender
                                    MilitaryStatus.find({}).then(militarystatuses => {
                                        data.militarystatuses = militarystatuses
                                        PassportType.find({}).then(passportTypes => {
                                            data.passportTypes = passportTypes
                                            BloodGroup.find({}).then(bloodgroups => {
                                                data.bloodgroups = bloodgroups
                                                VisaType.find({}).then(visatypes => {
                                                    data.visatypes = visatypes
                                                    ResidencePermitsTypes.find({}).then(ResidencePermitsTypes => {
                                                        data.ResidencePermitsTypes = ResidencePermitsTypes
                                                        Currency.find({}).then(currencies => {
                                                            data.currencies = currencies
                                                            degreeLevel.find({}).then(degreelevels => {
                                                                data.degreelevels = degreelevels
                                                                Grades.find({}).then(grades => {
                                                                    data.grades = grades
                                                                    labelstranslated.find({}).then(labels => {
                                                                        data.labels = labels;
                                                                        addressTypes.find({}).then(addressType => {
                                                                            data.addressType = addressType
                                                                            drivingLicenceType.find({}).then(drivingLicenceTypes => {
                                                                                data.drivingLicenceTypes = drivingLicenceTypes;
                                                                                parentStatus.find({}).then(parentstatus => {
                                                                                    data.parentstatus = parentstatus;
                                                                                    realEstateType.find({}).then(realEstateTypes => {
                                                                                        data.realEstateTypes = realEstateTypes
                                                                                        schoolsType.find({}).then(schoolsTypes => {
                                                                                            data.schoolsTypes = schoolsTypes
                                                                                            syndicatesType.find({}).then(syndicatesTypes => {
                                                                                                data.syndicatesTypes = syndicatesTypes
                                                                                                Position.find({}).then(Positions => {
                                                                                                    data.Positions = Positions
                                                                                                    Colors.find({}).then(colors => {
                                                                                                        data.colors = colors
                                                                                                        bodyType.find({}).then(bodyTypes => {
                                                                                                            data.bodyTypes = bodyTypes
                                                                                                            hairType.find({}).then(hairTypes => {
                                                                                                                data.hairTypes = hairTypes
                                                                                                                hairColor.find({}).then(hairColors => {
                                                                                                                    data.hairColors = hairColors
                                                                                                                    Disabilities.find({}).then(disabilities => {
                                                                                                                        data.disabilities = disabilities
                                                                                                                        missingParts.find({}).then(missingparts => {
                                                                                                                            data.missingparts = missingparts
                                                                                                                            bankAccountsTypes.find({}).then(bankAccountsType => {
                                                                                                                                data.bankAccountsType = bankAccountsType
                                                                                                                                banksInEgypt.find({}).then(bankInEgypt => {
                                                                                                                                    data.bankInEgypt = bankInEgypt
                                                                                                                                    yearsOfExperience.find({}).then(yearsOfExperiences => {
                                                                                                                                        data.yearsOfExperiences = yearsOfExperiences
                                                                                                                                        res.json(data) // at the end
                                                                                                                                    })
                                                                                                                                })
                                                                                                                            })
                                                                                                                        })
                                                                                                                    })
                                                                                                                })
                                                                                                            })
                                                                                                        })
                                                                                                    })
                                                                                                })
                                                                                            })
                                                                                        })
                                                                                    })
                                                                                })
                                                                            })
                                                                        })
                                                                    })
                                                                })
                                                            })
                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })

    //data-en **get page to enter data
    router.get('/data-en', function(req, res, next) {
        if (!req.user == false) {
            Log.create({
                statement: 'User: ' + req.user.userName + ' entered data-en ',
                user: req.user.userName
            });
            let data = {}
                /*
    after javascript code ...
    The last thing is to check if the logged in user has a draft. if so grab it and render data-en-draft
    else, it will render data-en 
    */
            DraftClient.find({ user: req.user.userName }).then(records => {
                if (records.length > 0) {
                    data.draft = records[0];
                    // get data from database
                    Country.find({}).then(countries => {
                        data.countries = countries
                        maritalStatus.find({}).then(maritalstatus => {
                            data.maritalstatus = maritalstatus;
                            Title.find({}).then(titles => {
                                data.titles = titles
                                Religion.find({}).then(religions => {
                                    data.religions = religions
                                    Language.find({}).then(languages => {
                                        data.languages = languages
                                        Nationality.find({}).then(nationalities => {
                                            data.nationalities = nationalities
                                            res.render('data-en-draft', data) // at the end
                                        })
                                    })
                                })
                            })
                        })
                    })
                } else {
                    Country.find({}).then(countries => {
                        data.countries = countries
                        maritalStatus.find({}).then(maritalstatus => {
                            data.maritalstatus = maritalstatus;
                            Title.find({}).then(titles => {
                                data.titles = titles
                                Religion.find({}).then(religions => {
                                    data.religions = religions
                                    Language.find({}).then(languages => {
                                        data.languages = languages
                                        Nationality.find({}).then(nationalities => {
                                            data.nationalities = nationalities
                                            res.render('data-en', data) // at the end
                                        })
                                    })
                                })

                            })

                        })
                    })
                }
            })
        } else {
            res.redirect(302, '/login');
        }
    })

    /*
    Now I made my ajax call and data is sent to the server
    first, grab the field and the value
    then, make a query, but it's special query. it will create a new draft for the user who logged in if he has no previous drafts
    but if he has a previous draft, it will update it
    that's all
    */
    router.post('/data-en/draft', (req, res) => {
            const field = req.body.field;
            const value = req.body.value;
            var query = { user: req.user.userName },
                update = {
                    [field]: value
                },
                options = { upsert: true, new: true, setDefaultsOnInsert: true };
            // Find the document
            DraftClient.findOneAndUpdate(query, update, options, function(error, result) {
                if (error) return;
                // do something with the document
                res.end();
            })
        })
        //save data in database
    router.post('/data-en', (req, res) => {
        /* DraftClient.deleteOne({ user: req.user.userName }).then(resolve => {}); */
        var newClient = new Client({
            _id: req.body._id,
            personalInformation: {
                PI_name: {
                    english: {
                        PI_firstName: req.body.PI_firstName,
                        PI_secondName: req.body.PI_secondName,
                        PI_thirdName: req.body.PI_thirdName,
                        PI_fourthName: req.body.PI_fourthName,
                        PI_lastName: req.body.PI_lastName,
                    },
                    arabic: {
                        PI_firstName_arabic: req.body.PI_firstName_arabic,
                        PI_secondName_arabic: req.body.PI_secondName_arabic,
                        PI_thirdName_arabic: req.body.PI_thirdName_arabic,
                        PI_fourthName_arabic: req.body.PI_fourthName_arabic,
                        PI_lastName_arabic: req.body.PI_lastName_arabic,
                    },
                    Farsi: {
                        PI_firstName_Farsi: req.body.PI_firstName_Farsi,
                        PI_secondName_Farsi: req.body.PI_secondName_Farsi,
                        PI_thirdName_Farsi: req.body.PI_thirdName_Farsi,
                        PI_fourthName_Farsi: req.body.PI_fourthName_Farsi,
                        PI_lastName_Farsi: req.body.PI_lastName_Farsi,
                    },
                    spanish: {
                        PI_firstName_spanish: req.body.PI_firstName_spanish,
                        PI_secondName_spanish: req.body.PI_secondName_spanish,
                        PI_thirdName_spanish: req.body.PI_thirdName_spanish,
                        PI_fourthName_spanish: req.body.PI_fourthName_spanish,
                        PI_lastName_spanish: req.body.PI_lastName_spanish,
                    }
                },
                PI_title: req.body.PI_title,
                PI_gender: req.body.PI_gender,
                PI_nationality: req.body.PI_nationality,
                PI_maritalStatus: req.body.PI_maritalStatus
            },
            identityCard: {
                IC_idNumber: req.body.IC_idNumber,
                IC_issuedFrom: req.body.IC_issuedFrom,
                IC_startDate: req.body.IC_startDate,
                IC_endDate: req.body.IC_endDate,
                IC_fullName: req.body.IC_fullName,
                IC_gender: req.body.IC_gender,
                IC_address: req.body.IC_address,
                IC_religion: req.body.IC_religion,
                IC_maritalStatus: req.body.IC_maritalStatus,
                IC_job: req.body.IC_job,
                IC_husbandName: req.body.IC_husbandName,
                IC_uploadId: req.body.IC_uploadId
            },
            militaryState: {
                MS_fullName: req.body.MS_fullName,
                MS_birthDate: req.body.MS_birthDate,
                MS_militaryServiceIDTriple: req.body.MS_militaryServiceIDTriple,
                MS_issuedFrom: req.body.MS_issuedFrom,
                MS_idNumber: req.body.MS_idNumber,
                MS_IDIssuedFrom: req.body.MS_IDIssuedFrom,
                MS_decisionCode: req.body.MS_decisionCode,
                MS_decisionDate: req.body.MS_decisionDate,
                MS_decisionNumber: req.body.MS_decisionNumber,
                MS_decision: req.body.MS_decision,
                MS_uploadMilitary: req.body.MS_uploadMilitary
            },

            birthDetails: {
                BD_nationalNumber: req.body.BD_nationalNumber,
                BD_fullNameInEnglish: req.body.BD_fullNameInEnglish,
                BD_fullNameInArabic: req.body.BD_fullNameInArabic,
                BD_nationality: req.body.BD_nationality,
                BD_placeOfBirth: req.body.BD_placeOfBirth,
                BD_religion: req.body.BD_religion,
                BD_gender: req.body.BD_gender,
                BD_dateOfBirth: req.body.BD_dateOfBirth,
                BD_fullFatherName: req.body.BD_fullFatherName,
                BD_hisReligion: req.body.BD_hisReligion,
                BD_hisNationality: req.body.BD_hisNationality,
                BD_fullMotherName: req.body.BD_fullMotherName,
                BD_herReligion: req.body.BD_herReligion,
                BD_herNationality: req.body.BD_herNationality,
                BD_civilRegister: req.body.BD_civilRegister,
                BD_issueRegister: req.body.BD_issueRegister,
                BD_registerDate: req.body.BD_registerDate,
                BD_issueDate: req.body.BD_issueDate,
                BD_uploadCopy: req.body.BD_uploadCopy
            },
            addressDetails: {
                AD_addressType: req.body.AD_addressType,
                AD_expirationDateOfRenting: req.body.AD_expirationDateOfRenting,
                AD_country: req.body.AD_country,
                AD_city: req.body.AD_city,
                AD_area: req.body.AD_area,
                AD_realEstateType: req.body.AD_realEstateType,
                AD_realEstateNumber: req.body.AD_realEstateNumber,
                AD_floorNumber: req.body.AD_floorNumber,
                AD_appartmentNumber: req.body.AD_appartmentNumber,
                AD_streetName: req.body.AD_streetName,
                AD_detailedAddress: req.body.AD_detailedAddress,
                AD_owns: req.body.AD_owns
            },
            familyStatus: {
                FS_numberOfFamilyMembers: req.body.FS_numberOfFamilyMembers,
                FS_numberOfChildrenMales: req.body.FS_numberOfChildrenMales,
                FS_numberOfChildrenFemales: req.body.FS_numberOfChildrenFemales,
                FS_numberOfWifes: req.body.FS_numberOfWifes,
                FS_parentStatus: req.body.FS_parentStatus
            },
            legalInformation: {
                drivingLicence: {
                    DL_trafficUnit: req.body.DL_trafficUnit,
                    DL_ID: req.body.DL_ID,
                    DL_address: req.body.DL_address,
                    DL_nationality: req.body.DL_nationality,
                    DL_issueDate: req.body.DL_issueDate,
                    DL_endDate: req.body.DL_endDate,
                    DL_job: req.body.DL_job,
                    DL_typeOfLicence: req.body.DL_typeOfLicence,
                    DL_licenceNumber: req.body.DL_licenceNumber,
                    DL_typeOfVehicle: req.body.DL_typeOfVehicle,
                    DL_wearingGlasses: req.body.DL_wearingGlasses,
                    DL_copyOfLicence: req.body.DL_copyOfLicence
                },
                internationalDrivingLicence: {
                    IDL_name: req.body.IDL_name,
                    IDL_address: req.body.IDL_address,
                    IDL_placeOfBirth: req.body.IDL_placeOfBirth,
                    IDL_dateOfBirth: req.body.IDL_dateOfBirth,
                    IDL_height: req.body.IDL_height,
                    IDL_gender: req.body.IDL_gender,
                    IDL_eyesColor: req.body.IDL_eyesColor,
                    IDL_bloodGroup: req.body.IDL_bloodGroup,
                    IDL_passportNumber: req.body.IDL_passportNumber,
                    IDL_classCategory: req.body.IDL_classCategory,
                    IDL_licenceType: req.body.IDL_licenceType,
                    IDL_issuedDate: req.body.IDL_issuedDate,
                    IDL_expireDate: req.body.IDL_expireDate,
                    IDL_category: req.body.IDL_category,
                    IDL_uploadCopy: req.body.IDL_uploadCopy
                },
                passport: {
                    P_passportNumber: req.body.P_passportNumber,
                    P_militaryStatus: req.body.P_militaryStatus,
                    P_passportType: req.body.P_passportType,
                    P_passportCountry: req.body.P_passportCountry,
                    P_issuedAt: req.body.P_issuedAt,
                    P_issueDate: req.body.P_issueDate,
                    P_endDate: req.body.P_endDate,
                    P_profession: req.body.P_profession,
                    P_issueOffice: req.body.P_issueOffice,
                    P_copyOfPassport: req.body.P_copyOfPassport
                },
                visa: {
                    V_typeOfVisa: req.body.V_typeOfVisa,
                    V_validFor: req.body.validFor,
                    V_periodValidity: {
                        V_periodValidity_From: req.body.V_periodValidity_From,
                        V_periodValidity_To: req.body.V_periodValidity_To
                    },
                    V_numberOfEntries: req.body.V_numberOfEntries,
                    V_durationOfStay: req.body.V_durationOfStay,
                    V_profession: req.body.V_profession,
                    V_religion: req.body.V_religion,
                    V_nationality: req.body.V_nationality,
                    V_issuingAuthority: req.body.V_issuingAuthority,
                    V_issuedDate: req.body.V_issuedDate,
                    V_expirationDate: req.body.V_expirationDate,
                    V_purpose: req.body.V_purpose,
                    V_transporter: req.body.V_transporter,
                    V_passportNumber: req.body.V_passportNumber,
                    V_firstName: req.body.V_firstName,
                    V_lastName: req.body.V_lastName,
                    V_remarks: req.body.V_remarks,
                    V_Upload: req.body.V_Upload
                },
                residencePermit: {
                    RP_typeOfResidencePermit: req.body.RP_typeOfResidencePermit,
                    RP_fullName: req.body.RP_fullName,
                    RP_numberOfResidencePermit: req.body.RP_numberOfResidencePermit,
                    RP_issuedPlace: req.body.RP_issuedPlace,
                    RP_issuedDate: req.body.RP_issuedDate,
                    RP_expirationDate: req.body.RP_expirationDate,
                    RP_birthDate: req.body.RP_birthDate,
                    RP_profession: req.body.RP_profession,
                    RP_nationality: req.body.RP_nationality,
                    RP_religion: req.body.RP_religion,
                    RP_employerSponser: req.body.RP_employerSponser,
                    RP_accompaniedBy: req.body.RP_accompaniedBy,
                    RP_copyOfResidencePermit: req.body.RP_copyOfResidencePermit

                },
                sponserInformation: {
                    SI_name: req.body.SI_name,
                    SI_id: req.body.SI_id,
                    SI_mobileNumber: req.body.SI_mobileNumber,
                    SI_workPlace: req.body.SI_workPlace,
                    SI_contractName: req.body.SI_contractName,
                    SI_contractNumber: req.body.SI_contractNumber,
                    SI_licenceNumber: req.body.SI_licenceNumber,
                    SI_issuedDate: req.body.SI_issuedDate,
                    SI_expirationDate: req.body.SI_expirationDate,
                    SI_country: req.body.SI_country,
                    SI_city: req.body.SI_city
                },
                policeRecordsCertificate: {
                    PC_fullName: req.body.PC_fullName,
                    PC_gender: req.body.PC_gender,
                    PC_IDNumber: req.body.PC_IDNumber,
                    PC_from: req.body.PC_from,
                    PC_address: req.body.PC_address,
                    PC_presentedTo: req.body.PC_presentedTo,
                    PC_transactionNumber: req.body.PC_transactionNumber,
                    PC_dateOfIssue: req.body.PC_dateOfIssue,
                    PC_resultOfInspection: req.body.PC_resultOfInspection,
                    PC_ifAnyMentionIt: req.body.PC_ifAnyMentionIt,
                    PC_uploadCopy: req.body.PC_uploadCopy
                },
            },
            bankAccount: {
                BA_accountType: req.body.BA_accountType,
                BA_accountNumber: req.body.BA_accountNumber,
                BA_bankName: req.body.BA_bankName,
                BA_currency: req.body.BA_currency,
                BA_branch: req.body.BA_branch
            },
            contactData: {
                CD_telephoneNumber: req.body.CD_telephoneNumber,
                CD_mobileNumber: req.body.CD_mobileNumber,
                CD_postalCode: req.body.CD_postalCode,
                CD_email: req.body.CD_email,
                CD_contactLanguage: req.body.CD_contactLanguage,
                CD_nativeLanguage: req.body.CD_nativeLanguage,
                CD_spokenLanguage: req.body.CD_spokenLanguage
            },
            Education: {
                E_lastDegreeLevel: req.body.E_lastDegreeLevel,
                university: {
                    UNI_universtyName: req.body.UNI_universtyName,
                    UNI_facultyName: req.body.UNI_facultyName,
                    UNI_degreeLevel: req.body.UNI_degreeLevel,
                    UNI_department: req.body.UNI_department,
                    UNI_grade: req.body.UNI_grade,
                    UNI_graduateDate: req.body.UNI_graduateDate,
                    UNI_copyOfCertificate: req.body.UNI_copyOfCertificate
                },
                secondrySchool: {
                    SEC_schoolType: req.body.SEC_schoolType,
                    SEC_secondrySchoolName: req.body.SEC_secondrySchoolName,
                    SEC_grade: req.body.SEC_grade,
                    SEC_graduateDate: req.body.SEC_graduateDate,
                    SEC_copyOfCertificate: req.body.SEC_copyOfCertificate
                },
                middleSchool: {
                    MIDD_typeOfSchool: req.body.MIDD_typeOfSchool,
                    MIDD_schoolName: req.body.MIDD_schoolName,
                    MIDD_grade: req.body.MIDD_grade,
                    MIDD_graduateDate: req.body.MIDD_graduateDate,
                    MIDD_copyOfCertificate: req.body.MIDD_copyOfCertificate
                },
                primarySchool: {
                    PRIM_schoolType: req.body.PRIM_schoolType,
                    PRIM_schoolName: req.body.PRIM_schoolName,
                    PRIM_grade: req.body.PRIM_grade,
                    PRIM_graduateDate: req.body.PRIM_graduateDate,
                    PRIM_copyOfCertificate: req.body.PRIM_copyOfCertificate
                },

                trainingAndCourses: {
                    TAC_trainingTopic: req.body.trainingTopic,
                    TAC_organizationOrinstitutionName: req.body.TAC_organizationOrinstitutionName,
                    TAC_month: req.body.TAC_month,
                    TAC_year: req.body.TAC_year,
                    TAC_additionalInformation: req.body.TAC_additionalInformation
                },
                skills: {
                    SK_skillName: req.body.SK_skillName,
                    SK_proficiency: req.body.SK_proficiency,
                    SK_interest: req.body.SK_interest,
                    SK_yearsOfExperience: req.body.SK_yearsOfExperience,
                    SK_addJustification: req.body.SK_addJustification
                },
                languages: {
                    LANG_language: req.body.LANG_language,
                    LANG_readingProficiency: req.body.LANG_readingProficiency,
                    LANG_writingProficiency: req.body.LANG_writingProficiency,
                    LANG_listeningProficiency: req.body.LANG_listeningProficiency,
                    LANG_speakingProficiency: req.body.LANG_speakingProficiency,
                    LANG_addJustification: req.body.LANG_addJustification
                }
            },
            medicalProfile: {
                MP_vitalRates: {
                    VR_bloodPressure: req.body.VR_bloodPressure,
                    VR_breathingAverage: req.body.VR_breathingAverage,
                    VR_pulseAverage: req.body.VR_pulseAverage
                },
                MP_bloodGroup: req.body.MP_bloodGroup,
                MP_physicalProperties: {
                    PP_hipSize: req.body.PP_hipSize,
                    PP_wristSize: req.body.PP_wristSize,
                    PP_height: req.body.PP_height,
                    PP_weight: req.body.PP_weight,
                    PP_eyeGlasses: req.body.PP_eyeGlasses,
                    PP_rightEyeOptometry: req.body.PP_rightEyeOptometry,
                    PP_leftEyeOptometry: req.body.PP_leftEyeOptometry
                },
                MP_regularHabits: {
                    RH_eatFruits: req.body.RH_eatFruits,
                    RH_eatVegetables: req.body.RH_eatVegetables,
                    RH_eatChicken: req.body.RH_eatChicken,
                    RH_eatMeats: req.body.RH_eatMeats,
                    RH_smoke: req.body.RH_smoke,
                    RH_drinkAlchole: req.body.RH_drinkAlchole,
                    RH_takeDrugs: req.body.RH_takeDrugs,
                    RH_effortWithinWork: req.body.RH_effortWithinWork,
                    RH_effortWithinFootwork: req.body.RH_effortWithinFootwork,
                    RH_effortWithinVacations: req.body.RH_effortWithinVacations
                },
                MP_tattoo: req.body.MP_tattoo,
                MP_chronicDiseases: {
                    CHR_diseases: req.body.CHR_diseases,
                    CHR_dengrouseDiseasesAndPreviousSurgeries: req.body.CHR_dengrouseDiseasesAndPreviousSurgeries
                },
                MP_currentMedicines: {
                    CM_medicine: req.body.CM_medicine,
                    CM_vaccinations: req.body.CM_vaccinations
                },
                MP_allergy: {
                    ALL_allergyOfFood: req.body.ALL_allergyOfFood,
                    ALL_allergyOfMedicine: req.body.ALL_allergyOfMedicine,
                    ALL_allergyOfMaterial: req.body.ALL_allergyOfMaterial
                },
                MP_diseasesOfFamily: req.body.MP_diseasesOfFamily,
                MP_statusOfPhysicalAndMental: req.body.MP_statusOfPhysicalAndMental
            },
            socialInsurance: {
                INS_type: req.body.type,
                INS_insuranceNumber: req.body.INS_insuranceNumber,
                INS_dateOfRegistryCertificate: req.body.INS_dateOfRegistryCertificate,
                INS_numberOfRegistryCertificate: req.body.INS_numberOfRegistryCertificate,
                INS_numberOfHealthInsurance: req.body.INS_numberOfHealthInsurance,
                INS_uploadCopy: req.body.INS_uploadCopy
            },
            syndicate: {
                SY_syndicateName: req.body.SY_syndicateName,
                SY_name: req.body.SY_name,
                SY_licencingNumber: req.body.SY_licencingNumber,
                SY_registryDate: req.body.SY_registryDate,
                SY_lastYearDischarge: req.body.SY_lastYearDischarge,
                SY_expirationDate: req.body.SY_expirationDate,
                SY_typeOfSpecialization: req.body.SY_typeOfSpecialization,
                SY_branchUnion: req.body.SY_branchUnion,
                SY_uploadCopy: req.body.SY_uploadCopy
            },
            careerInterests: {
                CI_minimumSalaryWouldBeAccepted: req.body.CI_minimumSalaryWouldBeAccepted,
                CI_currentCareerLevel: req.body.CI_currentCareerLevel,
                CI_typesOfJobAreBeOpenedTo: req.body.CI_typesOfJobAreBeOpenedTo,
                CI_jobRolesAreBeInteresetedIn: req.body.CI_jobRolesAreBeInteresetedIn,
                CI_countriesAndCitiesToBeWorkedIn: req.body.CI_countriesAndCitiesToBeWorkedIn,
                CI_currentJobSearchStatus: req.body.CI_currentJobSearchStatus
            },
            careerHistory: {
                CH_companyName: req.body.CH_companyName,
                CH_position: req.body.CH_position,
                CH_startDate: req.body.CH_startDate,
                CH_endDate: req.body.CH_endDate,
                CH_reasonOfLeaving: req.body.CH_reasonOfLeaving,
                CH_yearsOfExperience: req.body.CH_yearsOfExperience
            },
            appearance: {
                APP_bodyType: req.body.APP_bodyType,
                APP_hairType: req.body.APP_hairType,
                APP_hairColor: req.body.APP_hairColor,
                APP_height: req.body.APP_height,
                APP_weight: req.body.APP_weight,
                APP_specialMark: req.body.APP_specialMark,
                APP_eyeColor: req.body.APP_eyeColor
            },
            sizes: {
                SZ_clothSize: req.body.SZ_clothSize,
                SZ_pantsSize: req.body.SZ_pantsSize,
                SZ_hatSize: req.body.SZ_hatSize,
                SZ_shoesSize: req.body.SZ_shoesSize
            },
            deathData: {
                DD_name: req.body.name,
                DD_gender: req.body.DD_gender,
                DD_nationality: req.body.DD_nationality,
                DD_motherName: req.body.DD_motherName,
                DD_maritalStatus: req.body.DD_maritalStatus,
                DD_deathDate: req.body.DD_deathDate,
                DD_deathPlace: req.body.DD_deathPlace,
                DD_ageAtDeath: req.body.DD_ageAtDeath,
                DD_birthPlace: req.body.DD_birthPlace
            },
            activities: {
                ACT_sportType: req.body.ACT_sportType,
                ACT_achievement: req.body.ACT_achievement,
                ACT_numberOfMedals: req.body.ACT_numberOfMedals,
                ACT_copyOfCerticates: req.body.ACT_copyOfCerticates,
                ACT_hobbies: req.body.ACT_hobbies
            },
            healthCertificate: {
                HC_startDate: req.body.HC_startDate,
                HC_endDate: req.body.HC_endDate,
                HC_fullName: req.body.HC_fullName,
                HC_job: req.body.HC_job,
                HC_birthDateAndAge: req.body.HC_birthDateAndAge,
                HC_familyID: req.body.HC_familyID,
                HC_withDate: req.body.HC_withDate,
                HC_civilRegister: req.body.HC_civilRegister,
                HC_result: req.body.HC_result,
                HC_uploadCopy: req.body.HC_uploadCopy
            },
            financialStatus: req.body.financialStatus,
            socialMediaAccounts: {
                facebook: req.body.facebook,
                instagram: req.body.instagram,
                whatsapp: req.body.whatsapp,
                twitter: req.body.twitter,
                linkedin: req.body.linkedin,
                Behance: req.body.Behance,
                GitHub: req.body.GitHub,
                StackOverflow: req.body.StackOverflow,
                Blog: req.body.Blog,
                Website: req.body.Website,
                Other: req.body.Other
            },
            bodyMeasures: {
                female: {
                    F_neckRotation: req.body.F_neckRotation,
                    F_bustRotation: req.body.F_bustRotation,
                    F_bustHeight: req.body.F_bustHeight,
                    F_armRotation: req.body.F_armRotation,
                    F_wristRotation: req.body.F_wristRotation,
                    F_waistRotation: req.body.F_waistRotation,
                    F_hipHeight: req.body.F_hipHeight,
                    F_hipRotation: req.body.F_hipRotation,
                    F_shoulderLength: req.body.F_shoulderLength,
                    F_backHeight: req.body.F_backHeight,
                    F_sleeveLength: req.body.sF_leeveLength
                },
                male: {
                    M_shoulderLength: req.body.M_shoulderLength,
                    M_chestRotation: req.body.M_chestRotation,
                    M_sleeveLength: req.body.M_sleeveLength,
                    M_neckRotation: req.body.M_neckRotation,
                    M_waistRotation: req.body.M_waistRotation,
                    M_hipHeight: req.body.M_hipHeight,
                    M_hipRotation: req.body.M_hipRotation
                }
            },
            disabilities: {
                disabilityType: req.body.disabilityType,
                missingParts: req.body.missingParts
            }
        });
        newClient.save(() => {
            console.log(newClient)
            res.redirect(302, '/index')
        });
        //when user save data will record that in database
        /*    Log.create({
               statement: 'User: ' + req.user.userName + ' entered /data-en[POST] to add new client with ID: ' + req.body.IC_idNumber +
                   ' and name :' + req.body.PI_firstName + ' ' + req.body.PI_secondName,
               user: req.user.userName
           }); */
    });
    //get page where we search client with id
    router.get('/data-en-copy', (req, res) => {
        Log.create({
            statement: 'User: ' + req.user.userName + ' entered to data-en-copy-empty',
            user: req.user.userName
        });
        res.render('data-en-copy-empty');
    })

    //get client by id 
    router.get('/searchC', (req, res) => {
            const searchC = req.query.searchC;
            //when user search client data will record that in database
            Log.create({
                statement: 'User: ' + req.user.userName + ' entered to search for client',
                user: req.user.userName
            });

            Client.find({ "_id": searchC }, (err, data) => {
                if (err) throw (err);
                if (data.length > 0) {
                    res.render('data-en-copy', { Client: data[0] })
                } else {
                    res.end('No records were found');
                }
            })
            Log.create({
                statement: 'User: ' + req.user.userName + ' entered /data-en[POST] to search for client :' + searchC,
                user: req.user.userName
            });
        })
        //get page
    router.get('/edit/:_id', (req, res) => {
            const _id = req.params._id;
            Log.create({
                statement: 'User: ' + req.user.userName + ' entered /data-en to search for client :' + _id,
                user: req.user.userName
            });

            Client.find({ "_id": _id }, (err, data) => {
                if (err) throw err;
                if (data.length > 0) {
                    res.render('data-en-copy', { Client: data[0] })
                } else {
                    res.end('No records were found')
                }
            })
        })
        //update data of specific client
    router.post('/update', (req, res) => {
            Log.create({
                statement: 'User: ' + req.user.userName + ' entered /data-en[POST] to update client with ID:' + req.body.userId,
                user: req.user.userName
            });

            const _id = req.body.userId;
            const PI_firstName = req.body.PI_firstName;
            const PI_secondName = req.body.PI_secondName;
            const PI_thirdName = req.body.PI_thirdName;
            const PI_fourthName = req.body.PI_fourthName;
            const PI_lastName = req.body.PI_lastName;
            const PI_gender = req.body.PI_gender;
            const PI_nationality = req.body.PI_nationality;
            const PI_title = req.body.PI_title;


            Client.updateOne({ "_id": _id }, {
                _id,
                personalInformation: {
                    PI_firstName,
                    PI_secondName,
                    PI_thirdName,
                    PI_fourthName,
                    PI_lastName,
                    PI_gender,
                    PI_nationality,
                    PI_title
                }
            }).then(status => {
                res.redirect(302, '/index')
            }).catch(err => console.log('got an error: ' + err))
        })
        ///
    router.post('/data-en-copy', (req, res) => {
        Log.create({
            statement: 'User: ' + req.user.userName + ' entered /data-en[POST] to update',
            user: req.user.userName
        });
        Client.updateMany({}, (err, updata) => {
            if (err) throw (err);
            res.render('data-en-copy', { Client: updata })
        })
    })

    //data client in arabic
    router.get('/data-ar', function(req, res, next) {
        if (!req.user == false) {
            Log.create({
                statement: 'User: ' + req.user.userName + ' entered /data-ar[GET]',
                user: req.user.userName
            });
            let data = {}
                // get data from database
            DraftClientAr.find({ user: req.user.userName }).then(records => {
                if (records.length > 0) {
                    data.draft = records[0];
                    Country.find({}).then(countries => {
                        data.countries = countries
                        maritalStatus.find({}).then(maritalstatus => {
                            data.maritalstatus = maritalstatus;
                            Title.find({}).then(titles => {
                                data.titles = titles
                                Religion.find({}).then(religions => {
                                    data.religions = religions
                                    Language.find({}).then(languages => {
                                        data.languages = languages
                                        res.render('data-ar draft', data) // at the end
                                    })
                                })
                            })
                        })
                    })
                } else {
                    Country.find({}).then(countries => {
                        data.countries = countries
                        maritalStatus.find({}).then(maritalstatus => {
                            data.maritalstatus = maritalstatus;
                            Title.find({}).then(titles => {
                                data.titles = titles
                                Religion.find({}).then(religions => {
                                    data.religions = religions
                                    Language.find({}).then(languages => {
                                        data.languages = languages
                                        res.render('data-ar', data) // at the end
                                    })
                                })

                            })

                        })
                    })
                }
            })
        } else {
            res.redirect(302, '/login');
        }
    })

    router.post('/data-ar/draft', (req, res) => {
        const field = req.body.field;
        const value = req.body.value;
        var query = { user: req.user.userName },
            update = {
                [field]: value
            },
            options = { upsert: true, new: true, setDefaultsOnInsert: true };
        // Find the document
        DraftClientAr.findOneAndUpdate(query, update, options, function(error, result) {
            if (error) return;
            // do something with the document
            res.end();
        })
    })


    router.post('/data-ar', (req, res) => {
        DraftClientAr.deleteOne({ user: req.user.userName }).then(resolve => {});
        var newClient = new Client({
            _id: req.body._id,
            personalInformation: {
                PI_firstName: req.body.PI_firstName,
                PI_secondName: req.body.PI_secondName,
                PI_thirdName: req.body.PI_thirdName,
                PI_fourthName: req.body.PI_fourthName,
                PI_lastName: req.body.PI_lastName,
                PI_title: req.body.PI_title,
                PI_gender: req.body.PI_gender,
                PI_nationality: req.body.PI_nationality,
                PI_maritalStatus: req.body.PI_maritalStatus
            },
            identityCard: {
                IC_idNumber: req.body.IC_idNumber,
                IC_issuedFrom: req.body.IC_issuedFrom,
                IC_startDate: req.body.IC_startDate,
                IC_endDate: req.body.IC_endDate,
                IC_fullName: req.body.IC_fullName,
                IC_gender: req.body.IC_gender,
                IC_address: req.body.IC_address,
                IC_religion: req.body.IC_religion,
                IC_maritalStatus: req.body.IC_maritalStatus,
                IC_job: req.body.IC_job,
                IC_husbandName: req.body.IC_husbandName,
                IC_uploadId: req.body.IC_uploadId
            },
            militaryState: {
                MS_fullName: req.body.MS_fullName,
                MS_birthDate: req.body.MS_birthDate,
                MS_militaryServiceIDTriple: req.body.MS_militaryServiceIDTriple,
                MS_issuedFrom: req.body.MS_issuedFrom,
                MS_idNumber: req.body.MS_idNumber,
                MS_IDIssuedFrom: req.body.MS_IDIssuedFrom,
                MS_decisionCode: req.body.MS_decisionCode,
                MS_decisionDate: req.body.MS_decisionDate,
                MS_decisionNumber: req.body.MS_decisionNumber,
                MS_decision: req.body.MS_decision,
                MS_uploadMilitary: req.body.MS_uploadMilitary
            },
            familyStatus: {
                FS_numberOfFamilyMembers: req.body.FS_numberOfFamilyMembers,
                FS_numberOfChildrenMales: req.body.FS_numberOfChildrenMales,
                FS_numberOfChildrenFemales: req.body.FS_numberOfChildrenFemales,
                FS_numberOfWifes: req.body.FS_numberOfWifes,
                FS_parentStatus: req.body.FS_parentStatus
            },
            birthDetails: {
                BD_nationalNumber: req.body.BD_nationalNumber,
                BD_fullNameInEnglish: req.body.BD_fullNameInEnglish,
                BD_fullNameInArabic: req.body.BD_fullNameInArabic,
                BD_nationality: req.body.BD_nationality,
                BD_placeOfBirth: req.body.BD_placeOfBirth,
                BD_religion: req.body.BD_religion,
                BD_gender: req.body.BD_gender,
                BD_dateOfBirth: req.body.BD_dateOfBirth,
                BD_fullFatherName: req.body.BD_fullFatherName,
                BD_hisReligion: req.body.BD_hisReligion,
                BD_hisNationality: req.body.BD_hisNationality,
                BD_fullMotherName: req.body.BD_fullMotherName,
                BD_herReligion: req.body.BD_herReligion,
                BD_herNationality: req.body.BD_herNationality,
                BD_civilRegister: req.body.BD_civilRegister,
                BD_issueRegister: req.body.BD_issueRegister,
                BD_registerDate: req.body.BD_registerDate,
                BD_issueDate: req.body.BD_issueDate,
                BD_uploadCopy: req.body.BD_uploadCopy
            },
            addressDetails: {
                AD_addressType: req.body.AD_addressType,
                AD_expirationDateOfRenting: req.body.AD_expirationDateOfRenting,
                AD_country: req.body.AD_country,
                AD_city: req.body.AD_city,
                AD_area: req.body.AD_area,
                AD_realEstateType: req.body.AD_realEstateType,
                AD_realEstateNumber: req.body.AD_realEstateNumber,
                AD_floorNumber: req.body.AD_floorNumber,
                AD_appartmentNumber: req.body.AD_appartmentNumber,
                AD_streetName: req.body.AD_streetName,
                AD_detailedAddress: req.body.AD_detailedAddress,
                AD_owns: req.body.AD_owns
            },
            legalInformation: {
                drivingLicence: {
                    DL_trafficUnit: req.body.DL_trafficUnit,
                    DL_ID: req.body.DL_ID,
                    DL_address: req.body.DL_address,
                    DL_nationality: req.body.DL_nationality,
                    DL_issueDate: req.body.DL_issueDate,
                    DL_endDate: req.body.DL_endDate,
                    DL_job: req.body.DL_job,
                    DL_typeOfLicence: req.body.DL_typeOfLicence,
                    DL_licenceNumber: req.body.DL_licenceNumber,
                    DL_typeOfVehicle: req.body.DL_typeOfVehicle,
                    DL_wearingGlasses: req.body.DL_wearingGlasses,
                    DL_copyOfLicence: req.body.DL_copyOfLicence
                },
                internationalDrivingLicence: {
                    IDL_name: req.body.IDL_name,
                    IDL_address: req.body.IDL_address,
                    IDL_placeOfBirth: req.body.IDL_placeOfBirth,
                    IDL_dateOfBirth: req.body.IDL_dateOfBirth,
                    IDL_height: req.body.IDL_height,
                    IDL_gender: req.body.IDL_gender,
                    IDL_eyesColor: req.body.IDL_eyesColor,
                    IDL_bloodGroup: req.body.IDL_bloodGroup,
                    IDL_passportNumber: req.body.IDL_passportNumber,
                    IDL_classCategory: req.body.IDL_classCategory,
                    IDL_licenceType: req.body.IDL_licenceType,
                    IDL_issuedDate: req.body.IDL_issuedDate,
                    IDL_expireDate: req.body.IDL_expireDate,
                    IDL_category: req.body.IDL_category,
                    IDL_uploadCopy: req.body.IDL_uploadCopy
                },
                passport: {
                    P_passportNumber: req.body.P_passportNumber,
                    P_militaryStatus: req.body.P_militaryStatus,
                    P_passportType: req.body.P_passportType,
                    P_passportCountry: req.body.P_passportCountry,
                    P_issuedAt: req.body.P_issuedAt,
                    P_issueDate: req.body.P_issueDate,
                    P_endDate: req.body.P_endDate,
                    P_profession: req.body.P_profession,
                    P_issueOffice: req.body.P_issueOffice,
                    P_copyOfPassport: req.body.P_copyOfPassport
                },
                visa: {
                    V_typeOfVisa: req.body.V_typeOfVisa,
                    V_validFor: req.body.validFor,
                    V_periodValidity: {
                        V_periodValidity_From: req.body.V_periodValidity_From,
                        V_periodValidity_To: req.body.V_periodValidity_To
                    },
                    V_numberOfEntries: req.body.V_numberOfEntries,
                    V_durationOfStay: req.body.V_durationOfStay,
                    V_profession: req.body.V_profession,
                    V_religion: req.body.V_religion,
                    V_nationality: req.body.V_nationality,
                    V_issuingAuthority: req.body.V_issuingAuthority,
                    V_issuedDate: req.body.V_issuedDate,
                    V_expirationDate: req.body.V_expirationDate,
                    V_purpose: req.body.V_purpose,
                    V_transporter: req.body.V_transporter,
                    V_passportNumber: req.body.V_passportNumber,
                    V_firstName: req.body.V_firstName,
                    V_lastName: req.body.V_lastName,
                    V_remarks: req.body.V_remarks
                },
                residencePermit: {
                    RP_typeOfResidencePermit: req.body.RP_typeOfResidencePermit,
                    RP_fullName: req.body.RP_fullName,
                    RP_numberOfResidencePermit: req.body.RP_numberOfResidencePermit,
                    RP_issuedPlace: req.body.RP_issuedPlace,
                    RP_issuedDate: req.body.RP_issuedDate,
                    RP_expirationDate: req.body.RP_expirationDate,
                    RP_birthDate: req.body.RP_birthDate,
                    RP_profession: req.body.RP_profession,
                    RP_nationality: req.body.RP_nationality,
                    RP_religion: req.body.RP_religion,
                    RP_employerSponser: req.body.RP_employerSponser,
                    RP_accompaniedBy: req.body.RP_accompaniedBy,
                    RP_copyOfResidencePermit: req.body.RP_copyOfResidencePermit

                },
                sponserInformation: {
                    SI_name: req.body.SI_name,
                    SI_id: req.body.SI_id,
                    SI_mobileNumber: req.body.SI_mobileNumber,
                    SI_workPlace: req.body.SI_workPlace,
                    SI_contractName: req.body.SI_contractName,
                    SI_contractNumber: req.body.SI_contractNumber,
                    SI_licenceNumber: req.body.SI_licenceNumber,
                    SI_issuedDate: req.body.SI_issuedDate,
                    SI_expirationDate: req.body.SI_expirationDate,
                    SI_country: req.body.SI_country,
                    SI_city: req.body.SI_city
                },
                policeRecordsCertificate: {
                    PC_fullName: req.body.PC_fullName,
                    PC_gender: req.body.PC_gender,
                    PC_IDNumber: req.body.PC_IDNumber,
                    PC_from: req.body.PC_from,
                    PC_address: req.body.PC_address,
                    PC_presentedTo: req.body.PC_presentedTo,
                    PC_transactionNumber: req.body.PC_transactionNumber,
                    PC_dateOfIssue: req.body.PC_dateOfIssue,
                    PC_resultOfInspection: req.body.PC_resultOfInspection,
                    PC_ifAnyMentionIt: req.body.PC_ifAnyMentionIt,
                    PC_uploadCopy: req.body.PC_uploadCopy
                },

                bankAccount: {
                    BA_accountType: req.body.BA_accountType,
                    BA_accountNumber: req.body.BA_accountNumber,
                    BA_bankName: req.body.BA_bankName,
                    BA_currency: req.body.BA_currency,
                    BA_branch: req.body.BA_branch
                },
                contactData: {
                    CD_telephoneNumber: req.body.CD_telephoneNumber,
                    CD_mobileNumber: req.body.CD_mobileNumber,
                    CD_postalCode: req.body.CD_postalCode,
                    CD_email: req.body.CD_email,
                    CD_contactLanguage: req.body.CD_contactLanguage,
                    CD_nativeLanguage: req.body.CD_nativeLanguage,
                    CD_spokenLanguage: req.body.CD_spokenLanguage
                },
                Education: {
                    E_lastDegreeLevel: req.body.lastDegreeLevel,
                    university: {
                        UNI_universtyName: req.body.UNI_universtyName,
                        UNI_facultyName: req.body.UNI_facultyName,
                        UNI_degreeLevel: req.body.UNI_degreeLevel,
                        UNI_department: req.body.UNI_department,
                        UNI_grade: req.body.UNI_grade,
                        UNI_graduateDate: req.body.UNI_graduateDate,
                        UNI_copyOfCertificate: req.body.UNI_copyOfCertificate
                    },
                    secondrySchool: {
                        SEC_schoolType: req.body.SEC_schoolType,
                        SEC_secondrySchoolName: req.body.SEC_secondrySchoolName,
                        SEC_grade: req.body.SEC_grade,
                        SEC_graduateDate: req.body.SEC_graduateDate,
                        SEC_copyOfCertificate: req.body.SEC_copyOfCertificate
                    },
                    middleSchool: {
                        MIDD_typeOfSchool: req.body.MIDD_typeOfSchool,
                        MIDD_schoolName: req.body.MIDD_schoolName,
                        MIDD_grade: req.body.MIDD_grade,
                        MIDD_graduateDate: req.body.MIDD_graduateDate,
                        MIDD_copyOfCertificate: req.body.MIDD_copyOfCertificate
                    },
                    primarySchool: {
                        PRIM_schoolType: req.body.PRIM_schoolType,
                        PRIM_schoolName: req.body.PRIM_schoolName,
                        PRIM_grade: req.body.PRIM_grade,
                        PRIM_graduateDate: req.body.PRIM_graduateDate,
                        PRIM_copyOfCertificate: req.body.PRIM_copyOfCertificate
                    },

                    trainingAndCourses: {
                        TAC_trainingTopic: req.body.trainingTopic,
                        TAC_organizationOrinstitutionName: req.body.TAC_organizationOrinstitutionName,
                        TAC_month: req.body.TAC_month,
                        TAC_year: req.body.TAC_year,
                        TAC_additionalInformation: req.body.TAC_additionalInformation
                    },
                    skills: {
                        SK_skillName: req.body.SK_skillName,
                        SK_proficiency: req.body.SK_proficiency,
                        SK_interest: req.body.SK_interest,
                        SK_yearsOfExperience: req.body.SK_yearsOfExperience,
                        SK_addJustification: req.body.SK_addJustification
                    },
                    languages: {
                        LANG_language: req.body.LANG_language,
                        LANG_readingProficiency: req.body.LANG_readingProficiency,
                        LANG_writingProficiency: req.body.LANG_writingProficiency,
                        LANG_listeningProficiency: req.body.LANG_listeningProficiency,
                        LANG_speakingProficiency: req.body.LANG_speakingProficiency,
                        LANG_addJustification: req.body.LANG_addJustification
                    }
                },
                medicalProfile: {
                    MP_vitalRates: {
                        VR_bloodPressure: req.body.VR_bloodPressure,
                        VR_breathingAverage: req.body.VR_breathingAverage,
                        VR_pulseAverage: req.body.VR_pulseAverage
                    },
                    MP_bloodGroup: req.body.MP_bloodGroup,
                    MP_physicalProperties: {
                        PP_hipSize: req.body.PP_hipSize,
                        PP_wristSize: req.body.PP_wristSize,
                        PP_height: req.body.PP_height,
                        PP_weight: req.body.PP_weight,
                        PP_eyeGlasses: req.body.PP_eyeGlasses,
                        PP_rightEyeOptometry: req.body.PP_rightEyeOptometry,
                        PP_leftEyeOptometry: req.body.PP_leftEyeOptometry
                    },
                    MP_regularHabits: {
                        RH_eatFruits: req.body.RH_eatFruits,
                        RH_eatVegetables: req.body.RH_eatVegetables,
                        RH_eatChicken: req.body.RH_eatChicken,
                        RH_eatMeats: req.body.RH_eatMeats,
                        RH_smoke: req.body.RH_smoke,
                        RH_drinkAlchole: req.body.RH_drinkAlchole,
                        RH_takeDrugs: req.body.RH_takeDrugs,
                        RH_effortWithinWork: req.body.RH_effortWithinWork,
                        RH_effortWithinFootwork: req.body.RH_effortWithinFootwork,
                        RH_effortWithinVacations: req.body.RH_effortWithinVacations
                    },
                    //     MP_tattoo: req.body.MP_tattoo,
                    //     MP_chronicDiseases: {
                    //         CHR_diseases: req.body.CHR_diseases,
                    //         CHR_dengrouseDiseasesAndPreviousSurgeries: req.body.CHR_dengrouseDiseasesAndPreviousSurgeries
                    //     },
                    //     MP_currentMedicines: {
                    //         CM_medicine: req.body.CM_medicine,
                    //         CM_vaccinations: req.body.CM_vaccinations
                    //     },
                    //     MP_allergy: {
                    //         ALL_allergyOfFood: req.body.ALL_allergyOfFood,
                    //         ALL_allergyOfMedicine: req.body.ALL_allergyOfMedicine,
                    //         ALL_allergyOfMaterial: req.body.ALL_allergyOfMaterial
                    //     },
                    //     MP_diseasesOfFamily: req.body.MP_diseasesOfFamily,
                    //     MP_statusOfPhysicalAndMental: req.body.MP_statusOfPhysicalAndMental
                    // },
                    // socialInsurance: {
                    //     INS_type: req.body.type,
                    //     INS_insuranceNumber: req.body.INS_insuranceNumber,
                    //     INS_dateOfRegistryCertificate: req.body.INS_dateOfRegistryCertificate,
                    //     INS_numberOfRegistryCertificate: req.body.INS_numberOfRegistryCertificate,
                    //     INS_numberOfHealthInsurance: req.body.INS_numberOfHealthInsurance,
                    //     INS_uploadCopy: req.body.INS_uploadCopy
                    // },
                    // syndicate: {
                    //     SY_syndicateName: req.body.SY_syndicateName,
                    //     SY_name: req.body.SY_name,
                    //     SY_licencingNumber: req.body.SY_licencingNumber,
                    //     SY_registryDate: req.body.SY_registryDate,
                    //     SY_lastYearDischarge: req.body.SY_lastYearDischarge,
                    //     SY_expirationDate: req.body.SY_expirationDate,
                    //     SY_typeOfSpecialization: req.body.SY_typeOfSpecialization,
                    //     SY_branchUnion: req.body.SY_branchUnion,
                    //     SY_uploadCopy: req.body.SY_uploadCopy
                    // },
                    // careerInterests: {
                    //     CI_minimumSalaryWouldBeAccepted: req.body.CI_minimumSalaryWouldBeAccepted,
                    //     CI_currentCareerLevel: req.body.CI_currentCareerLevel,
                    //     CI_typesOfJobAreBeOpenedTo: req.body.CI_typesOfJobAreBeOpenedTo,
                    //     CI_jobRolesAreBeInteresetedIn: req.body.CI_jobRolesAreBeInteresetedIn,
                    //     CI_countriesAndCitiesToBeWorkedIn: req.body.CI_countriesAndCitiesToBeWorkedIn,
                    //     CI_currentJobSearchStatus: req.body.CI_currentJobSearchStatus
                    // },
                    // careerHistory: {
                    //     CH_companyName: req.body.CH_companyName,
                    //     CH_position: req.body.CH_position,
                    //     CH_startDate: req.body.CH_startDate,
                    //     CH_endDate: req.body.CH_endDate,
                    //     CH_reasonOfLeaving: req.body.CH_reasonOfLeaving,
                    //     CH_yearsOfExperience: req.body.CH_yearsOfExperience
                    // },
                    // appearance: {
                    //     APP_bodyType: req.body.APP_bodyType,
                    //     APP_hairType: req.body.APP_hairType,
                    //     APP_hairColor: req.body.APP_hairColor,
                    //     APP_height: req.body.APP_height,
                    //     APP_weight: req.body.APP_weight,
                    //     APP_specialMark: req.body.APP_specialMark,
                    //     APP_eyeColor: req.body.APP_eyeColor
                    // },
                    // sizes: {
                    //     SZ_clothSize: req.body.SZ_clothSize,
                    //     SZ_pantsSize: req.body.SZ_pantsSize,
                    //     SZ_hatSize: req.body.SZ_hatSize,
                    //     SZ_shoesSize: req.body.SZ_shoesSize
                    // },
                    // deathData: {
                    //     DD_name: req.body.name,
                    //     DD_gender: req.body.DD_gender,
                    //     DD_nationality: req.body.DD_nationality,
                    //     DD_motherName: req.body.DD_motherName,
                    //     DD_maritalStatus: req.body.DD_maritalStatus,
                    //     DD_deathDate: req.body.DD_deathDate,
                    //     DD_deathPlace: req.body.DD_deathPlace,
                    //     DD_ageAtDeath: req.body.DD_ageAtDeath,
                    //     DD_birthPlace: req.body.DD_birthPlace
                    // },
                    // activities: {
                    //     ACT_sportType: req.body.ACT_sportType,
                    //     ACT_chievement: req.body.ACT_chievement,
                    //     ACT_numberOfMedals: req.body.ACT_numberOfMedals,
                    //     ACT_copyOfCerticates: req.body.ACT_copyOfCerticates,
                    //     ACT_hobbies: req.body.ACT_hobbies
                    // },
                    // healthCertificate: {
                    //     HC_startDate: req.body.HC_startDate,
                    //     HC_endDate: req.body.HC_endDate,
                    //     HC_fullName: req.body.HC_fullName,
                    //     HC_job: req.body.HC_job,
                    //     HC_birthDateAndAge: req.body.HC_birthDateAndAge,
                    //     HC_familyID: req.body.HC_familyID,
                    //     HC_withDate: req.body.HC_withDate,
                    //     HC_civilRegister: req.body.HC_civilRegister,
                    //     HC_result: req.body.HC_result,
                    //     HC_uploadCopy: req.body.HC_uploadCopy
                    // },
                    // financialStatus: req.body.financialStatus,
                    // socialMediaAccounts: {
                    //     facebook: req.body.facebook,
                    //     instagram: req.body.instagram,
                    //     whatsapp: req.body.whatsapp,
                    //     twitter: req.body.twitter,
                    //     linkedin: req.body.linkedin,
                    //     Behance: req.body.Behance,
                    //     GitHub: req.body.GitHub,
                    //     StackOverflow: req.body.StackOverflow,
                    //     Blog: req.body.Blog,
                    //     Website: req.body.Website,
                    //     Other: req.body.Other
                    // },
                    // bodyMeasures: {
                    //     female: {
                    //         F_neckRotation: req.body.F_neckRotation,
                    //         F_bustRotation: req.body.F_bustRotation,
                    //         F_bustHeight: req.body.F_bustHeight,
                    //         F_armRotation: req.body.F_armRotation,
                    //         F_wristRotation: req.body.F_wristRotation,
                    //         F_waistRotation: req.body.F_waistRotation,
                    //         F_hipHeight: req.body.F_hipHeight,
                    //         F_hipRotation: req.body.F_hipRotation,
                    //         F_shoulderLength: req.body.F_shoulderLength,
                    //         F_backHeight: req.body.F_backHeight,
                    //         F_sleeveLength: req.body.sF_leeveLength
                    //     },
                    //     male: {
                    //         M_shoulderLength: req.body.M_shoulderLength,
                    //         M_chestRotation: req.body.M_chestRotation,
                    //         M_sleeveLength: req.body.M_sleeveLength,
                    //         M_neckRotation: req.body.M_neckRotation,
                    //         M_waistRotation: req.body.M_waistRotation,
                    //         M_hipHeight: req.body.M_hipHeight,
                    //         M_hipRotation: req.body.M_hipRotation
                    //     }
                    // },
                    // disabilities: {
                    //     disabilityType: req.body.disabilityType,
                    //     missingParts: req.body.missingParts
                    // }
                }
            }
        });
        newClient.save(() => {
            res.redirect(302, '/index')
        });
        Log.create({
            statement: 'User: ' + req.user.userName + ' entered /data-ar[POST] to add new client with ID: ' + req.body._id +
                ' and name :' + req.body.PI_firstName + ' ' + req.body.PI_secondName,
            user: req.user.userName
        });
    })

    router.get('/personalInf', function(req, res, next) {
        if (!req.user == false) {
            let data = {}
                // get data from database
            DraftPersonal.find({ user: req.user.userName }).then(records => {
                if (records.length > 0) {
                    data.draft = records[0];
                    Country.find({}).then(countries => {
                        data.countries = countries
                        maritalStatus.find({}).then(maritalstatus => {
                            data.maritalstatus = maritalstatus;
                            Title.find({}).then(titles => {
                                data.titles = titles
                                res.render('personalInf-draft', data) // at the end
                            })
                        })
                    })
                } else {
                    Country.find({}).then(countries => {
                        data.countries = countries
                        maritalStatus.find({}).then(maritalstatus => {
                            data.maritalstatus = maritalstatus;
                            Title.find({}).then(titles => {
                                data.titles = titles
                                res.render('personalInf', data) // at the end
                            })
                        })
                    })
                }
            })
        } else {
            res.redirect(302, '/login');
        }
    })

    router.post('/personalInf/draft', (req, res) => {
        const field = req.body.field;
        const value = req.body.value;
        var query = { user: req.user.userName },
            update = {
                [field]: value
            },
            options = { upsert: true, new: true, setDefaultsOnInsert: true };
        // Find the document
        DraftPersonal.findOneAndUpdate(query, update, options, function(error, result) {
            if (error) return;
            // do something with the document
            res.end();
        })
    })

    router.post('/personalInf', (req, res) => {
        DraftPersonal.deleteOne({ user: req.user.userName }).then(resolve => {});
        var newClient = new Client({
            _id: req.body._id,
            personalInformation: {
                PI_firstName: req.body.PI_firstName,
                PI_secondName: req.body.PI_secondName,
                PI_thirdName: req.body.PI_thirdName,
                PI_fourthName: req.body.PI_fourthName,
                PI_lastName: req.body.PI_lastName,
                PI_title: req.body.PI_title,
                PI_gender: req.body.PI_gender,
                PI_nationality: req.body.PI_nationality,
                PI_maritalStatus: req.body.PI_maritalStatus
            }
        });
        newClient.save(() => {
            res.redirect(302, '/index')
        });
        Log.create({
            statement: 'User: ' + req.user.userName + ' entered /personalInfo[POST] to add new client with name :' + req.body.PI_firstName + ' ' + req.body.PI_secondName,
            user: req.user.userName
        });
    });
};