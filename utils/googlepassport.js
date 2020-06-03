const googleStrategy = require("passport-google-oauth2");
const passport = require("passport");
passport.serializeUser((user, done) => {
  var error = null;
  done(error, user);
});
//will be called when u call a cookie
passport.deserializeUser((userid, done) => {
  console.log("user session", userid);
  done(null, userid);
});
//call when u read data from cookie
passport.use(
  new googleStrategy(
    {
      callbackURL: "/dashboard",
      clientID: "Your GOOGLE_CLIENT_ID",
      clientSecret: "Your GOOGLE_CLIENT_SECRET",
    },
    (accessToken, refreshToken, profile, done) => {
      console.log("Callback Google", profile, "token", accessToken);
      var userobject = {
        email: profile.email,
        name: profile.displayName,
        picture: profile.picture,
      };
      done(null, userobject);
    }
  )
);
