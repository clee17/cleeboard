global = require('./global');

var express= require('express'),
    config = require('./configure'),
    route = require('./routes/index');

var app = express();
app = config(app);
route(app);

var server = app.listen(1020);
