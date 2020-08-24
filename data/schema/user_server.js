var mongoose = require('mongoose');

module.exports = new mongoose.Schema({
    server:{type:mongoose.Schema.ObjectId,ref:'server'},
    user:{type:mongoose.Schema.ObjectId,ref:'user'},
},{
    timestamps: true
});