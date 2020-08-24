var mongoose = require('mongoose');

var connect = mongoose.createConnection('mongodb://127.0.0.1:27017/server',{useNewUrlParser: true});

connect.then(
    ()=>{
        console.log('intial server connected successfully');
    },
    err=>{
        console.log("failed to connect to initial server");
    }
);

module.exports = connect;