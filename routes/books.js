const express = require('express');
const router = express.Router();
const Book = require('../models/book');

//retrieving books
router.get('/', (req , res , next) => {
    Book.find().then(books =>{
        res.send(books);
    }).catch(err => {
        res.send(err);
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
        rate : req.body.rate,
        num_of_persons : req.body.num_of_persons
    });
    bookData.save( (err) =>{
        if(!err){ 
        res.send('new book saved successfully');
    }
    else{
        res.send(err)
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
        res.send('book updated successfully');
        else
        res.send('error in updating book');
   });
});

//deleting book
router.delete('/:id' , (req , res , next) => {
    Book.deleteOne({ _id: req.params.id }, (err) => {
        if (!err) 
        res.send('book deleted successfully');
        else
        res.send('error in deleting book');
    });
});

module.exports = router;