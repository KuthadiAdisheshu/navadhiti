const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const drugform1Schema=new Schema({

    birthday:{},
    age:{},
    sex:{},
    Height:{},
    Weight:{},
    BMI:{}


 
  




})
module.exports=mongoose.model('drugdetails1',drugform1Schema);