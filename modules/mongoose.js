const mongoose = require("mongoose");
module.exports.connect = function(){
    mongoose.connect("mongodb://localhost:3001/sounddb", { useNewUrlParser: true, useUnifiedTopology: false })
};
module.exports.disconnect = function(){
    mongoose.disconnect();
};