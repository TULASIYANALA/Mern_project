const mongoose = require('mongoose');
const dotenv = require("dotenv");
dotenv.config();


url = "mongodb+srv://tulasiyanala0909:Tulasi2002@cluster0.mj3mqnc.mongodb.net/Rec";


mongoose.connect(url, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log("connected Success")
    }

})
