var mongoose = require('mongoose');

module.exports = new mongoose.Schema({
    user:{type:mongoose.Schema.ObjectId,ref:'user'},
    title:{type:String,default:""},
    cover:{type:String,default:""},
    contents:{type:String,default:""},
    channel:{type:mongoose.Schema.ObjectId,ref:'channel'},
    server:{type:mongoose.Schema.ObjectId,ref:'server'}
},{
    timestamps: true
});