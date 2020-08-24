var mongoose = require('mongoose');
var connect = module.require('../connectors/server');
var schema = require('../schema/collection');


module.exports = mongoose.model('collection',schema,'collection');