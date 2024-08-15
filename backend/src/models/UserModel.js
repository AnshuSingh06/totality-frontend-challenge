var mongoose = require("mongoose");

var UserSchema = new mongoose.Schema({
  UserName:  String,
  UserMobile:  String,
  UserEmail:  String,
  UserPassword:  String,
 
 
});

module.exports = mongoose.model("User", UserSchema, "Users");

