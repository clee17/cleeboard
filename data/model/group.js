var connect = module.require('../connectors/server');
var schema = require('../schema/group');


module.exports = mongoose.model('group',schema,'group');