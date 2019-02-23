const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const _ = require('lodash');

const userSchema = new mongoose.Schema({
    first_name: {
        type: String,
    },
    last_name: {
        type: String,
    },
    user_name: {
        type: String,
    },
    email: {
        type: String,
        match: /\w+\@\w+/,
    },
    password: {
        type: String,
    },
    isAdmin: {
        type: Boolean,
    },
    photo: {
        type: String,
        data: Buffer
    },
    book_status: {
        type: String,
        enum: ['Read', 'Want to Read', 'Currnetly Reading']
    },
    tokens: [{
        access: {
            type: String,
        },
        token: {
            type: String,
        }
    }],
    books: [{
        book_id:{
            type: Number
        },
        user_rating:{
            type: Number
        }
    }]
});

userSchema.statics.findByCredentials = function (email, password) {
    var User = this;

    return User.findOne({ email }).then((user) => {
        if (!user) {
            return Promise.reject();
        }

        return new Promise((resolve, reject) => {
            // Use bcrypt.compare to compare password and user.password
            console.log(password + "/" + user.password);
            if (password === user.password)
                resolve(user);
            else {
                reject();
            }
        });
    });
  };

//authentication token
// userSchema.methods.toJson = function (){
//     var user = this;
//     var userObject = user.toObject();
//     return _.pick(userObject , ['_id' , 'email']);
// }
userSchema.methods.generateAuthToken = function () {
    var user = this;
    var access = 'auth';
    var token = jwt.sign({ _id: user._id.toHexString(), access }, 'secret_key').toString();

    user.tokens.push({ access, token });
    return user.save().then(() => {
        return token;
    });
}

userSchema.statics.findByToken = function (token) {
    var User = this;
    jwt.verify(token, 'secret_key');
    return User.findOne({
        'tokens.token': token,
        'tokens.access': 'auth'
    });
}

//hashing password
userSchema.methods.generateHash = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};
userSchema.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
}

const User = mongoose.model('User', userSchema);    //////creating model
module.exports = User; 