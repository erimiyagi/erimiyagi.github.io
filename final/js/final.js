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

  const requestURL = 'https://erimiyagi.github.io/final/rental.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);// temporary checking for valid response and data parsing


        const rental = jsonObject['rental'];
        for (let i = 0; i < rental.length; i++) {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');

        h2.textContent = rental[i].name;

        card.appendChild(h2);
            document.querySelector('.prices').appendChild(card);
            let maxP = document.createElement('p');
            let half = document.createElement('p');
            let full = document.createElement('p');
            let walkH = document.createElement('p');
            let walkF = document.createElement('p');
            let image = document.createElement('img');


            maxP.textContent = "Max Person: " + rental[i].max;
            half.textContent = "Half Day (3 hrs): " + rental[i].half;
            full.textContent = "Full Day: " + rental[i].full;
            walkH.textContent = "Half Day: (3 hrs) " + rental[i].walkinHalf;
            walkF.textContent = "Full Day: " + rental[i].walkinFull;
            image.setAttribute('src', rental[i].imageurl);

            card.appendChild(maxP);
            card.appendChild(half);
            card.appendChild(full);
            card.appendChild(walkH);
            card.appendChild(walkF);
            card.appendChild(image);
            card.setAttribute("class", "card")
            document.querySelector('.prices').appendChild(card);
        }

        
    });