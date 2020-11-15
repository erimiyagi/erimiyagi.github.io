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

  const imgToLoad = document.querySelectorAll("img[data-src]");
const loadImg = (img) => {
    img.setAttribute("src", img.getAttribute("data-src"))
    img.onload = () => {
        img.removeAttribute('data-src');
    };
};

const options = {
    threshold: 0,
    rootMargin: "0px 0px 50px 0px"

};

if ('intersectionObserver' in window){
    const observer = new IntersectionObserver((item, observer) => {
    items.forEach((item) => {
        if(item.isIntersectin){
            LoadImg(item.target)
            observer.unobserve(item.target)
        }
    })
    }, options)
    imgToLoad.forEach((img) => {
        observer.observe(img)
    })
}
else {
    imgToLoad.forEach((img) => {
        loadImg(img)
    })
}
