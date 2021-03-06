const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
//Require user model
const User = require("../models/user");

// configuring Passport!
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK
  },
  function(accessToken, refreshToken, profile, cb) {
    // a user has logged in via OAuth!
    // refer to the lesson plan from earlier today in order to set this up
    User.findOne({'googleId': profile.id}, function(err, user){
      if(err) return cb(err);
      if(user){
        return cb(null, user);
      }else{
        let newUser = new User({
          name: profile.displayName,
          email: profile.emails[0].value,
          googleId: profile.id
        });
        newUser.save(function(err){
          if(err) return cb(err)
          return cb(null, newUser)
        })
      }
    })

  }
));

//Sets up session
passport.serializeUser(function(user, done) {
  done(null, user.id);
});

//If user is logged in return this
passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user){
    done(err, user)
  })
  // Find your User, using your model, and then call done(err, whateverYourUserIsCalled)
  // When you call this done function passport assigns the user document to req.user, which will 
  // be availible in every Single controller function, so you always know the logged in user

});



