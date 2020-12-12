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

