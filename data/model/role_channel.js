var connect = module.require('../connectors/server');
var schema = require('../schema/role_channel');


module.exports = mongoose.model('role_channel',schema,'role_channel');