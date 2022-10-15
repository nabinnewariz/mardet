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
    let searchFisrtName = req.body.firstname;
    console.log(searchFisrtName,"searchFisrtName");
    // const searchFisrtName = new RegExp(req.body.firstname, 'i');
    // const searchLastName = req.body.lastname;
    // const searchlocation = re.body.location;
    const resultFirstName = await Marriagedata.find({firstname: searchFisrtName})
        // "$or": [
            // firstname: searchFisrtName
            // {firstName: {$regex: searchFisrtName}},
            // {lastName: {$regex: searchLastName}}, 
        //     {location: {$regex: searchlocation}}
        // ]
    // });
    res.status(200).send(resultFirstName);
   } catch (error) {
     res.send(error).send("invalid credentials");
   };
})

router.options('/Locationdata', cors())
router.post("/Locationdata", cors(), async(req,res) => {
   try {
    let searchlocation = req.body.location;
    const resultLoc = await Marriagedata.find({location: searchlocation})
    res.status(200).send(resultLoc);
   } catch (error) {
     res.send(error).send("invalid credentials");
   };
})

module.exports = router;
