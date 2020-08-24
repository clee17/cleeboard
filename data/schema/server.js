var mongoose = require('mongoose');

module.exports = new mongoose.Schema({
    title:{type:String,default:''},
    user:{type:mongoose.Schema.ObjectId,ref:'user'},
    description:{type:String,default:""},
    registered:{type:Number,default:0},
    public:{type:Boolean,default:false}
},{
    timestamps: true
});