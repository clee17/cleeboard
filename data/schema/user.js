var mongoose = require('mongoose');

module.exports = new mongoose.Schema({
    index:{type:Number,default:0},
    user: {type:String,default:''},
    pwd:{type:String,default:''},
    mail:{type:String,default:''},
    verified:{type:Boolean,default:false},
    setting:{type:mongoose.Schema.ObjectId,ref:'setting'},
},{
    timestamps: true
});