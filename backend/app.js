require('dotenv').config();
const express = require("express");
const cors = require("cors");
const BookPackage = require("./modules/sendEmail.js")
const app = express();
app.use(express.json());
app.use(cors());

app.post('/BookItems', async (req, res) => {
    const { Name, location, amount, package, contact, email,Date,Time } = req.body;

    try {
        const info = await BookPackage(Name, location, amount, package, contact, email,Date,Time);
        res.status(200).json({
            message: 'Booking successfully done check your email for booking info',
            info: info
        });
    } catch (error) {
        res.status(500).json({
            message: 'Failed to send email',
            error: error.message
        });
    }
});

app.get('/',(req,res) =>{
    res.send("Thank You for visiting relliance backend")
})
const PORT = process.env.PORT;
app.listen(PORT,()=>{
    console.log(`app running on Port ${PORT}`)
})