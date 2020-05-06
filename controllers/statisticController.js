const mongoose = require("../modules/mongoose");
const Track = require("../models/track");
exports.author = function(request, response){
    mongoose.connect();
    Track.aggregate([{ $group: { _id: "$author", count: {$sum: "$votes"}}}]).exec(function(err, res){
        if(err){
            console.log(err);
            return response.status(400).json('');
        }
        console.log(res);
        return response.status(200).json(res);
    });
};
exports.genre = function(request, response){
    mongoose.connect();
    Track.aggregate([{ $group: { _id: "$genre", count: {$sum: "$votes"}}}]).exec(function(err, res){
        if(err){
            console.log(err);
            return response.status(400).json('');
        }
        console.log(res);
        return response.status(200).json(res);
    });
};
exports.year = function(request, response){
    mongoose.connect();
    Track.aggregate([{ $group: { _id: "$year", count: {$sum: "$votes"}}}]).exec(function(err, res){
        if(err){
            console.log(err);
            return response.status(400).json('');
        }
        console.log(res);
        return response.status(200).json(res);
    });
};
exports.album = function(request, response){
    mongoose.connect();
    Track.aggregate([{ $group: { _id: "$album", count: {$sum: "$votes"}}}]).exec(function(err, res){
        if(err){
            console.log(err);
            return response.status(400).json('');
        }
        console.log(res);
        return response.status(200).json(res);
    });
};
exports.language = function(request, response){
    mongoose.connect();
    Track.aggregate([{ $group: { _id: "$language", count: {$sum: "$votes"}}}]).exec(function(err, res){
        if(err){
            console.log(err);
            return response.status(400).json('');
        }
        console.log(res);
        return response.status(200).json(res);
    });
};