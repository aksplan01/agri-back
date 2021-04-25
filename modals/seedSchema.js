const mongoose = require('mongoose');

const SeedSchema = mongoose.Schema({
    Title : {
        type : String,
    },
    Content : {
        type : String,
    }
})

module.exports = mongoose.model("Seed",SeedSchema);