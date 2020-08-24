const express = require('express'),
    path = require('path');
let fs = require('fs');

let  main = require(path.join(__routes,"/main")),
     feed =  require(path.join(__routes,"/feed"));

let router = express.Router();

//entry pages
router.get('/',main.index);
router.get('/me',main.index);
router.get('/channels/:serverId',main.index);
router.get('/channels/:serverId/:channelId',main.index);

router.post('/feed/collection',feed.collection);
router.post('/feed/mails',feed.mail);
router.post('/feed/reply',feed.reply);

module.exports = function(app)
{
    app.use('*',function(req,res,next){
        if(!req.session.user)
        {
            res.cookie('userId','',{maxAge:0});
        }
        next();
    });

    app.use('/',router);

    app.use('*', function(req, res){
        res.render('error.html', {title:"没有找到该页面"});
    });
};

