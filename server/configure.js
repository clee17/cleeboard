var bodyparser = require('body-parser'),
    cookie = require('cookie-parser'),
    session = require('express-session'),
    path = require('path'),
    ejs = require('ejs'),
    express = require('express'),
    redisStore = require('connect-redis')(session);

 module.exports=function(app){
    app.set('trust proxy',true);
    app.set('views',__view);
    app.engine('.html',ejs.__express);
    app.set('view engine','html');

    app.use(cookie());

    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({extended:true}));

    app.use(session({
        secret:'a;ejbgda',
        resave: false,
        store: new redisStore({ host:'127.0.0.1',port:'6379',db: 0, pass: '',client:redisClient}),
        cookie: {
            secure: false,
            path:'/',
            httpOnly:true,
            maxAge:null
        }
    }));

    //static assets
    app.use('/fonts',express.static(path.join(__basedir,'/public/fonts')));
    app.use('/css',express.static(path.join(__basedir,'/public/css')));
     app.use('/script',express.static(path.join(__basedir,'/public/js')));
    app.use('/img',express.static(path.join(__basedir,'/public/image')));
    app.use('/video',express.static(path.join(__basedir,'/public/video')));
     app.use('/view',express.static(path.join(__basedir,'/view')));

    return app;
};