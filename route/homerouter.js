const express = require('express');
const router = express.Router();
const homeRouter  = require('../modals/homeSchema');


router.post("/",async(req,res)=>{
    var data = new homeRouter({
        title : req.body.title,
        content : req.body.content
    });
    await data.save();
    res.json();
})

router.get("/",async (req,res) =>{
    var homedata = await homeRouter.find();
    res.json(homedata);
})

module.exports = router;