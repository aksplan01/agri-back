const mongoose = require('mongoose');

const HomeSchema = mongoose.Schema({
    title : {
        type : String,

    },
    content :{
        type : String, 
    }
})

module.exports = mongoose.model("home",HomeSchema);