const mongoose = require('mongoose');

const ServiceSchema = mongoose.Schema({
    Name : {
        type : String,
        required : true,
        trim : true
    },
    Type : {
        type : String,
        required : true,
        trim : true
    },
    SubType : {
        type : String,
        required : true,
        trim : true
    },
    Amount : {
        type : Number,
        required : true,
        trim : true  
    },
    Contact : {
        type : Number,
        required : true,
        trim : true
    },
    District : {
        type : String,
        required : true,
        trim  : true
    },
    City : {
        type : String,
        required : true,
        trim : true
    },
    Address : {
        type : String,
        trim : true
    },
    Pincode : {
        type : Number,
        required : true,
        trim : true
    }
})

module.exports = mongoose.model("service",ServiceSchema);