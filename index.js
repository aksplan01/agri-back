const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const apiPort = 5000;
const homeRouter = require('./route/homerouter');
const serviceRouter = require('./route/service');
const sellerRouter = require('./route/sellerRouter');
const SeedRouter = require('./route/seedRouter');
const morgan = require('morgan');
const FertilizerRouter = require('./route/fertilizerRouter');
const AgriproductRouter = require('./route/agriProductRouter');
const PesticideRouter = require('./route/pesticideRouter');

//middleware
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())
app.use(bodyParser.json());

//home page router
app.use("/homecontent",homeRouter)


//service page router
app.use("/service",serviceRouter);


//Direct seller router
app.use("/seller",sellerRouter);


//Seed Data from Server
app.use("/seed",SeedRouter);

//Fertilizer Data from Server
app.use("/fertilizer",FertilizerRouter);

 
//New Product Data Server
app.use("/newtech",AgriproductRouter);

//Pesticide Data
app.use("/pesticide",PesticideRouter);

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))

//Db Connections
mongoose.connect("mongodb://localhost/agriculture",{useNewUrlParser:true,useUnifiedTopology:true},(err)=>{
    if(!err){
        console.log("DB connected successfully")
    }
})