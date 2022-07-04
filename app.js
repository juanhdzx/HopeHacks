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
        document.querySelector('.stat1').innerText = `Cases: ${info["cases"]}`
        document.querySelector('.stat2').innerText = `Deaths: ${info["deaths"]}`
        document.querySelector('.stat3').innerText = `Positive Test: ${info["positiveTests"]}`
        document.querySelector('.stat4').innerText = `Negative Test: ${info["negativeTests"]}`
        document.querySelector('.stat5').innerText = `New Cases: ${info["newCases"]}`
        document.querySelector('.stat6').innerText = `New Deaths: ${info["newDeaths"]}`
        document.querySelector('.stat7').innerText = `Vaccinations Completed: ${info["vaccinationsCompleted"]}`
        // document.querySelector('h3').innerText = `deaths: ${info["deaths"]}`
    })

    .catch(err => {

        console.log(`error ${err}`)

    });
}

