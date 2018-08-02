const Article = require('../models/article')
const jwt = require('jsonwebtoken')

const get = function(req, res){
    Article
    .find()
    .populate('authorId')
    .exec(function (err, respons) {
        if (err) res.status(400);
        res.status(200).json(respons);
      });
      
}

const add = function(req, res){
    jwt.verify(req.headers.token, process.env.tokenSecretKey, function(err, decoded) {
        if(err) res.status(401).json({msg:"is not user"})
        
        Article
        .create({
            title   :req.body.title,
            content :req.body.content,
            category: req.body.category,
            authorId: decoded.id,
        })
        .then(function(category){
            //add google calender
            res
                .status(200)
                .json({
                    msg : "category has been created",
                    category : category
                })
        })
        .catch(function(err){
            res
                .status(400)
                .json({
                    msg : err.message,
                })
        })   
    });
    
}

const edit = function(req, res){
    console.log(req.query.id)
    jwt.verify(req.headers.token, process.env.tokenSecretKey, function(err, decoded) {
        if(err) res.status(401).json({msg:"is not user"})
        
            Article
            .findById(req.query.id)
            .then(function(article){
                console.log("decoded=====", decoded.id, article.authorId)
               if(decoded.id == article.authorId){
                   Article
                   .findByIdAndUpdate(article.id,{
                        title   :req.body.title,
                        content :req.body.content,
                        category: req.body.category,
                        authorId: decoded.id,
                   })
                   .then(function(article){
                       res
                           .status(200)
                           .json({
                               msg : "update succesfully",
                               article : article
                           })
                   })
                   .catch(function(err){
                       res
                           .status(400)
                           .json({
                               msg:err.message
                           })
                   })
               }else{
                   res.status(401).json({msg:"Anda Bukan Author"})
               }                    

            })
            .catch(function(err){
                res
                    .status(400)
                    .json({
                        msg: err. message
                    })
            })
    })
}

const remove = function(req, res){
    jwt.verify(req.headers.token, process.env.tokenSecretKey, function(err, decoded) {
    if(err) res.status(401).json({msg:"is not user"})
        console.log("decoded=====", decoded.id)
        Article
         .findById(req.query.id)
         .then(function(article){
            if(decoded.id == article.authorId){
                Article
                .findByIdAndRemove(req.query.id)
                .then(function(article){
                    res
                        .status(200)
                        .json({
                            article:article,
                            msg:"delete successfully"
                        })
                })
                .catch(function(err){
                    res
                     .status(400)
                })
            }else{
                res.status(401).json({msg:"Anda Bukan Author"})
            } 
         })
         .catch(function(err){
            res
                .status(400)
                .json({
                    msg: err. message
                })
        })
        
    
    })

}
module.exports = {
    get,
    add,
    remove,
    edit
}
