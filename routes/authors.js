const express = require("express");
const authorRouter = express.Router();
const Author = require("../models/author");
const fs = require("fs");
const bodyParser = require("body-parser");
const multer = require("multer");
const validator = require("validator");
authorRouter.use(bodyParser.json());

const storage = multer.diskStorage({
  destination: "./public/uploads/",
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 },
});

authorRouter.post("/", upload.single("photo"), function(req, res) {
  console.log(req.body);
  let AuthorObj = new Author();
  AuthorObj.first_name = req.body.first_name;
  AuthorObj.last_name = req.body.last_name;
  AuthorObj.description = req.body.description;
  AuthorObj.birth_date = req.body.birth_date;
  if (req.file.path) {
    AuthorObj.photo.data = fs.readFileSync(req.file.path);
    AuthorObj.photo.type = "image/jpeg"; // or 'image/png'
  } else AuthorObj.photo = {};

  if (
    validator.isByteLength(req.body.first_name, { min: 1, max: 100 }) &&
    validator.isByteLength(req.body.last_name, { min: 1, max: 100 }) &&
    validator.isBefore(req.body.birth_date, Date())
  ) {
    AuthorObj.save((err, data) => {
      if (!err) res.json(data);
      else res.json("Error in insertion");
    });
  }
});

//retrieving authors
authorRouter.get("/", (req, res, next) => {
  Author.find()
    .then(authors => {
      res.json(authors);
    })
    .catch(err => {
      res.json("error in retrieving authors");
    });
});

authorRouter.get('/pop', (req , res , next) => {
    Author.find({},'first_name last_name').limit(3).then(authors =>{
        res.json(authors);
    }).catch(err => {
        res.json('error in retrieving authors');
    }); 
});

//editing author
authorRouter.put("/", upload.single("photo"), (req, res, next) => {
  console.log(req.body);
  const editedAuthor = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    description: req.body.description,
    birth_date: req.body.birth_date,
  };
  if (req.file) {
    editedAuthor.photo = {};
    editedAuthor.photo.data = fs.readFileSync(req.file.path);
    editedAuthor.photo.type = "image/jpeg";
  }
  console.log(editedAuthor);
  Author.updateOne({ _id: req.body._id }, { $set: editedAuthor })
    .then(data => {
      Author.find({ _id: req.body._id }).then(data => {
        res.json(data[0]);
      });
    })
    .catch(error => {
      res.json(error);
    });
});

// authorRouter.put('/',(req , res , next) => {
//     console.log(req.body);
//     const editedAuthor = {
//         first_name: req.body.first_name ,
//         last_name : req.body.last_name ,
//         description : req.body.description ,
//         birth_date : req.body.birth_date
//     }
//     if(req.file){
//         editedAuthor.photo ={};
//         editedAuthor.photo.data = fs.readFileSync(req.file.path);
//         editedAuthor.photo.type = 'image/jpeg';
//     }
//     Author.updateOne({ _id: req.params.id }, { $set: editedAuthor }, (err) => {
//         if (!err)
//         res.json('author updated successfully');
//         else
//         res.json('error in updating author');
//    });
// });

//deleting author
authorRouter.delete("/:id", (req, res, next) => {
  Author.deleteOne({ _id: req.params.id }, err => {
    if (!err) res.json("author deleted successfully");
    else res.json("error in deleting author");
  });
});

module.exports = authorRouter;
