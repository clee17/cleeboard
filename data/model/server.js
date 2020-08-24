var connect = module.require('../connectors/server');
var schema = require('../schema/server');


module.exports = mongoose.model('server',schema,'server');