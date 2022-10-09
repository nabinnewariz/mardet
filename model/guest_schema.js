const mongoose = require("mongoose");


//Marriage guest details (documents or Schema for marriage Guest Data)
let guestDetailsSchema = new mongoose.Schema({
    firstname : {
        type: String
    },
    lastname: {
        type: String,
    },
    location: {
        type: String,
    },
    Veggie: {
        type: Number,
    },
    chicken: {
        type: Number,
    },
    mutton: {
        type: Number,
    },
    fish: {
        type: Number,
    },
    total : {
        type: Number
    }
})

//GuestDetails is the collection which i have created with the name in DB
const Marriagedata = new mongoose.model('Marriagedata', guestDetailsSchema);
module.exports = Marriagedata;