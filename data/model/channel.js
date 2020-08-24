var connect = module.require('../connectors/server');
var schema = require('../schema/channel');


module.exports = mongoose.model('channel',schema,'channel');