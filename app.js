document.querySelector('button').addEventListener('click',getFetch)

const chosenState= document.querySelector('input').value;


function getFetch(){
    const chosenState= document.querySelector('input').value.toUpperCase();
    const url =  `https://api.covidactnow.org/v2/state/${chosenState}.json?apiKey=c907fda3da124bc8b327d6fd7ee968da`

fetch(url)

    .then(res => res.json()) 
    // .then(res => {
    //     console.log(res.json().actuals)

    

    .then(data => {
       const info = (data.actuals)
       
       console.log(data.actuals["cases"])
        document.querySelector('h3').innerText = `Cases: ${info["cases"]}, Deaths: ${info["deaths"]}, Positive Test: ${info["positiveTests"]}, Negative Test: ${info["negativeTests"]}, New Cases: ${info["newCases"]}, New Deaths: ${info["newDeaths"]}, Vaccinations Completed ${info["vaccinationsCompleted"]}`
        // document.querySelector('h3').innerText = `deaths: ${info["deaths"]}`
    })

    .catch(err => {

        console.log(`error ${err}`)

    });
}

