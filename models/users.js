var timestamps = require('mongoose-timestamp');
var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

var User = mongoose.Schema({
    userName: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});
//Schema methods
User.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(9), null);
};

User.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};
module.exports = mongoose.model('user', User);