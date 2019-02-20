const mongoose = require('mongoose');

const MONGO_URL  = 'mongodb://localhost:27017/books_recommendation';

mongoose.connect(MONGO_URL,{
    autoReconnect: true,
    reconnectTries: Number.MAX_VALUE,
    useNewUrlParser:true
},(err)=>{
    if(!err) console.log("DataBase connected")
    else console.log("database Error");
})