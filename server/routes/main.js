let express = require('express'),
    path = require('path'),
    mongoose = require('mongoose'),
    lzString = require(path.join(__basedir, 'public/js/lz-string'));

let handler = {
    index:function(req,res){
        let render =  {title:"CleeBoard"};
        render.info = {};
        render.info.serverId = req.params.serverId;
        render.info.channelId = req.params.channelId;
        res.render('index.html',render);
    },

};

module.exports = handler;