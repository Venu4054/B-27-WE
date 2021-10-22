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
        console.log(`
          Country: ${t[i].name}
          Population:${t[i].population}
          Region:${t[i].region}
          SubRegion:${t[i].subregion}
          Currency:${t[i].currency}
          Flag:${t[i].flag}
          `);
      }
    } else {
      //it should not give you data
      console.log("Data is not available");
    }
  };
  
  xhr.send();