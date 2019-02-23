const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');

const categorySchema = new mongoose.Schema({
    "name": {
        type: "string"
    }
})

const category = mongoose.model('categories', categorySchema);


module.exports = category;