//Chunk 1 - get express, and initialize it, use app.get to get route and render html
const express = require('express');
const log = console.log; // to prevent writing "console.log" so much
const app = express();
const sendMail = require('./mail');
const path = require('path');

const PORT = 8080;

// Chunk  2 - Be able to send data 
//Data parsing 
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// email, name, text
app.post('/email', (req, res) => {
    // TODO
    // send email here
    const { name, email, text } = req.body;
    console.log('Data: ', req.body); // access data coming from user 

    sendMail(email, name, text, function (err, data) {
        if (err) {
            res,status(500).json({ message: 'Internal Error' });// sends message back to client 
        } else {
            res.json({ message: 'Email sent!' });
        }
    });
    // res.json({ message: 'Message recieved!'})
}); 

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'subs.html')); //way to configure html file
});

app.listen(PORT, () => log('Server is starting on PORT, ', 8080));
