var connect = module.require('../connectors/server');
var schema = require('../schema/role');


module.exports = mongoose.model('role',schema,'role');