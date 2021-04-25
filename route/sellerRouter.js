const express = require('express');
const router = express.Router();
const sellerRouter = require('../modals/sellerSchema');

router.post('/',async(req,res)=>{
    var data = new sellerRouter({
        ProductType : req.body.ProductType,
        ProductName : req.body.ProductName,
        Quantity : req.body.Quantity,
        Rate : req.body.Rate,
        District : req.body.District,
        City : req.body.City,
        Place : req.body.Place,
        Contact : req.body.Contact
    });

    await data.save();
    res.json();
})

router.get("/",async(req,res)=>{
    var sellerData = await sellerRouter.find();
    res.json(sellerData);
})

module.exports = router;