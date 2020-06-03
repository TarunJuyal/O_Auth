const express = require("express")
const passport = require('passport')
const routes = express.Router();
routes.get('/google',passport.authenticate('google',{scope:["profile",'email']}));

routes.get('/dashboard',passport.authenticate('google'),(req,res)=>{
    console.log('request',req);
    res.status(200);
res.send('Welcome user '+` ${req.user.name} <img src=${req.user.picture}></img>`)
})

module.exports=routes;