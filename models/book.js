const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    name:{
        type: String,
        required :true,
    },
    description:{
        type: String,
    },
    photo: { 
        data: Buffer, 
        contentType: String
     },
    author_id:[{
        type:mongoose.Schema.Types.ObjectId,ref:'Author',autopopulate: true
    }],
    category_id:[{
        type:mongoose.Schema.Types.ObjectId,ref:'categories',autopopulate: true
    }],
    rate:{
        type: Number
    },
    num_of_persons:{
        type: Number
    }
});

bookSchema.plugin(require('mongoose-autopopulate'));

bookSchema.methods.generateAvgRate = function () {
    let book = this;
    let avg_rate = (this.rate/this.num_of_persons);

    book.save().then(() => {
        return avg_rate;
    });
}

const Book = mongoose.model('Book', bookSchema);    //////creating model
module.exports = Book;
// Rating.aggregate(
//     [
//         { "$group": {
//             "_id": "$book_id",
//             "avg_rate": { "$avg": { "$ifNull": ["$rating",0 ] } }    
//         }}
//     ],
//     function(err,results) {
//         if (err) throw err;

//         // Map plain results to mongoose document objects
//         results = results.map(function(result) {
//             return new BookResult(result);
//         });

//         Book.populate(results,{ "path": "_id" },function(err,results) {
//             if (err) throw err;
//             reply(results);
//             console.log( JSON.stringify( results, undefined, 2 ) );
//         })
//     }
// );