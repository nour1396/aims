const mongoose = require('mongoose');
const fixedAssetSchema = mongoose.Schema({
    assetsClassID: String,
    assetID: String,
    assetDescription: String,
    extendedDescription: String,
    shortName: String,
    masterAssetsID: String,
    accountsGroup: String,
    assetsStatus: String,
    assetsType: String,
    accusationDate: String,
    currencyID: String,
    accusationCost: String,
    quantity: String,
    locationCode: String,
    physicalLocation: String,
    assetsLabel: String,
    structureID: String,
    custodianID: String,
    manufacturerName: String,
    serialNumber: String,
    modelNumber: String,
    modelYear: String,
    warrantyDate: String,
    lastMaintenanceDate: String,
    dateAdded: String,
    accounts: {
        assetsCost: String,
        assetsClearing: String,
        depreciationExpense: String,
        accumulatedDepreciation: String,
        depreciationReserve: String,
        assetsProceeds: String,
        recognizedGainOrLoss: String,
    }

});

const FixedAsset = mongoose.model('fixedassets', fixedAssetSchema);
exports.FixedAsset = FixedAsset;

const FAclass = mongoose.Schema({
    assetsClassID: String,
    assetsClassDescription: String,
    defaultAssetsIdFromClass: String,
    nextAssetsID: String,
    accountsGroupID: String
});

const FixedAssetClass = mongoose.model('fixedassetsclasses', FAclass);
exports.FixedAssetClass = FixedAssetClass;

const FAaccountsGroup = mongoose.Schema({
    assetsAccountsGroups: {
        accountsGroupID: String,
        description: String
    },
    accounts: {
        assetsCost: String,
        assetsClearing: String,
        depreciationExpense: String,
        accumulatedDepreciation: String,
        depreciationReserve: String,
        assetsProceeds: String,
        recognizedGainOrLoss: String
    }
});

const FixedAssetAccountsGroup = mongoose.model('fixedassetsaccountsgroups', FAaccountsGroup);
exports.FixedAssetAccountsGroup = FixedAssetAccountsGroup;