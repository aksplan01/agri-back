const mongoose = require('mongoose');

const SellerSchema = mongoose.Schema({
    ProductType : {
        type : String,
        required : true,
        trim : true
    },
    ProductName : {
        type : String,
        required : true,
        trim : true
    },
    Quantity  : {
        type : Number,
        required: true,
        trim : true
    },
    Rate : {
        type : Number,
        required : true,
        trim : true
    },
    District : {
        type : String,
        required : true,
        trim : true
    },
    City : {
        type : String,
        required : true,
        trim : true
    },
    Place : {
        type :String,
        required : true,
        trim : true
    },
    Contact : {
        type : String,
        required : true,
        trim : true
    }
})

module.exports = mongoose.model("seller",SellerSchema);