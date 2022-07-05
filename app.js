const express=require("express");
const bodyParser=require("body-parser");

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://root:Password@hopehack.g8olv.mongodb.net/?retryWrites=true&w=majority');
var db=mongoose.connection;
db.on('error', console.log.bind(console, "connection error"));
db.once('open', function(callback){
   console.log("connection succeeded");
})
var app=express();

app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
   extended: true
}));

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
   });
   return res.redirect('success.html');
})

// respond with status 200
//confirmation 

app.get('/',function(req,res){
   res.set({
      'Access-control-Allow-Origin': '*'
   });
   return res.redirect('subs.html');
}).listen(3000)

//path for logo
app.get('/IMG/COVID.png', (req, res) => {
    res.sendFile('/Users/juanhdz/Documents/HopeHacks/IMG/COVID.png');
});

//path for bg image 
app.get('/cov-ex.jpg', (req, res) => {
    res.sendFile('/Users/juanhdz/Documents/HopeHacks/cov-ex.jpg');
});


//
// 3rd part API
// console.log("server listening at port 3000");
// document.querySelector('button').addEventListener('click',getFetch)

// const chosenState= document.querySelector('input').value;


// function getFetch(){
//     const chosenState= document.querySelector('input').value.toUpperCase();
//     const url =  `https://api.covidactnow.org/v2/state/${chosenState}.json?apiKey=c907fda3da124bc8b327d6fd7ee968da`

// fetch(url)

//     .then(res => res.json()) 
//     // .then(res => {
//     //     console.log(res.json().actuals)

    

//     .then(data => {
//        const info = (data.actuals)

//        const icuCovidUsage =(data.actuals.icuBeds)

//        const hospitalBedCovidUsage = (data.actuals.hospitalBeds)

//        console.log(data.actuals["cases"])
//         document.querySelector('.stat1').innerText = `Cases: ${info["cases"]}`
//         document.querySelector('.stat2').innerText = `Deaths: ${info["deaths"]}`
//         document.querySelector('.stat3').innerText = `Positive Test: ${info["positiveTests"]}`
//         document.querySelector('.stat4').innerText = `Negative Test: ${info["negativeTests"]}`
//         document.querySelector('.stat5').innerText = `New Cases: ${info["newCases"]}`
//         document.querySelector('.stat6').innerText = `New Deaths: ${info["newDeaths"]}`
//         document.querySelector('.stat7').innerText = `Vaccinations Completed: ${info["vaccinationsCompleted"]}`
//         document.querySelector('.stat8').innerText = `Hospital Beds: ${hospitalBedCovidUsage["currentUsageCovid"]}`
//         document.querySelector('.stat9').innerText = `Contact Tracers: ${info["contactTracers"]}`
//         document.querySelector('.stat10').innerText = `ICU Beds: ${icuCovidUsage["currentUsageCovid"]}`
//         document.querySelector('.state-input').innerText = `Numbers for ${chosenState}`
//     })

//     .catch(err => {

//         console.log(`error ${err}`)

//     });
// }

