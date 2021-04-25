const mongoose = require('mongoose');

const AgriProductSchema = mongoose.Schema({
    Title : {
        type : String,
    },
    Content : {
        type : String,
    }
})

module.exports = mongoose.model("newtech",AgriProductSchema);