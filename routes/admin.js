const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const User = require('../models/user');

router.post('/login' , function(req ,res){
    const body = _.pick(req.body,['email', 'password']);        
    User.findByCredentials(body.email,body.password).then((user) => {
        return user.generateAuthToken().then((token) => {
          res.header('x-auth', token).send(user);
        });
      }).catch((e) => {
        res.status(400).send();
      });

    // user.save().then(() => {
    //    return user.generateAuthToken();
    // }).then((token) => {
    //     res.header('x-auth' , token).send(user);
    // }).catch((err) => {
    //     res.status(400).send(err);
    // });
    // const token = jwt.sign({user : user} , 'my_secret_key' , (err , token)=> {
    //     res.json({
    //         token : token
    //     });
    // });
});

router.get('/me' , (req , res) => {
    var token = req.header('x-auth');
    User.findByToken(token).then((user) => {
        res.send(user);
    });
});


//middleware function to verify token
function verifyToken(req , res , next){
    //get auth header value 
    const bearerHeader = req.headers['authorization'];
    if(typeof bearerHeader !== 'undefined'){
        const bearer = bearerHeader.split(' ');
        // get token from array
        const bearerToken = bearer[1];
        //set the token
        req.token = bearerToken;
    }else{
        res.sendStatus(403);
    }
    next();
}

module.exports = router;