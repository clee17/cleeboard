let express = require('express'),
    path = require('path'),
    mongoose = require('mongoose'),
    lzString = require(path.join(__basedir, 'public/js/lz-string'));

let collectionModel = require(path.join(__dataModel,'collection')),
    messageModel = require(path.join(__dataModel,'message')),
    mailModel = require(path.join(__dataModel,'mails'));

let handler = {
    finalSend:function(res,data){
        if(data.sent)
            return;
        if(!res)
            return;
        data.sent = true;
        res.send(lzString.compressToBase64(JSON.stringify(data)));
    },

    collection:function(req,res){
        let received = JSON.parse(lzString.decompressFromBase64(req.body.data));
        let user = req.session.user;
        let response = {
            sent: false,
            success: false,
            type:received.type,
            requestId: received.requestId,
            message: '',
        };

        if(!user){
            response.messasge = 'Please login, there is no valid user found';
            response.refresh = true;
            handler.finalSend(res,response);
            return;
        }

        collectionModel.find({owner:req.session.user._id},function(err,results){
            if(err){
                response.message = err.message;
                handler.finalSend(response);
            }else{
                response.results = JSON.parse(JSON.stringify(results));
                handler.finalSend(res,response);
            }

        });
    },

    mail:function(req,res){
        let received = JSON.parse(lzString.decompressFromBase64(req.body.data));
        let user = req.session.user;
        let response = {
            sent: false,
            success: false,
            type:received.type,
            requestId: received.requestId,
            message: '',
        };

        if(!user){
            response.messasge = 'Please login, there is no valid user found';
            response.refresh = true;
            handler.finalSend(res,response);
            return;
        }

        mailModel.find({receiver:req.session.user._id},function(err,results){
            if(err){
                response.message = err.message;
                handler.finalSend(response);
            }else{
                response.results = JSON.parse(JSON.stringify(results));
                handler.finalSend(res,response);
            }
        });
    },

    reply:function(req,res){
        let received = JSON.parse(lzString.decompressFromBase64(req.body.data));
        let user = req.session.user;
        let response = {
            sent: false,
            success: false,
            type:received.type,
            requestId: received.requestId,
            message: '',
        };

        if(!user){
            response.messasge = 'Please login, there is no valid user found';
            response.refresh = true;
            handler.finalSend(res,response);
            return;
        }

        messageModel.find({to:req.session.user._id},function(err,results){
            if(err){
                response.message = err.message;
                handler.finalSend(response);
            }else{
                response.results = JSON.parse(JSON.stringify(results));
                handler.finalSend(res,response);
            }
        });
    },

};

module.exports = handler;