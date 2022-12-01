
//async await fetch function for rest countries
async function RESTCountries(){
   
    // Fecting all the countries using the RESTCountries API 
    let res = await fetch(`https://restcountries.com/v2/all`)
    let countries = await res.json()
     
    //for each country lop is used to build the cards
    for(let i=0; i<countries.length; i++)
    {
        let row=document.querySelector(".row");
        let div=document.createElement("div");

        div.className="col-sm-6 col-md-4 col-lg-4 col-xl-4"
        
        let countriesCards =   displayCountry(countries[i]);
        div.innerHTML=countriesCards;
        row.appendChild(div)
    }
}
RESTCountries();

//display each country details in card
let displayCountry=(country)=>{
    let temp=`<div class="card h-100" >
              <div class="card-header">${country.name}</div>
                <div class="card-body">
                     <img class="flag1" src="${country.flags.png}" alt="">
                     <div class=align><br>
                     <p class="card-text"><b>Capital : </b>${country.capital}</p>
                     <p class="card-text"><b>Region : </b>${country.region}</p>
                     <p class="card-text"><b>Country Code : </b>${(country.alpha3Code)}</p>
                     <p class="card-text"><b>Population : </b>${country.population}</p>
                     <br>
                </div>
                <button class="btn btn-primary" onclick="showWeather('${country.name}')">Click for Weather</button>
               </div>
             </div>`;        
    return temp;
 }        
 
//to show weather message
let showWeather=(countryName)=>{

async function getWeather(){
try{
    //fetching weather api
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${countryName}&appid=50b31d8ba5cb90f8acea573777b7fabf`

    let res = await fetch(url)
    let data = await res.json()
    console.log(data)
 
    //  Build the Weather Card
        let weatherCard=`
            Country             :  ${countryName}
            LatLong             :  ${data.coord.lat}, ${data.coord.lon}
            Temperature     :  ${data.main.temp} 
            feels_like           :  ${data.main.feels_like}
            humidity           :  ${data.main.humidity}
            pressure            : ${data.main.pressure}
            WindSpeed       :  ${data.wind.speed}
            Weather            :  ${data.weather[0].description}
            
        `;
        //The output will be displayed using the alert
        alert(weatherCard);
}
catch(e){
       console.log("Some error occured inside getWeather Function"+e)
        }    
} getWeather();                    
}
