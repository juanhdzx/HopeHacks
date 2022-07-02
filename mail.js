//Chunk 3 - 
const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');


const auth = {
auth: {
    api_key: '319c447fdde879ef0241a8c02757bca7-77985560-8dca8565', 
    domain: 'sandbox28a40e46fb804bc0801d98cafd53a825.mailgun.org'
}
};

const transporter = nodemailer.createTransport( mailGun(auth));

//chunk 4  - 
const sendMail = (email, name, text, cb) => {
const mailOptions = {
    from: email,
    to: 'jhernandez@r2hstudent.org',
    name,
    text
}; 

transporter.sendMail(mailOptions, function(err, data) {
    if (err) {
        cb(err, null); // same as = console.log('Error ocurred');
    } else {
        cb(null, data); // console.log('Message sent!');
    }
});
};

module.exports = sendMail;

// Name
//text
//from 
