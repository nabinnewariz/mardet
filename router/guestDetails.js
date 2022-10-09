const express = require('express');
const router = express.Router();

const Marriagedata = require('../model/guest_schema');

router.post("/Marriagedata",(req,res) => {
    console.log(req.body);
    const Marriagedocument = new Marriagedata(req.body);
    Marriagedocument.save().then(()=> {
    console.log(Marriagedocument);
    }).catch((err)=> {
        console.log(err);
    })
    res.send("hey are you there ? ");
})

router.get("/Marriagedata",cors(), async(req,res) => {
    try {
        const marriageData = await Marriagedata.find();
        res.send(marriageData);
    }catch(e){
        res.send(e); 
    }
})

module.exports = router;
