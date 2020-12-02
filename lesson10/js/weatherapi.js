/*const apiURLf = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=d2c067f6566bb0ca2720c9aca11da2d8';

fetch(apiURLf)
    .then((response) => response.json())
    .then((jsObject) => {

        const forecast = jsObject.list.filter(x => x.dt_txt.includes('18:00:00'));
        console.log(forecast);

        const weekdays = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
        for (let day = 0; day < forecast.length; day++) {

            const d = new Date(forecast[day].dt_txt);
            const imageSrc = forecast[day].weather[0].icon;

            document.getElementById(`dayWeek${day+1}`).textContent = weekdays[d.getDay()];
            document.getElementById(`imgDay${day+1}`).setAttribute('src', 'http://openweathermap.org/img/wn/' + imageSrc + '.png');
            document.getElementById(`imgDay${day+1}`).setAttribute('alt', forecast[day].weather[0].description);
            document.getElementById(`forecastDay${day+1}`).textContent = forecast[day].main.temp + ' °F';

        }
    });*/

    const apiURLw = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=d2c067f6566bb0ca2720c9aca11da2d8';

    fetch(apiURLw)
        .then((response) => response.json())
        .then((jsObject) => {
    

            const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';
            const desc = jsObject.weather[0].description;
            document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
            document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
            document.getElementById('icon').setAttribute('alt', desc);

            console.log(jsObject);

            document.getElementById('current-temp').textContent = desc
            document.getElementById('current-temp').textContent = jsObject.main.temp;
            document.getElementById('windSpeed').textContent = jsObject.wind.speed;
            document.getElementById('pressure').textContent = jsObject.main.pressure;
            document.getElementById('currently').textContent = jsObject.weather[0].description;
    
    
        });


