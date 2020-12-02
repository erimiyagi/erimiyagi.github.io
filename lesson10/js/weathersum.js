const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=2b7568d348474360f18370d64df7ac87";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    const desc = jsObject.weather[0].description;
    document.getElementById('current').textContent = desc
    document.getElementById('temp').textContent = Math.round(jsObject.main.temp);
    document.getElementById('humidity').textContent = jsObject.main.humidity
    document.getElementById('speed').textContent = jsObject.wind.speed
    
  });

/*
  const apiURLf = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=2b7568d348474360f18370d64df7ac87";
  fetch(apiURLf)
      .then((response) => response.json())
      .then((jsObject) => {
          const forecast = jsObject.list.filter(x => x.dt_txt.includes("18:00:00"));
          let day = 1
          const weekdays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
          forecast.forEach(x => {
              const d = new Date(x.dt_txt);
              const imagesrc = `https://openweathermap.org/img/w/${x.weather[0].icon}.png`;
              document.getElementById(`dayofweek${day}`).textContent = weekdays[d.getDay()];
              document.getElementById(`temp${day}`).textContent = Math.round(x.main.temp)
              document.getElementById(`icon${day}`).setAttribute("src", imagesrc)
              document.getElementById(`iicon${day}`).setAttribute("alt", desc)
              day++
          });
  
      });
      */

     const apiURLicon = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=d2c067f6566bb0ca2720c9aca11da2d8';

     fetch(apiURLicon)
         .then((response) => response.json())
         .then((jsObject) => {
     
             const forecast = jsObject.list.filter(x => x.dt_txt.includes('18:00:00'));
             const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
     
             for (let day = 0; day < forecast.length; day++) {
     
                 const d = new Date(forecast[day].dt_txt);
                 const imageSrc = forecast[day].weather[0].icon;
     
                 document.getElementById(`day${day+1}`).textContent = days[d.getDay()];
                 document.getElementById(`icon${day+1}`).setAttribute('src', 'http://openweathermap.org/img/wn/' + imageSrc + '.png');
                 document.getElementById(`icon${day+1}`).setAttribute('alt', forecast[day].weather[0].description);
                 document.getElementById(`forecastDay${day+1}`).textContent = forecast[day].main.temp + ' °F';
     
             }
         });
     