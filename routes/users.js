const express = require('express');
const jwt = require('jsonwebtoken');
const userRouter = express.Router();
const User = require('../models/user');
const Book = require('../models/book');
const _ = require('lodash');
const cors = require('cors');
const bodyParser = require('body-parser');

userRouter.use(cors());
userRouter.use(bodyParser.json());

//retrieving users
userRouter.get('/', (req , res , next) => {
    User.find().then(users =>{
        res.json(users);
    }).catch(err => {
        res.json('errooooor');
    }); 
});


//retrieving user's books
userRouter.get('/:id/book', (req , res , next) => {
    User.findById({_id: req.params.id} , "books").populate("books.book_id").exec((err,data)=>{
        res.json(data);

    }
)});

//retrieving user's books
userRouter.get('/book/:id', (req , res , next) => {
    User.findById({_id: req.params.id} , "books").then(users =>{
        res.json(users);
    }).catch(err => {
        res.json('errooooor');
    }); 
});



//adding books in user schema
userRouter.get('/ay7aga' , (req ,res , next) => {
    Book.findOne({name : "book 1"},(err,data)=> {
        let book = {book_id:data , user_rating:3 , book_status: "read"};
        User.findOneAndUpdate({
            email:"a@gmail.com"
        }, {$push:{books : book}}, (err,data)=>{})
    })
    res.send("doneeee");
})

//adding new user
userRouter.post('/', (req , res , next) => {
    const userData = new User({
        first_name : req.body.first_name,
        last_name : req.body.last_name,
        user_name : req.body.user_name,
        email : req.body.email,
        password : req.body.password,
        photo : req.body.photo,
        isAdmin: req.body.isAdmin || false
    });
    userData.password = userData.generateHash(userData.password);
    userData.save( (err) =>{
        if(!err){ 
        res.json('saved');
    }
    else{
        res.json(err)
    }
    });  
});

userRouter.get('/me' , (req , res) => {
    var token = req.header('x-auth');
    User.findByToken(token).then((user) => {
        res.json(user);
    });
});

userRouter.post('/login' , function(req ,res){
    // console.log("Path/login")
    console.log(req.body);
    const body = _.pick(req.body,['email', 'password']);
    User.findByCredentials(body.email,body.password).then((user) => {
        console.log(user);
          jwt.sign(user.toJSON(), 'secret_key',(error,token)=>{
              console.log(error);
              console.log(token);
              if(!error){
                  console.log("Sent Successfull Login")
                 user.a = token;
                 console.log(user);
                res.json({ token,user });
              }
              else res.status(404).send();        
          })       
        }).catch((e) => {
        res.status(404).send();
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

// userRouter.post('/posts', verifyToken , (req , res , next) => {
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

module.exports = userRouter;