const express = require('express');
const router = express.Router();
const Book = require('../models/book');

//retrieving books
router.get('/', (req , res , next) => {
    Book.find().then(books =>{
        res.json(books);
    }).catch(err => {
        res.json(err);
    }); 
});

//adding new book
router.post('/', (req , res , next) => {
    const bookData = new Book({
        name : req.body.name,
        description : req.body.description,
        photo : req.body.photo,
        author_id : req.body.author_id,
        category_id : req.body.category_id,
        rate : 0,
        num_of_persons : 0
    });
    bookData.save( (err) =>{
        if(!err){ 
        res.json('new book saved successfully');
    }
    else{
        res.json(err)
    }
    });  
});

//editing book
router.put('/:id', (req , res , next) => {
    Book.updateOne({ _id: req.params.id }, 
    { $set: { name: req.body.name,
        description: req.body.description,
        photo: req.body.photo,
        author_id: req.body.author_id,
        category_id: req.body.category_id,
        rate: req.body.rate,
        num_of_persons: req.body.num_of_persons} }, (err) => {
        if (!err) 
        res.json('book updated successfully');
        else
        res.json('error in updating book');
   });
});

//deleting book
router.delete('/:id' , (req , res , next) => {
    Book.deleteOne({ _id: req.params.id }, (err) => {
        if (!err) 
        res.json('book deleted successfully');
        else
        res.json('error in deleting book');
    });
});

module.exports = router;