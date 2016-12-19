/**
 * Created by MaheN on 12/18/2016.
 */
var passport= require('passport');
exports.authenticate = function(req, res, next){
    var auth = passport.authenticate('local',function(err, user){
        if(err){
            console.log('11111111',error);
            return next(err);
        }
        if(!user){
            console.log('!user',user);
            res.send({success:false})
        }
        req.logIn(user, function(err){
            if(err){
                console.log('login errrrrrr')
                return next(err);
            }
            console.log('response sending');
            res.send({success:true, user: user})
        })
    })
    auth(req, res, next);
}