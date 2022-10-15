const express = require('express');
const router = express.Router();
const cors = require('cors');

const Marriagedata = require('../model/guest_schema');

router.options('/Marriagedata', cors())
router.post("/Marriagedata",cors(),(req,res) => {
    console.log(req.body);
    const Marriagedocument = new Marriagedata(req.body);
    Marriagedocument.save().then(()=> {
    console.log(Marriagedocument);
    }).catch((err)=> {
        console.log(err);
    })
    res.send("hey are you there ? ");
});

router.get("/Marriagedata",cors(), async(req,res) => {
    try {
        const marriageData = await Marriagedata.find();
        res.send(marriageData);
    }catch(e){
        res.send(e); 
    }
});

router.options('/Searchdata', cors())
router.post("/Searchdata", cors(), async(req,res) => {
   try {
    const searchFisrtName = req.body.firstname;
    // const searchFisrtName = new RegExp(req.body.firstname, 'i');
    // const searchLastName = req.body.lastname;
    // const searchlocation = re.body.location;
    const resultFirstName = await Marriagedata.find({
        // "$or": [
            firstname: searchFisrtName
            // {firstName: {$regex: searchFisrtName}},
            // {lastName: {$regex: searchLastName}},
        //     {location: {$regex: searchlocation}}
        // ]
    });
    res.send(resultFirstName);
   } catch (error) {
     res.send(error).send("invalid credentials");
   };
})

module.exports = router;
