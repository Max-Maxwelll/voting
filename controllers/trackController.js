const Track = require("../models/track");
const mongoose = require("../modules/mongoose");
exports.create = function (request, response){
    const name = request.body.name;
    const author = request.body.author;
    const genre = request.body.genre;
    const year = request.body.year;
    const album = request.body.album;
    const language = request.body.language;
    const track = new Track({
        name: name,
        author: author,
        genre: genre,
        year: year,
        album: album,
        language: language
    });
    mongoose.connect();
    track.save(function(err){
        mongoose.disconnect();
        if(err){
            console.log(err);
            return response.status(400).json('');
        }
    });
    response.status(200).json('');
};
exports.get = function(request, response){
    mongoose.connect();
    Track.find({}, function(err, tracks){
        mongoose.disconnect();
        if(err){
            console.log(err);
            return response.status(400).json('');
        }
        return response.status(200).json(tracks);
    })
};
exports.delete = function(request, response){
    const id = request.query.id;
    mongoose.connect();
    Track.findByIdAndDelete(id, function(err){
        mongoose.disconnect();
        if(err){
            console.log(err);
            return response.status(400).json('');
        }
        return response.status(200).json('');
    });
};