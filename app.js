const express=require("express");
const bodyParser=require("body-parser");
const path =require('path');
//let __dirname = path.dirname(__filename);

// app.use(express.static(__dirname +'/public'));

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://root:Password@hopehack.g8olv.mongodb.net/?retryWrites=true&w=majority');
var db=mongoose.connection;
db.on('error', console.log.bind(console, "connection error"));
db.once('open', function(callback){
   console.log("connection success");
})
var app=express();

app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
   extended: true
}));
app.use(express.static(__dirname +'/public'));


app.post('/sign_up', function(req,res){
   var name = req.body.name;
   var email =req.body.email;
   var pass = req.body.password;
   var phone =req.body.phone;

   var data = {
      "name": name,
      "email":email,
      "password":pass,
      "phone":phone
   }
   db.collection('details').insertOne(data,function(err, collection){
   if (err) throw err;
      console.log("Record inserted Successfully");
      return res.redirect('/success');
   });
    // return res.redirect('/success');
})



app.get('/success', function (req, res) {
  res.sendFile(__dirname + "/public/" +  "/success.html");
});

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/public/" +  "/index.html");
  });

  app.get('/live', function (req, res) {
    res.sendFile(__dirname + "/public/" +  "/live.html");
  });

// respond with status 200
//confirmation 

app.get('/contact',function(req,res){
   res.set({
      'Access-control-Allow-Origin': '*'
   });
   return res.redirect('/subs.html');
}).listen(process.env.PORT || 3000)

//path for logo
app.get('/IMG/COVID.png', (req, res) => {
    res.sendFile('/Users/juanhdz/Documents/HopeHacks/IMG/COVID.png');
});

//path for bg image 
app.get('/cov-ex.jpg', (req, res) => {
    res.sendFile('/Users/juanhdz/Documents/HopeHacks/cov-ex.jpg');
});



