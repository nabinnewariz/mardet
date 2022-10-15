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


router.post("/Searchdata", cors(), async(req,res) => {
   try {
    const searchFisrtName = req.body.firstName;
    const searchLastName = req.body.lastName;
    const searchlocation = re.body.location;
    const resultFirstName = await Marriagedata.find({
        // "$or": [
            firstName: searchFisrtName,
            // {firstName: {$regex: searchFisrtName}},
            // {lastName: {$regex: searchLastName}},
        //     {location: {$regex: searchlocation}}
        // ]
    }).then(result => {
        res.status(200).json(result);
       });
   } catch (error) {
     res.send(e).send("invalid credentials");
   };

   resultFirstName.then(result => {
    res.status(200).json(result);
   });
})

module.exports = router;
