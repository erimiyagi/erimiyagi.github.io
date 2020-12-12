const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=3d456a1e11787f0c712ca8feff3a6c15";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    const desc = jsObject.weather[0].description;
    document.getElementById('current').textContent = desc
    document.getElementById('temp').textContent = Math.round(jsObject.main.temp);
    document.getElementById('humidity').textContent = jsObject.main.humidity;
    document.getElementById('speed').textContent = jsObject.wind.speed;

    function windChill(){
      let t = document.getElementById('temp').innerHTML;
      let w = document.getElementById('speed').innerHTML;
      let temp = parseFloat(t);
      let speed = parseFloat(w);
      if (temp <= 50 && speed > 3) {
          let f = 35.74 + 0.6215 * f - (35.75 * Math.pow(w, 0.16)) + (0.4275 * f * (Math.pow(w, 0.16)));
          document.getElementById('windChill').innerHTML = Math.round(f);
      } else {
          document.getElementById('windChill').innerHTML = "N/A";
      }
  
  
  
  windChill();
  
  };
    
  });


     const apiURLicon = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=3d456a1e11787f0c712ca8feff3a6c15';

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

const townsURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(townsURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        const towns = jsonObject['towns'];
        for (let i = 0; i < towns.length; i++) {
            if (towns[i].name == "Preston") {

                let div = document.createElement('div');
                let ev1 = document.createElement('p');
                let ev2 = document.createElement('p');
                let ev3 = document.createElement('p');

                ev1.textContent = towns[i].events[0];
                ev2.textContent = towns[i].events[1];
                ev3.textContent = towns[i].events[2];

                div.appendChild(ev1);
                div.appendChild(ev2);
                div.appendChild(ev3);
                document.querySelector('.towns').appendChild(div);
            }
        }
    });
   