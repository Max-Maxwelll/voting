const mongoose = require("../modules/mongoose");
const Track = require("../models/track");
const Concert = require("../models/concert");
exports.vote = function (request, response) {
    const id = request.query.id;
    const name = request.query.name;
    mongoose.connect();

    Track.findOne({_id: id, voted: name}, function(error, tracks){
        if(error){
            console.log(err);
            return response.status(400).json("");
        }
        if(tracks){
            return response.status(400).json("");
        }
        Track.findOneAndUpdate({_id:id}, {$addToSet: {"voted":name}}, function(err){
            if(err){
                console.log(err);
                return response.status(400).json("");
            }
        });
        Track.findOneAndUpdate({_id:id}, {$inc: {"votes": 1}}, function(err){
            if(err){
                console.log(err);
                return response.status(400).json("");
            }
        });
        return response.status(200).json("");
    });
    
    
};
exports.stop = function(request, response) {
    mongoose.connect();

    Track.find({}).sort({votes: -1})
        .limit(3)
        .exec(function(err, res){
                if(err){
                    return response.status(400).send('');
                }

                const concert = new Concert({tracks: res});
                // console.log(concert);
                concert.save(function(err){
                    if(err){
                        console.log(err);
                        return response.status(400).send('');
                    }
                });
            });
    Track.updateMany({}, {$unset: {votes:0, voted: 1}},{multi: true}, function(err){
        if(err){
            console.log(err);
            return response.status(400).send('');
        }
    });
    return response.status(200).send('');
};