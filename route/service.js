const express = require('express');
const router = express.Router();
const serviceRouter = require('../modals/serviceSchema');

router.post("/",async(req,res)=>{
    var data = new serviceRouter({
        Name : req.body.Name,
        Type : req.body.Type,
        SubType : req.body.SubType,
        Amount : req.body.Amount,
        Contact : req.body.Contact,
        District : req.body.District,
        City : req.body.City,
        Address : req.body.Address,
        Pincode : req.body.Pincode
    });

    await data.save();
    res.json();
})

router.get("/",async(req,res)=>{
    var servicedata = await serviceRouter.find();
    res.json(servicedata);
})

module.exports = router;