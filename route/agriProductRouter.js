const express = require('express');
const router = express.Router();
const AgriProductSchema = require('../modals/agriProductSchema');

router.post("/",async(req,res)=>{
    var data = new AgriProductSchema({
        Title : req.body.title,
        Content : req.body.content,
        
    });
    await data.save();
    res.json();
})

router.get('/',async(req,res)=>{
    var productData = await AgriProductSchema.find();
    res.json(productData);
})

module.exports = router;