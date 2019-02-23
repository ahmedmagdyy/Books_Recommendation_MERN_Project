const express = require('express');
const router = express.Router();
const Author = require('../models/author');

//retrieving authors
router.get('/', (req , res , next) => {
    Author.find().then(authors =>{
        res.send(authors);
    }).catch(err => {
        res.send('error in retrieving authors');
    }); 
});

//adding new author
router.post('/', (req , res , next) => {
    const authorData = new Author({
        first_name : req.body.first_name,
        last_name : req.body.last_name,
        description : req.body.description,
        photo : req.body.photo,
        birth_date : req.body.birth_date
    });
    authorData.save( (err) =>{
        if(!err){ 
        res.send('new author saved successfully');
    }
    else{
        res.send(err)
    }
    });  
});

//editing author
router.put('/:id', (req , res , next) => {
    Author.updateOne({ _id: req.params.id }, { $set: { first_name: req.body.first_name , 
        last_name : req.body.last_name , 
        description : req.body.description , 
        photo : req.body.photo ,
        birth_date : req.body.birth_date } }, (err) => {
        if (!err) 
        res.send('author updated successfully');
        else
        res.send('error in updating author');
   });
});

//deleting author    
router.delete('/:id' , (req , res , next) => {
    Author.deleteOne({ _id: req.params.id }, (err) => {
        if (!err) 
        res.send('author deleted successfully');
        else
        res.send('error in deleting author');
    });
});

module.exports = router;