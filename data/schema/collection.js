var mongoose = require('mongoose');

module.exports = new mongoose.Schema({
    title:{type:String,default:''},
    description:{type:String,default:""},
    type:{type:Number,default:0},
    parent:{type:mongoose.Schema.ObjectId,ref:'collection'},
    owner:{type:mongoose.Schema.ObjectId,ref:'user'},
},{
    timestamps: true
});