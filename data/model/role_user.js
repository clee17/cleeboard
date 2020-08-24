var connect = module.require('../connectors/server');
var schema = require('../schema/role_user');


module.exports = mongoose.model('role_user',schema,'role_user');