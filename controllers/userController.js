const User = require("../models/user.js");
const mongoose = require("../modules/mongoose");
exports.login = function (request, response){
    const name = request.body.name;
    const password = request.body.password;
    mongoose.connect();
    User.exists({name: name, password: password}, function(err, res){

        mongoose.disconnect();
        if(err){
            return response.status(400).json("");
        }
        if(res){
            return response.status(200).json("");
        }
        else{
            return response.status(401).json("");
        }
    });
};
exports.register = function(request, response){
    const name = request.body.name;
    const password = request.body.password;
    mongoose.connect();
    User.exists({name: name, password: password}, function(err, res){
        if(err){
            return  response.status(400).json("");
        }
        if(res){
            return response.status(400).json("");
        }
    });

    const user = new User({name: name, password: password})
    user.save(function(err){
        mongoose.disconnect();
        if(err) {
            console.log(err);
            return response.status(400).json("");
        }
        console.log("Создан новый пользователь");
    });
    return response.status(200).json("");
};