
let User = require('../models/user');

module.exports = function (app,mongoose) {



    app.post('/user', function (req, res) {

        let user  = new User();
        user.email = req.body.email;
        user.password = req.body.passsword;
        user.tags = req.body.tags;

        user.save(function(err,v){
            if(err){
                res.json({msg:"error saving user"});
            }
            
            res.json(v);
        })
    });

    app.get('/get-all-collection',function(req,res){
        
    });

    app.get('/user', function (req, res) {
        User.find(function(err,v){
            if(err){
                res.json({msg:"error saving user"});
            }

            res.json(v)
        })
    });

    app.delete('/user', function (req, res) {

    });

    app.put('/user', function (req, res) {

    });


};