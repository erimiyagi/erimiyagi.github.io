function windChill(){
    let t = document.getElementById('currentTemp').innerHTML;
    let w = document.getElementById('windSpeed').innerHTML;
    let currentTemp = parseFloat(t);
    let windSpeed = parseFloat(w);
    if (currentTemp <= 50 && windSpeed > 3) {
        let f = 35.74 + 0.6215 * f - (35.75 * Math.pow(w, 0.16)) + (0.4275 * f * (Math.pow(w, 0.16)));
        document.getElementById('windChill').innerHTML = Math.round(f);
    } else {
        document.getElementById('windChill').innerHTML = "N/A";
    }
}

