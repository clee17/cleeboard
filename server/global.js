var path = require('path');

global.__basedir = path.join(path.resolve(__dirname),'../');

global.__view = path.join(path.join(__basedir,'/view/'));
global.__routes = path.join(path.join(__basedir,'/server/routes/'));

global.__dataSchema = path.join(path.join(__basedir,'/data/schema/'));
global.__dataModel = path.join(path.join(__basedir,'data/model/'));
global.__dataConnec = path.join(path.join(__basedir,'/data/connectors/'));
global.__dataFormat = path.join(path.join(__basedir,'/data/dataProcessor/'));

global.__game = path.join(path.join(__basedir,'/Directory/'));
global.__entryFile = ['index.html'];

let redis = require('redis');

global.redisClient = redis.createClient();

module.exports = global;

