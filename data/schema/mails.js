var mongoose = require('mongoose');

module.exports = new mongoose.Schema({
    from:{type:mongoose.Schema.ObjectId,ref:'user'},
    receiver:{type:mongoose.Schema.ObjectId,default:null,ref:'user'},
    contents:{type:String,default:""}
},{
    timestamps: true
});