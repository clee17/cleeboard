var mongoose = require('mongoose');

module.exports = new mongoose.Schema({
    user:{type:mongoose.Schema.ObjectId,ref:'user'},
    role:{type:mongoose.Schema.ObjectId,ref:'role'}
},{
    timestamps: true
});