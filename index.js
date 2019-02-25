const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 5000;
// const signUpRouter = require('./routes/signup');
const categoryRouter = require('./routes/category');
const authorRouter = require('./routes/authors');
require('./connection');

const app = express();

app.use(cors());

app.use('/cat',categoryRouter);
app.use('/authors',authorRouter);
// app.use('/book',loginRouter);    



app.listen(port,()=>{
console.log("Start Listening");
})