const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../models/users');
const Admin = require('../models/admin');
const config = require('../config/database');

// To authtenticate the User by JWT Startegy
module.exports = (userType, passport) => {
    let opts = {};
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt');
    opts.secretOrKey = config.secret;
    passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
        if (userType == 'admin') {
            Admin.getAdminById(jwt_payload.data._id, (err, user) => {
                if (err) return done(err, false);
                if (user) return done(null, user);
                return done(null, false);
            });
        }
        if (userType == 'users') {
            User.getUserById(jwt_payload.data._id, (err, user) => {
                if (err) return done(err, false);
                if (user) return done(null, user);
                return done(null, false);
            });
        }
    }));
}
















/* var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/users');
module.exports = function(passport) {
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });
    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
            done(err, user);
        });
    });

    passport.use('local-signup', new LocalStrategy({
            usernameField: 'userName',
            passwordField: 'password',
            passReqToCallback: true,

        },
        function(req, userName, password, done) {
            process.nextTick(function() {
                User.findOne({ 'userName': userName }, function(err, user) {
                    if (err)
                        return done(err);
                    if (user) {
                        return done(null, false, req.flash('signupMessage', 'Username already taken'));
                    } else {
                        var newUser = new User();
                        newUser.userName = userName;
                        newUser.password = newUser.generateHash(password);

                        newUser.save(function(err) {
                            if (err)
                                throw err;
                            return done(null, newUser);
                        })
                    }
                })
            });
        }));

    passport.use('local-login', new LocalStrategy({
            usernameField: 'userName',
            passwordField: 'password',
            passReqToCallback: true,

        },
        function(req, userName, password, done) {
            process.nextTick(function() {
                User.findOne({ 'userName': userName }, function(err, user) {
                    if (err)
                        return done(err);
                    if (!user)
                        return done(null, false, req.flash('loginMessage', 'No User found'));
                    if (!user.validPassword(password)) {
                        return done(null, false, req.flash('loginMessage', 'inavalid password'));
                    }
                    return done(null, user);
                });
            });
        }
    ));
} */