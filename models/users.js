const timestamps = require('mongoose-timestamp');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },

});

//Schema methods

/* User.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(9), null);
};

User.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
}; */
const User = mongoose.model('users', userSchema);
exports.User = User;