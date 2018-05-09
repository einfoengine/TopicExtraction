var mongoose = require('mongoose');

// create the model for users and expose it to our app
// define the schema for our user model
var UserSchema = mongoose.Schema({

    email        : { type: String},
    password     : { type: String},
    tags:[]

});

module.exports = mongoose.model('User', UserSchema);