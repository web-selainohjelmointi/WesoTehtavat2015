var laskin;

function kasvataJaAseta() {
    laskin.kasvata();
    document.getElementById("laskuri").innerHTML = laskin.annaLuku();
}

function init() {    
    var nappi = document.getElementById("nappi");
    nappi.addEventListener("click", kasvataJaAseta, false);
}

