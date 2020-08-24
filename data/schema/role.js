var mongoose = require('mongoose');

module.exports = new mongoose.Schema({
    title:{type:String,default:''},
    server:{type:mongoose.Schema.ObjectId,ref:'server'},
    rights:{type:Number,default:0},
},{
    timestamps: true
});