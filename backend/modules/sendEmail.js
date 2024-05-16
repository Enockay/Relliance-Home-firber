const nodemailer = require('nodemailer');

const BookPackage = async (Name, location, amount, package, contact, email,Date,Time) => {
    try {
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            }
           
        });
        
        let customerMailOptions = {
            from: process.env.EMAIL_FROM, // Your email as the sender
            to: email, 
            subject: 'Your Reliance Home Fibre Package Booking Confirmation',
            text: `Dear ${Name},\n\nThank you for booking our Home Fibre Package. Here are your booking details:\n\nName: ${Name}\nLocation: ${location},\nAmount: ${amount}\nPackage: ${package},\nContact: ${contact},\n\nBest regards\nReliance Team will get back to you in the next 2-3hrs`
        };

        let ownerMailOptions = {
            from:process.env.EMAIL_FROM, // Your email as the sender
            to: process.env.EMAIL_OWNER, // Shop owner's email address
            subject: 'New Reliance Home Fibre Package Booking',
            text: `A new booking has been made. Here are the details:\n\nName: ${Name}\nLocation: ${location}\nAmount: ${amount}\nPackage: ${package}\nContact: ${contact}\n,Date of Booking :${Date}\n Time : ${Time}`
        };

        await transporter.sendMail(customerMailOptions);
        // Send email to the shop owner
        let info = await transporter.sendMail(ownerMailOptions);
       
        return info;
    } catch (error) {
        throw error;
    }
};

module.exports = BookPackage;
