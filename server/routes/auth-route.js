const router = require("express").Router();


const drugform1 = require("../model/drugform1");
const drugform2 = require("../model/drugform2");


//post Drugform1 API Drug details in mongodb
router.post("/drugform1", (req, res, next) => {
    const drugforms1 = new drugform1({
        birthday:req.body.birthday,
        age:req.body.age,
        sex:req.body.sex,
        Height:req.body.Height,
        Weight:req.body.Weight,
        BMI:req.body.BMI

    });

    drugforms1
      .save()
      .then((_) => {
        return res.json({
          success: true,
          message: "DrugForm1 is created sucessfully",
        });
      })
      .catch((err) => {
        return res.json({ success: false, message: "failed to create drugform1" });
      });
  });

  router.post('/drugform2',(req,res,next)=>{
    const drugforms2=new drugform2({
        birthday:req.body.birthday,
        sex:req.body.sex,
        Weight:req.body.Weight,
    });
    drugforms2
    .save()
    .then(()=>{
        return res.json({
            success: true,
            message: "DrugForm2 is created sucessfully",
          });

    })
    .catch((err) => {
        return res.json({ success: false, message: "failed to create drugform2" });
      });


  })


  module.exports = router;