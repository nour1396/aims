const timestamps = require('mongoose-timestamp');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const uniqueValidator = require('mongoose-unique-validator')

var AdminSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        index: true,
        required: true
    },
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true
    },
    job_profile: {
        type: String,
        required: true
    }
});


AdminSchema.plugin(uniqueValidator);
const Admin = module.exports = mongoose.model('admin', AdminSchema);

// Find the admin by ID
module.exports.getAdminById = function(id, callback) {
    Admin.findById(id, callback);
}

// Find the admin by Its username
module.exports.getUserByUsername = function(username, callback) {
    const query = {
        username: username
    }
    Admin.findOne(query, callback);
}

// to Register the admin
module.exports.addAdmin = function(newAdmin, callback) {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newAdmin.password = hash;
            newAdmin.save(callback);
        });
    });
}

// Compare Password
module.exports.comparePassword = function(password, hash, callback) {
    bcrypt.compare(password, hash, (err, isMatch) => {
        if (err) throw err;
        callback(null, isMatch);
    });
}