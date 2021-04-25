const mongoose = require('mongoose');

const pesticideSchema = mongoose.Schema({
    Title : {
        type : String,

    },
    Content :{
        type : String, 
    }
})

module.exports = mongoose.model("pesticide",pesticideSchema);