function toggleMenu(){
    console.log(document.getElementById("primaryNav").classList);
    document.getElementById("primaryNav").classList.toggle("hide");
}

function updateBox(){
    let lastUpdate = "Last Updated: " + document.lastModified;
    let date = new Date().getFullYear();

    document.getElementById('year').innerHTML = date;
    document.getElementById('updated').innerHTML = lastUpdate;
}

document.getElementById('lastModified').innerHTML = `Last Updated: ${document.lastModified}`;


