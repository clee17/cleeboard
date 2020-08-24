var mongoose = require('mongoose');

module.exports = new mongoose.Schema({
    channel:{type:mongoose.Schema.ObjectId,ref:'channel'},
    rights:{type:Number,default:0},
},{
    timestamps: true
});