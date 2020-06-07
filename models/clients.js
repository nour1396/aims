var timestamps = require('mongoose-timestamp');
var mongoose = require('mongoose');
var mongooseValidator = require('mongoose-validate');
var clientSchema = mongoose.Schema({
    _id: {
        type: Number,
        require: true
    },
    personalInformation: {
        PI_firstName: {
            type: String,
            /*  required: true,
             lowercase: true,
             trim: true,
             minLength: [4, 'Name is too short!'],
             maxLength: 10,
             validate: [{
                 validator: function(n) {
                     prevent = /[`!@#&^&()_+\-=\[\]{};':"\\|,.<>\/?~]/
                     return !prevent.test(n);
                 },
                 message: 'Invalid Name , name should not $@#%#^$#'
             }, {
                 validator: function(n) {
                     return n.length >= 4 && n.length < 10;
                 },
                 message: 'Invalid Name , name should contain from 4 to 10 charcters  b'
             }] */
        },
        PI_secondName: {
            type: String,
            /*    required: true,
               lowercase: true,
               trim: true,
               minLength: [4, 'Name is too short!'],
               maxLength: 10,
               validate: [{
                   validator: function(n) {
                       prevent = /[`!@#&^&()_+\-=\[\]{};':"\\|,.<>\/?~]/
                       return !prevent.test(n);
                   },
                   message: 'Invalid Name , name should not $@#%#^$#'
               }, {
                   validator: function(n) {
                       return n.length >= 4 && n.length < 10;
                   },
                   message: 'Invalid Name , name should contain from 4 to 10 charcters  b'
               }] */
        },
        PI_thirdName: {
            type: String,
            /* required: true,
            lowercase: true,
            trim: true,
            minLength: [4, 'Name is too short!'],
            maxLength: 10,
            validate: [{
                validator: function(n) {
                    prevent = /[`!@#&^&()_+\-=\[\]{};':"\\|,.<>\/?~]/
                    return !prevent.test(n);
                },
                message: 'Invalid Name , name should not $@#%#^$#'
            }, {
                validator: function(n) {
                    return n.length >= 4 && n.length < 10;
                },
                message: 'Invalid Name , name should contain from 4 to 10 charcters  b'
            }] */
        },
        PI_fourthName: {
            type: String,
            /*  required: true,
             lowercase: true,
             trim: true,
             minLength: [4, 'Name is too short!'],
             maxLength: 10,
             validate: [{
                 validator: function(n) {
                     prevent = /[`!@#&^&()_+\-=\[\]{};':"\\|,.<>\/?~]/
                     return !prevent.test(n);
                 },
                 message: 'Invalid Name , name should not $@#%#^$#'
             }, {
                 validator: function(n) {
                     return n.length >= 4 && n.length < 10;
                 },
                 message: 'Invalid Name , name should contain from 4 to 10 charcters  b'
             }] */
        },
        PI_lastName: {
            type: String,
            /*    required: true,
               lowercase: true,
               trim: true,
               minLength: [4, 'Name is too short!'],
               maxLength: 10,
               validate: [{
                   validator: function(n) {
                       prevent = /[`!@#&^&()_+\-=\[\]{};':"\\|,.<>\/?~]/
                       return !prevent.test(n);
                   },
                   message: 'Invalid Name , name should not $@#%#^$#'
               }, {
                   validator: function(n) {
                       return n.length >= 4 && n.length < 10;
                   },
                   message: 'Invalid Name , name should contain from 4 to 10 charcters  b'
               }] */
        },
        PI_title: {
            type: String,
            lowercase: true,
        },
        PI_gender: {
            type: String,
            lowercase: true,
        },
        PI_nationality: {
            type: String,
            lowercase: true,
        },
        PI_maritalStatus: {
            type: String,
            lowercase: true,
        }
    },
    identityCard: {
        IC_idNumber: {
            type: String,
            /* unique: true,
            validate: [{
                    validator: function(v) {
                        prevent = /^[0-9]*$/im
                        return prevent.test(v);
                    },
                    message: 'it is not a valid id number!'
                },
                {
                    validator: function(v) {
                        return v.length === 14;
                    },
                    message: 'it is not 14 number!'
                }
            ] */
        },
        IC_issuedFrom: String,
        IC_startDate: {
            type: String,
            /* unique: true,
            validate: [{
                validator: function(n) {
                    prevent = /^\d{2}[./-]\d{2}[./-]\d{4}$/
                    return prevent.test(n);
                },
                message: 'Invalid date'
            }] */
        },
        IC_endDate: {
            type: String,
            /* unique: true,
            validate: [{
                validator: function(n) {
                    prevent = /^\d{2}[./-]\d{2}[./-]\d{4}$/
                    return prevent.test(n);
                },
                message: 'Invalid date'
            }] */
        },
        IC_fullName: String,
        IC_gender: String,
        IC_address: String,
        IC_religion: String,
        IC_idMaritalStatus: String,
        IC_job: String,
        IC_husbandName: String,
        IC_uploadId: String
    },
    militaryState: {
        MS_fullName: String,
        MS_birthDate: {
            type: String,
            /* unique: true,
            validate: [{
                validator: function(n) {
                    prevent = /^\d{2}[./-]\d{2}[./-]\d{4}$/
                    return prevent.test(n);
                },
                message: 'Invalid date'
            }] */
        },
        MS_militaryServiceIDTriple: Number,
        MS_issuedFrom: String,
        MS_idNumber: {
            type: String,
            /* unique: true,
            validate: [{
                    validator: function(v) {
                        prevent = /^[0-9]*$/im
                        return prevent.test(v);
                    },
                    message: 'it is not a valid id number!'
                },
                {
                    validator: function(v) {
                        return v.length === 14;
                    },
                    message: 'it is not 14 number!'
                }
            ] */
        },
        MS_IDIssuedFrom: String,
        MS_decisionCode: String,
        MS_decisionDate: {
            type: String,
            /* unique: true,
            validate: [{
                validator: function(n) {
                    prevent = /^\d{2}[./-]\d{2}[./-]\d{4}$/
                    return prevent.test(n);
                },
                message: 'Invalid date'
            }] */
        },
        MS_decisionNumber: Number,
        MS_decision: String,
        MS_uploadMilitary: String
    }
    /* ,
        familyStatus: {
            FS_numberOfFamilyMembers: Number,
            FS_numberOfChildrenMales: Number,
            FS_numberOfChildrenFemales: Number,
            FS_numberOfWifes: Number,
            FS_parentStatus: String
        },
        birthDetails: {
            BD_nationalNumber: {
                type: String,
                unique: true,
                validate: [{
                        validator: function(v) {
                            prevent = /^[0-9]*$/im
                            return prevent.test(v);
                        },
                        message: 'it is not a valid id number!'
                    },
                    {
                        validator: function(v) {
                            return v.length === 14;
                        },
                        message: 'it is not 14 number!'
                    }
                ]
            },
            BD_fullNameInEnglish: String,
            BD_fullNameInArabic: String,
            BD_nationality: String,
            BD_placeOfBirth: String,
            BD_religion: String,
            BD_gender: String,
            BD_dateOfBirth: {
                type: String,
                unique: true,
                validate: [{
                    validator: function(n) {
                        prevent = /^\d{2}[./-]\d{2}[./-]\d{4}$/
                        return prevent.test(n);
                    },
                    message: 'Invalid date'
                }]
            },
            BD_fullFatherName: String,
            BD_hisReligion: String,
            BD_hisNationality: String,
            BD_fullMotherName: String,
            BD_herReligion: String,
            BD_herNationality: String,
            BD_civilRegister: String,
            BD_issueRegister: String,
            BD_registerDate: {
                type: String,
                unique: true,
                validate: [{
                    validator: function(n) {
                        prevent = /^\d{2}[./-]\d{2}[./-]\d{4}$/
                        return prevent.test(n);
                    },
                    message: 'Invalid date'
                }]
            },
            BD_issueDate: {
                type: String,
                unique: true,
                validate: [{
                    validator: function(n) {
                        prevent = /^\d{2}[./-]\d{2}[./-]\d{4}$/
                        return prevent.test(n);
                    },
                    message: 'Invalid date'
                }]
            },
            BD_uploadCopy: String

        },
        addressDetails: {
            AD_addressType: String,
            AD_expirationDateOfRenting: {
                type: String,
                unique: true,
                validate: [{
                    validator: function(n) {
                        prevent = /^\d{2}[./-]\d{2}[./-]\d{4}$/
                        return prevent.test(n);
                    },
                    message: 'Invalid date'
                }]
            },
            AD_country: String,
            AD_city: String,
            AD_area: String,
            AD_realEstateType: String,
            AD_realEstateNumber: Number,
            AD_floorNumber: Number,
            AD_appartmentNumber: Number,
            AD_streetName: String,
            AD_detailedAddress: String,
            AD_owns: String
        },
        legalInformation: {
            drivingLicence: {
                DL_trafficUnit: String,
                DL_ID: {
                    type: String,
                    unique: true,
                    validate: [{
                            validator: function(v) {
                                prevent = /^[0-9]*$/im
                                return prevent.test(v);
                            },
                            message: 'it is not a valid id number!'
                        },
                        {
                            validator: function(v) {
                                return v.length === 14;
                            },
                            message: 'it is not 14 number!'
                        }
                    ]
                },
                DL_address: String,
                DL_nationality: String,
                DL_issueDate: {
                    type: String,
                    unique: true,
                    validate: [{
                        validator: function(n) {
                            prevent = /^\d{2}[./-]\d{2}[./-]\d{4}$/
                            return prevent.test(n);
                        },
                        message: 'Invalid date'
                    }]
                },
                DL_endDate: {
                    type: String,
                    unique: true,
                    validate: [{
                        validator: function(n) {
                            prevent = /^\d{2}[./-]\d{2}[./-]\d{4}$/
                            return prevent.test(n);
                        },
                        message: 'Invalid date'
                    }]
                },
                DL_job: String,
                DL_typeOfLicence: String,
                DL_licenceNumber: Number,
                DL_typeOfVehicle: String,
                DL_wearingGlasses: String,
                DL_copyOfLicence: String
            },
            internationalDrivingLicence: {
                IDL_name: String,
                IDL_address: String,
                IDL_placeOfBirth: String,
                IDL_dateOfBirth: {
                    type: String,
                    unique: true,
                    validate: [{
                        validator: function(n) {
                            prevent = /^\d{2}[./-]\d{2}[./-]\d{4}$/
                            return prevent.test(n);
                        },
                        message: 'Invalid date'
                    }]
                },
                IDL_height: String,
                IDL_gender: String,
                IDL_eyesColor: String,
                IDL_bloodGroup: String,
                IDL_passportNumber: Number,
                IDL_classCategory: String,
                IDL_licenceType: String,
                IDL_issuedDate: {
                    type: String,
                    unique: true,
                    validate: [{
                        validator: function(n) {
                            prevent = /^\d{2}[./-]\d{2}[./-]\d{4}$/
                            return prevent.test(n);
                        },
                        message: 'Invalid date'
                    }]
                },
                IDL_expireDate: {
                    type: String,
                    unique: true,
                    validate: [{
                        validator: function(n) {
                            prevent = /^\d{2}[./-]\d{2}[./-]\d{4}$/
                            return prevent.test(n);
                        },
                        message: 'Invalid date'
                    }]
                },
                IDL_category: String,
                IDL_uploadCopy: String
            },
            passport: {
                P_passportNumber: Number,
                P_militaryStatus: String,
                P_passportType: String,
                P_passportCountry: String,
                P_issuedAt: String,
                P_issueDate: {
                    type: String,
                    unique: true,
                    validate: [{
                        validator: function(n) {
                            prevent = /^\d{2}[./-]\d{2}[./-]\d{4}$/
                            return prevent.test(n);
                        },
                        message: 'Invalid date'
                    }]
                },
                P_endDate: {
                    type: String,
                    unique: true,
                    validate: [{
                        validator: function(n) {
                            prevent = /^\d{2}[./-]\d{2}[./-]\d{4}$/
                            return prevent.test(n);
                        },
                        message: 'Invalid date'
                    }]
                },
                P_profession: String,
                P_issueOffice: String,
                P_copyOfPassport: String
            },
            visa: {
                V_typeOfVisa: String,
                V_validFor: String,
                V_periodValidity: {
                    V_periodValidity_From: {
                        type: String,
                        unique: true,
                        validate: [{
                            validator: function(n) {
                                prevent = /^\d{2}[./-]\d{2}[./-]\d{4}$/
                                return prevent.test(n);
                            },
                            message: 'Invalid date'
                        }]
                    },
                    V_periodValidity_To: Date
                },
                V_numberOfEntries: Number,
                V_durationOfStay: Number,
                V_profession: String,
                V_religion: String,
                V_nationality: String,
                V_issuingAuthority: String,
                V_issuedDate: {
                    type: String,
                    unique: true,
                    validate: [{
                        validator: function(n) {
                            prevent = /^\d{2}[./-]\d{2}[./-]\d{4}$/
                            return prevent.test(n);
                        },
                        message: 'Invalid date'
                    }]
                },
                V_expirationDate: {
                    type: String,
                    unique: true,
                    validate: [{
                        validator: function(n) {
                            prevent = /^\d{2}[./-]\d{2}[./-]\d{4}$/
                            return prevent.test(n);
                        },
                        message: 'Invalid date'
                    }]
                },
                V_purpose: String,
                V_transporter: String,
                V_passportNumber: Number,
                V_firstName: String,
                V_lastName: String,
                V_remarks: String
            },
            residencePermit: {
                RP_typeOfResidencePermit: String,
                RP_fullName: String,
                RP_numberOfResidencePermit: Number,
                RP_issuedPlace: String,
                RP_issuedDate: {
                    type: String,
                    unique: true,
                    validate: [{
                        validator: function(n) {
                            prevent = /^\d{2}[./-]\d{2}[./-]\d{4}$/
                            return prevent.test(n);
                        },
                        message: 'Invalid date'
                    }]
                },
                RP_expirationDate: {
                    type: String,
                    unique: true,
                    validate: [{
                        validator: function(n) {
                            prevent = /^\d{2}[./-]\d{2}[./-]\d{4}$/
                            return prevent.test(n);
                        },
                        message: 'Invalid date'
                    }]
                },
                RP_birthDate: {
                    type: String,
                    unique: true,
                    validate: [{
                        validator: function(n) {
                            prevent = /^\d{2}[./-]\d{2}[./-]\d{4}$/
                            return prevent.test(n);
                        },
                        message: 'Invalid date'
                    }]
                },
                RP_profession: String,
                RP_nationality: String,
                RP_religion: String,
                RP_employerSponser: String,
                RP_accompaniedBy: String,
                RP_copyOfResidencePermit: String
            },
            sponserInformation: {
                SI_name: String,
                SI_id: String,
                SI_mobileNumber: Number,
                SI_workPlace: String,
                SI_contractName: String,
                SI_contractNumber: Number,
                SI_licenceNumber: Number,
                SI_issuedDate: {
                    type: String,
                    unique: true,
                    validate: [{
                        validator: function(n) {
                            prevent = /^\d{2}[./-]\d{2}[./-]\d{4}$/
                            return prevent.test(n);
                        },
                        message: 'Invalid date'
                    }]
                },
                SI_expirationDate: {
                    type: String,
                    unique: true,
                    validate: [{
                        validator: function(n) {
                            prevent = /^\d{2}[./-]\d{2}[./-]\d{4}$/
                            return prevent.test(n);
                        },
                        message: 'Invalid date'
                    }]
                },
                SI_country: String,
                SI_city: String
            },
            policeRecordsCertificate: {
                PC_fullName: String,
                PC_gender: String,
                PC_IDNumber: String,
                PC_from: String,
                PC_address: String,
                PC_presentedTo: String,
                PC_transactionNumber: Number,
                PC_dateOfIssue: {
                    type: String,
                    unique: true,
                    validate: [{
                        validator: function(n) {
                            prevent = /^\d{2}[./-]\d{2}[./-]\d{4}$/
                            return prevent.test(n);
                        },
                        message: 'Invalid date'
                    }]
                },
                PC_resultOfInspection: String,
                PC_ifAnyMentionIt: String,
                PC_uploadCopy: String
            }
        },
        bankAccount: {
            BA_accountType: String,
            BA_accountNumber: Number,
            BA_bankName: String,
            BA_currency: String,
            BA_branch: String
        },
        contactData: {
            CD_telephoneNumber: {
                type: Number,
                required: [true, 'What is your telephone Number?'],
                validate: [{
                    validator: function(v) {
                        prevent = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
                        return prevent.test(v);
                    },
                    message: 'it is not a valid telephone number!'
                }]
            },
            CD_mobileNumber: {
                type: Number,
                required: [true, 'What is your mobile Number?'],
                validate: [{
                    validator: function(v) {
                        prevent = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
                        return prevent.test(v);
                    },
                    message: 'it is not a valid phone number!'
                }]
            },
            CD_postalCode: String,
            CD_email: {
                type: String,
                required: true,
                lowercase: true,
                validate: {
                    validator: function(v) {
                        prevent = /^(([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5}){1,25})+([;.](([a-zA-Z0-9_\-\.]+)@{[a-zA-Z0-9_\-\.]+0\.([a-zA-Z]{2,5}){1,25})+)*$/;
                        return prevent.test(v);
                    },
                    message: 'it is not a valid phone number!'
                }
            },
            CD_contactLanguage: String,
            CD_nativeLanguage: String,
            CD_spokenLanguage: String
        },
        Education: {
            E_lastDegreeLevel: String,
            university: {
                UNI_universtyName: String,
                UNI_facultyName: String,
                UNI_degreeLevel: String,
                UNI_department: String,
                UNI_grade: String,
                UNI_graduateDate: {
                    type: String,
                    unique: true,
                    validate: [{
                        validator: function(n) {
                            prevent = /^\d{2}[./-]\d{2}[./-]\d{4}$/
                            return prevent.test(n);
                        },
                        message: 'Invalid date'
                    }]
                },
                UNI_copyOfCertificate: String
            },
            secondrySchool: {
                SEC_schoolType: String,
                SEC_secondrySchoolName: String,
                SEC_grade: String,
                SEC_graduateDate: {
                    type: String,
                    unique: true,
                    validate: [{
                        validator: function(n) {
                            prevent = /^\d{2}[./-]\d{2}[./-]\d{4}$/
                            return prevent.test(n);
                        },
                        message: 'Invalid date'
                    }]
                },
                SEC_copyOfCertificate: String
            },
            middleSchool: {
                MIDD_typeOfSchool: String,
                MIDD_schoolName: String,
                MIDD_grade: String,
                MIDD_graduateDate: {
                    type: String,
                    unique: true,
                    validate: [{
                        validator: function(n) {
                            prevent = /^\d{2}[./-]\d{2}[./-]\d{4}$/
                            return prevent.test(n);
                        },
                        message: 'Invalid date'
                    }]
                },
                MIDD_copyOfCertificate: String
            },
            primarySchool: {
                PRIM_schoolType: String,
                PRIM_schoolName: String,
                PRIM_grade: String,
                PRIM_graduateDate: {
                    type: String,
                    unique: true,
                    validate: [{
                        validator: function(n) {
                            prevent = /^\d{2}[./-]\d{2}[./-]\d{4}$/
                            return prevent.test(n);
                        },
                        message: 'Invalid date'
                    }]
                },
                PRIM_copyOfCertificate: String

            },
            trainingAndCourses: {
                TAC_trainingTopic: String,
                TAC_organizationOrinstitutionName: String,
                TAC_month: String,
                TAC_year: String,
                TAC_additionalInformation: String
            },
            skills: {
                SK_skillName: String,
                SK_proficiency: String,
                SK_interest: String,
                SK_yearsOfExperience: String,
                SK_addJustification: String
            },
            languages: {
                LANG_language: String,
                LANG_readingProficiency: String,
                LANG_writingProficiency: String,
                LANG_listeningProficiency: String,
                LANG_speakingProficiency: String,
                LANG_addJustification: String
            }
        },
        medicalProfile: {
            MP_vitalRates: {
                VR_bloodPressure: String,
                VR_breathingAverage: String,
                VR_pulseAverage: String,
            },
            MP_bloodGroup: String,
            MP_physicalProperties: {
                PP_hipSize: String,
                PP_wristSize: String,
                PP_height: String,
                PP_weight: String,
                PP_eyeGlasses: String,
                PP_rightEyeOptometry: String,
                PP_leftEyeOptometry: String
            },
            MP_regularHabits: {
                RH_eatFruits: Boolean,
                RH_eatVegetables: Boolean,
                RH_eatChicken: Boolean,
                RH_eatMeats: Boolean,
                RH_smoke: Boolean,
                RH_drinkAlchole: Boolean,
                RH_takeDrugs: Boolean,
                RH_effortWithinWork: String,
                RH_effortWithinFootwork: String,
                RH_effortWithinVacations: String
            },
            MP_tattoo: Boolean,
            MP_chronicDiseases: {
                CHR_diseases: String,
                CHR_dengrouseDiseasesAndPreviousSurgeries: String
            },
            MP_currentMedicines: {
                CM_medicine: String,
                CM_vaccinations: String
            },
            MP_allergy: {
                ALL_allergyOfFood: String,
                ALL_allergyOfMedicine: String,
                ALL_allergyOfMaterial: String
            },
            MP_diseasesOfFamily: String,
            MP_statusOfPhysicalAndMental: String
        },
        socialInsurance: {
            INS_type: String,
            INS_insuranceNumber: Number,
            INS_dateOfRegistryCertificate: {
                type: String,
                unique: true,
                validate: [{
                    validator: function(n) {
                        prevent = /^\d{2}[./-]\d{2}[./-]\d{4}$/
                        return prevent.test(n);
                    },
                    message: 'Invalid date'
                }]
            },
            INS_numberOfRegistryCertificate: Number,
            INS_numberOfHealthInsurance: Number,
            INS_uploadCopy: String
        },
        syndicate: {
            SY_syndicateName: String,
            SY_name: String,
            SY_licencingNumber: Number,
            SY_registryDate: {
                type: String,
                unique: true,
                validate: [{
                    validator: function(n) {
                        prevent = /^\d{2}[./-]\d{2}[./-]\d{4}$/
                        return prevent.test(n);
                    },
                    message: 'Invalid date'
                }]
            },
            SY_lastYearDischarge: String,
            SY_expirationDate: String,
            SY_typeOfSpecialization: String,
            SY_branchUnion: String,
            SY_uploadCopy: String
        },
        careerInterests: {
            CI_minimumSalaryWouldBeAccepted: String,
            CI_currentCareerLevel: String,
            CI_typesOfJobAreBeOpenedTo: String,
            CI_jobRolesAreBeInteresetedIn: String,
            CI_countriesAndCitiesToBeWorkedIn: String,
            CI_currentJobSearchStatus: String
        },
        careerHistory: {
            CH_companyName: String,
            CH_position: String,
            CH_startDate: {
                type: String,
                unique: true,
                validate: [{
                    validator: function(n) {
                        prevent = /^\d{2}[./-]\d{2}[./-]\d{4}$/
                        return prevent.test(n);
                    },
                    message: 'Invalid date'
                }]
            },
            CH_endDate: {
                type: String,
                unique: true,
                validate: [{
                    validator: function(n) {
                        prevent = /^\d{2}[./-]\d{2}[./-]\d{4}$/
                        return prevent.test(n);
                    },
                    message: 'Invalid date'
                }]
            },
            CH_reasonOfLeaving: String,
            CH_yearsOfExperience: String
        },
        appearance: {
            APP_bodyType: String,
            APP_hairType: String,
            APP_hairColor: String,
            APP_height: String,
            APP_weight: String,
            APP_specialMark: String,
            APP_eyeColor: String
        },
        sizes: {
            SZ_clothSize: String,
            SZ_pantsSize: String,
            SZ_hatSize: String,
            SZ_shoesSize: String
        },
        deathData: {
            DD_name: String,
            DD_gender: String,
            DD_nationality: String,
            DD_motherName: String,
            DD_maritalStatus: String,
            DD_deathDate: {
                type: String,
                unique: true,
                validate: [{
                    validator: function(n) {
                        prevent = /^\d{2}[./-]\d{2}[./-]\d{4}$/
                        return prevent.test(n);
                    },
                    message: 'Invalid date'
                }]
            },
            DD_deathPlace: String,
            DD_ageAtDeath: String,
            DD_birthPlace: String
        },
        activities: {
            ACT_sportType: String,
            ACT_chievement: String,
            ACT_numberOfMedals: Number,
            ACT_copyOfCerticates: String,
            ACT_hobbies: String
        },
        healthCertificate: {
            HC_startDate: String,
            HC_endDate: String,
            HC_fullName: String,
            HC_job: String,
            HC_birthDateAndAge: String,
            HC_familyID: Number,
            HC_withDate: {
                type: String,
                unique: true,
                validate: [{
                    validator: function(n) {
                        prevent = /^\d{2}[./-]\d{2}[./-]\d{4}$/
                        return prevent.test(n);
                    },
                    message: 'Invalid date'
                }]
            },
            HC_civilRegister: String,
            HC_result: String,
            HC_uploadCopy: String
        },
        financialStatus: String,
        socialMediaAccounts: {
            facebook: {
                type: String,
                validate: [{
                    validator: function(v) {
                        prevent = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi
                        return prevent.test(v);
                    },
                    message: 'it is not a valid website!'
                }]
            },
            instagram: {
                type: String,
                validate: [{
                    validator: function(v) {
                        prevent = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi
                        return prevent.test(v);
                    },
                    message: 'it is not a valid website!'
                }]
            },
            whatsapp: {
                type: String,
                validate: [{
                    validator: function(v) {
                        prevent = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi
                        return prevent.test(v);
                    },
                    message: 'it is not a valid website!'
                }]
            },
            twitter: {
                type: String,
                validate: [{
                    validator: function(v) {
                        prevent = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi
                        return prevent.test(v);
                    },
                    message: 'it is not a valid website!'
                }]
            },
            linkedin: {
                type: String,
                validate: [{
                    validator: function(v) {
                        prevent = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi
                        return prevent.test(v);
                    },
                    message: 'it is not a valid website!'
                }]
            },
            Behance: {
                type: String,
                validate: [{
                    validator: function(v) {
                        prevent = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi
                        return prevent.test(v);
                    },
                    message: 'it is not a valid website!'
                }]
            },
            GitHub: {
                type: String,
                validate: [{
                    validator: function(v) {
                        prevent = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi
                        return prevent.test(v);
                    },
                    message: 'it is not a valid website!'
                }]
            },
            StackOverflow: {
                type: String,
                validate: [{
                    validator: function(v) {
                        prevent = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi
                        return prevent.test(v);
                    },
                    message: 'it is not a valid website!'
                }]
            },
            Blog: {
                type: String,
                validate: [{
                    validator: function(v) {
                        prevent = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi
                        return prevent.test(v);
                    },
                    message: 'it is not a valid website!'
                }]
            },
            Website: {
                type: String,
                validate: [{
                    validator: function(v) {
                        prevent = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi
                        return prevent.test(v);
                    },
                    message: 'it is not a valid website!'
                }]
            },
            Other: {
                type: String,
                validate: [{
                    validator: function(v) {
                        prevent = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi
                        return prevent.test(v);
                    },
                    message: 'it is not a valid website!'
                }]
            }
        },
        bodyMeasures: {
            female: {
                F_neckRotation: String,
                F_bustRotation: String,
                F_bustHeight: String,
                F_armRotation: String,
                F_wristRotation: String,
                F_waistRotation: String,
                F_hipHeight: String,
                F_hipRotation: String,
                F_shoulderLength: String,
                F_backHeight: String,
                F_sleeveLength: String
            },
            male: {
                M_shoulderLength: String,
                M_chestRotation: String,
                M_sleeveLength: String,
                M_neckRotation: String,
                M_waistRotation: String,
                M_hipHeight: String,
                M_hipRotation: String
            }
        },
        disabilities: {
            disabilityType: String,
            missingParts: String
        } */
});
clientSchema.plugin(timestamps)

const Client = mongoose.model('Client', clientSchema);

exports.getAllClients = () => {
    //3mlt promise gdid 3shan anbh function mn barra w aflt el promise 3n tre2 el disconnect
    return new Promise((resolve, reject) => {
        Client.find().then(clients => {
            resolve(clients);
        }).catch(err => reject(err))
    })
}

exports.Client = Client