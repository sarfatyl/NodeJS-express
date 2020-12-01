// Authentication using email and password
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const users = require('../consts/users-list');
const bcrypt = require('bcrypt');

passport.use(new LocalStrategy({
        usernameField: 'email',
    }, async function (email, password, done) {
        const user = users.find(function (user) {
            return user.email === email
        });
        if (!user) done(null, false);
        const isPasswordMatch = await bcrypt.compare(password, user.password)
        if (isPasswordMatch) {
            done(null, user);
        } else {
            done(null, false);
        }
    }
))
