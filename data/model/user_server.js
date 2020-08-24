var connect = module.require('../connectors/server');
var schema = require('../schema/user_server');


module.exports = mongoose.model('user_server',schema,'user_server');