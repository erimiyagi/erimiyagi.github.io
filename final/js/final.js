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

WebFont.load({
    google: {
      families: [
         'fontfamilynameofyourchoice'
      ]
    }
  });


  /*rental price*/

  const requestURL = 'https://erimiyagi.github.io/mysite/final/rental.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);// temporary checking for valid response and data parsing


        const prophets = jsonObject['prophets'];
        for (let i = 0; i < prophets.length; i++) {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');

        h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;

        card.appendChild(h2);
            document.querySelector('.cards').appendChild(card);
            let dateBirth = document.createElement('p');
            let placeBirth = document.createElement('p');
            let image = document.createElement('img');

            dateBirth.textContent = "Date of Birth: " + prophets[i].birthdate;
            placeBirth.textContent = "Place of Birth: " + prophets[i].birthplace;
            image.setAttribute('src', prophets[i].imageurl);

            card.appendChild(dateBirth);
            card.appendChild(placeBirth);
            card.appendChild(image);
            card.setAttribute("class", "card")
            document.querySelector('.cards').appendChild(card);
        }

        
    });