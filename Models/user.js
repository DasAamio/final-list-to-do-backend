const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');
const Schema = mongoose.Schema;
mongoose.Promise = require('bluebird');
var crypto = require('crypto');
var bcrypt = require('bcrypt-nodejs');

const UserSchema = new Schema({
    displayname:String,
    email:String,
    password:String
})
UserSchema.plugin(timestamps);

// generating a hash
UserSchema.methods.hashPassword = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(4), null);
};

// checking if password is valid
UserSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

UserSchema.index({ createdAt: 1, updatedAt: 1 });
module.exports = mongoose.model("Admin",UserSchema);