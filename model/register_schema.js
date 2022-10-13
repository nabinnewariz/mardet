const mongoose = require("mongoose");


//Registration for marriage data 
let registrationSchema = new mongoose.Schema({
    firstname : {
        type: String
    },
    lastname: {
        type: String,
    },
    email: {
        type: String,
    },
    mobileNumber: {
        type: Number
    },
    password: {
        type: String,
    },
    confirmPassword: {
        type: String,
    }
});

// const Register = new mongoose.model("Register", registrationSchema);
const Register = new mongoose.model("Registration", registrationSchema);
module.exports = Register;