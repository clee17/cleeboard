var connect = module.require('../connectors/server');
var schema = require('../schema/user');


module.exports = mongoose.model('user',schema,'user');