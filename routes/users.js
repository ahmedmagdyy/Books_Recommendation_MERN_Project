const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const User = require('../models/user');
const _ = require('lodash');

//retrieving users
router.get('/', (req , res , next) => {
    User.find().then(users =>{
        res.send(users);
    }).catch(err => {
        res.send('errooooor');
    }); 
});

//adding new user
router.post('/', (req , res , next) => {
    const userData = new User({
        first_name : req.body.first_name,
        last_name : req.body.last_name,
        user_name : req.body.user_name,
        email : req.body.email,
        password : req.body.password,
        photo : req.body.photo
    });
    userData.save( (err) =>{
        if(!err){ 
        res.send('saved');
    }
    else{
        res.send(err)
    }
    });  
});

router.get('/me' , (req , res) => {
    var token = req.header('x-auth');
    User.findByToken(token).then((user) => {
        res.send(user);
    });
});

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

// router.post('/posts', verifyToken , (req , res , next) => {
//     jwt.verify(req.token , 'my_secret_key' , (err , authData)=>{
//         if(err){
//             res.sendStatus(403);
//         }else{
//             res.json({
//                 message : 'users',
//                 authData
//             });
//         }
//     });
// });

module.exports = router;