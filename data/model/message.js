var mongoose = require('mongoose');
var connect = module.require('../connectors/server');
var schema = require('../schema/message');


module.exports = mongoose.model('message',schema,'message');