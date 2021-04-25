const mongoose = require('mongoose');

const FertilizerSchema = mongoose.Schema({
    Title : {
        type : String,
    },
    Content : {
        type : String,
    }
})

module.exports = mongoose.model("Fertilizer",FertilizerSchema);