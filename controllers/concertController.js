const Concert = require("../models/concert");
const mongoose = require("../modules/mongoose");
exports.delete = function (request, response){
    mongoose.connect();
    const id = request.query.id;
    Concert.findByIdAndDelete(id, function(err){
        if(err){
            console.log(err);
            response.status(400).json('');
        }
        response.status(200).json('');
    });
};
exports.get = function(request, response){
    mongoose.connect();
    Concert.find({}, function(err, res){
        mongoose.disconnect();
        if(err){
            console.log(err);
            response.status(400).json('');
        }
        // console.log(res);
        response.status(200).json(res);
    });
};