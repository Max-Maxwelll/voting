const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const trackScheme = new Schema( {
    name: String,
    author: String,
    genre: String,
    year: Number,
    album: String,
    language: String,
    votes: Number,
    voted: [String]
});
module.exports = mongoose.model("Track", trackScheme);