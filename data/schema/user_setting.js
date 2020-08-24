var mongoose = require('mongoose');

module.exports = new mongoose.Schema({
    mail: {type:String,default:''},
    header: {type:String,default:''},
    user:{type:mongoose.Schema.ObjectId,ref:'user'},
},{
    timestamps: true
});