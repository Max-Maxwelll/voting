const mongoose = require("mongoose");
const Track = require("../models/track");
const Schema = mongoose.Schema;
const concertScheme = new Schema( {
    tracks: []
});
module.exports = mongoose.model("Concert", concertScheme);