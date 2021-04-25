const express = require('express');
const router = express.Router();
const SeedRouter = require('../modals/seedSchema');

router.get('/',async(req,res)=>{
    var seedData = await SeedRouter.find();
    res.json(seedData);
})

module.exports = router;