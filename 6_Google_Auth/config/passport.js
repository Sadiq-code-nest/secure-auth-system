const passport = require('passport');
const User = require('../Models/user-model')
const bcrypt = require('bcrypt');

const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID = "683234054756-lr36408jahga8c0v1h01vvevvs5dcuu0.apps.googleusercontent.com",
    clientSecret: GOOGLE_CLIENT_SECRET = "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",
    callbackURL: "http://localhost:4001/auth/google/callback"
},
    async (accessToken, refreshToken, profile, cb) => {
        try {
            let user = await User.findOne({ googleId: profile.id });

            if (!user) {
                const newUser = new User({
                    googleId: profile.id,
                    username: profile.displayName,
                });
                await newUser.save();
                return cb(null, newUser);
            } else {
                return cb(null, user);
            }
        } catch (err) {
            return cb(err, null);
        }
    }
)
);


// create session id
// whenever we login it creares user id inside session
passport.serializeUser((user, done) => {
    done(null, user.id);
});

// find session info using session id
passport.deserializeUser(async (id, done) => {
    try {
        const user = await User.findById(id);
        done(null, user);
    } catch (error) {
        done(error, false);
    }
});