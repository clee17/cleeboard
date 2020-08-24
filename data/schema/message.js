var mongoose = require('mongoose');

module.exports = new mongoose.Schema({
    user:{type:mongoose.Schema.ObjectId,ref:'user'},
    to:{type:mongoose.Schema.ObjectId,default:null,ref:'user'},
    contents:{type:String,default:""},
    channel:{type:mongoose.Schema.ObjectId,ref:'channel'},
    server:{type:mongoose.Schema.ObjectId,ref:'server'}
},{
    timestamps: true
});