const express=require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser')

var path = require('path');

const cors=require('cors')
const app=express()
const PORT=process.env.PORT || 8089
const authRoute=require('./routes/auth-route')


mongoose.connect('mongodb://localhost:27017/drugdetails',(err)=>{
    if(err){
        console.log("not connected")
    }else{
        console.log("connected");
    }
})
app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use('/auth',authRoute)




app.get('/',(req,res)=>{
    res.send("hlo");
})



app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Headers, *, Access-Control-Allow-Origin', 'Origin, X-Requested-with, Content_Type,Accept,Authorization','http://localhost:4200');
    if(req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods','PUT,POST,PATCH,DELETE,GET');
        return res.status(200).json({});
    }
    next();
});

app.listen(PORT,()=>{
    console.log("server is connected :",PORT);
})

