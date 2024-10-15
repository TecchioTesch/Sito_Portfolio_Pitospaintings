
let body = document.getElementById('main')

function getCookie(cookieName) {
    let cookie = {};
    document.cookie.split(';').forEach(function(el) {
        let [key,value] = el.split('=');
        cookie[key.trim()] = value;
    })
    return cookie[cookieName]
}

if(document.cookie.search("mode") == -1) {
    document.cookie="mode=light";
}

if (getCookie("mode") === "light"){
    body.className = "bodyLight";
} else {
    body. className = "bodyDark";
}

function change() {
    if (getCookie("mode") === "light") {
        body.className = "bodyDark";
        document.cookie="mode=dark";
    } else {
        body.className = "bodyLight";
        document.cookie="mode=light";
    }
}



// PER CAMBIARE PICCIONE nel pulsante per tornare indietro
const imgElement = document.getElementById('piccione');
const originalSrc = imgElement.src;
const hoverSrc = '/immagini/pic90.svg';

imgElement.addEventListener('mouseover', () => {
    imgElement.src = hoverSrc;
});

imgElement.addEventListener('mouseout', () => {
    imgElement.src = originalSrc;
});




