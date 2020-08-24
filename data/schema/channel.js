var mongoose = require('mongoose');

module.exports = new mongoose.Schema({
    title:{type:String,default:''},
    description:{type:String,default:""},
    public:{type:Boolean,default:false},
    protected:{type:Boolean,default:false},
    server:{type:mongoose.Schema.ObjectId,ref:'server'},
    group:{type:mongoose.Schema.ObjectId,ref:'group'},
},{
    timestamps: true
});