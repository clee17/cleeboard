var connect = module.require('../connectors/server');
var schema = require('../schema/user_server');


module.exports = mongoose.model('user_setting',schema,'user_setting');