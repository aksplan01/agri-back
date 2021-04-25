const express = require('express');
const router = express.Router();
const pesticideRouter = require('../modals/pesticideSchema');

router.post("/",async(req,res)=>{
    var data = new pesticideRouter({
        title : req.body.title,
        content : req.body.content
    });
    await data.save();
    res.json();
})

router.get('/',async(req,res)=>{
    var pesticideData = await pesticideRouter.find();
    res.json(pesticideData);
})

module.exports = router;