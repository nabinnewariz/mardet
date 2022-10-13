const express = require('express');
const router = express.Router();
const cors = require('cors');
const Register = require('../model/register_schema')

router.post("/Register", cors(), (req, res) => {
    const RegistrationDocument = new Register(req.body);
    RegistrationDocument.save().then(()=> {
        console.log(RegistrationDocument);
    }).catch((err) => {
        console.log(err);
    })
    res.send("Registration is done");
})
router.post("/login", cors(), async(req,res) => { 
    try {
        const email = req.body.email;
        const pw = req.body.password;
        console.log(email, pw,"email","pw");
        const useremail = await Register.findOne({email: email});
        if (useremail.password === pw) {
            res.send('successfull')
        } else {
            res.send("Wrong Password")
        }
        // const registrationData = await Register.find();
        // res.send(registrationData);
    }catch(e){
        res.send(e).send("invalid credentials"); 
    }
})

module.exports = router;