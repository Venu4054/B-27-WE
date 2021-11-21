//1.Get all the countries from Asia continent /region using Filter function
var xhr = new XMLHttpRequest();
xhr.open(
    "GET",
    "https://restcountries.com/v2/all"
  );
  xhr.onload = function () {
    //process the request and server will return the data
    if (xhr.status >= 200 && xhr.status < 300) {
      //converting the raw data into js notation format
      var t = JSON.parse(this.response);
    //  console.log(t);
  
      for (let i = 0; i < t.length; i++) {
        if(t[i].region==='Asia'){
         console.log(`
          Country: ${t[i].name}
          Population:${t[i].population}
          Region:${t[i].region}
          SubRegion:${t[i].subregion}
          Currency:${t[i].currency}
          Flag:${t[i].flag}
          `); 
        }
        
      }
    } else {
      //it should not give you data
      console.log("Data is not available");
    }
  };
  
  xhr.send();


//2.Get all the countries with population of less than 2 lacs using Filter function

var xhr = new XMLHttpRequest();
xhr.open(
    "GET",
    "https://restcountries.com/v2/all"
  );
  xhr.onload = function () {
    //process the request and server will return the data
    if (xhr.status >= 200 && xhr.status < 300) {
      //converting the raw data into js notation format
      var t = JSON.parse(this.response);
    //  console.log(t);
  
      for (let i = 0; i < t.length; i++) {
        if(t[i].population<200000){
         console.log(`
          Country: ${t[i].name}
          Population:${t[i].population}
          Region:${t[i].region}
          SubRegion:${t[i].subregion}
          Currency:${t[i].currency}
          Flag:${t[i].flag}
          `); 
        }
        
      }
    } else {
      //it should not give you data
      console.log("Data is not available");
    }
  };
  xhr.send();

  //3. Print the following details name, capital, flag using forEach function
  var newRequest = new XMLHttpRequest();
  //we will send a instruction by applying on load
  newRequest.onload = function () {
  if (newRequest.status >= 200 && newRequest.status <= 400) {
  var x = JSON.parse(newRequest.response);
  x.forEach((x) => console.log(`name:${x.name}, capital:${x.capital}, flag:${x.flag}`) //to display respective countries' name, capital, flag in the console
  );
  } else { 
  console.log(this.responseText);
  }
  }; 
  newRequest.open(
  "GET",
  "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json"
  );
  newRequest.send();

 //4.Print the total population of countries using reduce function 


var request=new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all','true');
request.send();
request.onload=function (){
    var countryData=JSON.parse(this.response);
    const population=countryData.reduce((acc,element)=>{
        return acc+element.population;
    },0)
    console.log(population);
}

 //4.Print the country which use US Dollars as currency.
 var newRequest = new XMLHttpRequest();
 //we will send a instruction by applying on load
 newRequest.open(
  "GET",
  "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json"
  );
 newRequest.onload = function () {
 if (newRequest.status >= 200 && newRequest.status <= 400) {
 var x = JSON.parse(newRequest.response);
 const currencyArray = x.map((x) => x.currencies);
 //creating an array of currencies related json data
 const nameArray = x.map((x) => x.name);
 //creating an array of country names later to be mapped with currencies
 //from the api we can observe that currencies in itself is an array of json thus this is combination of array-json-array
 const newArray = [];
 // //creating new array to remove json out of inner array
 for (key in currencyArray) {
 currencyArray[key][0].country = nameArray[key];
 newArray.push(currencyArray[key][0]);
 //logic to push inner currency json into newly created array so that filter function can be easily applied
 //in the final array to recognize to which country the USD belongs to, we add new element called country in to the currency json.
 }
 // console.log(newArray);
 const finalArray = newArray.filter((x) => x.code == "USD");
 // //using normal filter function on array of json with comparing code = USD to identify currency as requested in question as dollars
 console.log(finalArray);
 } else {
 console.log(this.responseText); 
 }
 };
 
