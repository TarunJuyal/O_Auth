const express = require('express');
const userroutes = require("./routes/user");
const cookieSession = require('cookie-session')
const passport=require('passport');
const googleSetup=require('./utils/googlepassport')
const app = express();
app.use(express.static('public'));
app.use(cookieSession({
    maxAge:24*60*60*1000,
    keys:['thisismagiccode']
}));
app.use(passport.initialize());
app.use(passport.session());
app.use("/",userroutes);
app.listen(process.env.PORT || 3000,()=>{
console.log("server start...");
})