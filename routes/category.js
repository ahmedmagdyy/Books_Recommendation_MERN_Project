const express = require('express');
const categoryRouter = express.Router();
const categoryModel = require('../models/category');
const bodyParser = require('body-parser');
const cors = require('cors');


categoryRouter.use(cors());
categoryRouter.use(bodyParser.json());

categoryRouter.post('/',(req,res,next)=>{
    // categoryModel.aggregate([
    //     { $group: { _id: null, maxId: { $max: '$id' }}}
    //   ]).
    //   then(res =>  res[0].maxId).
    //   then(maxId => {
            const newCat= new categoryModel({
                // id : maxId+1,
                name : req.body.name
            })
            newCat.save((err, data) => {
                if (!err)
                    res.json(data);
                else console("Error in insertion");
            })
    //     }
    //   ).catch(()=>res.json("Error In Insertion"));
});


categoryRouter.put('/',(req,res,next)=>{
    console.log(req.body.name);
    categoryModel.findOneAndUpdate({_id : req.body._id}, { $set: { name: req.body.name } })
    .then((data)=>{data.name=req.body.name; res.json(data)})
    .catch(error=>{res.json(error)});       
});

categoryRouter.get('/',(req,res)=>{
    categoryModel.find({},(err, data) => {
        if (!err)
            res.json(data);
        else {
            console("Error in Rertive Data");
            res.json("Retrival Erro");
        }
    })
    
});

categoryRouter.delete('/:id',(req,res)=>{
    categoryModel.deleteOne({"_id":req.params.id},(err, data) => {
        if (!err)
            res.json("Delete Successfully");
        else {
            res.json("Error in Delete");
        }
    })
    
});


module.exports = categoryRouter;