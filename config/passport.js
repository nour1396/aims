var LocalStrategy = require('passport-local').Strategy;
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
}