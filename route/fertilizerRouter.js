const express = require('express');
const router = express.Router();
const FertilizerRouter = require('../modals/fertilizerSchema');

router.get('/',async(req,res)=>{
    var fertilizerData = await FertilizerRouter.find();
    res.json(fertilizerData);
})

module.exports = router;