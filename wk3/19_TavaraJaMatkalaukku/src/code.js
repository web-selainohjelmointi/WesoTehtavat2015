function Tavara(nimi, paino) {
    this.nimi = nimi;
    this.paino = paino;
}

function Matkalaukku(maksimipaino) {
    this.tavarat = new Array();
    this.maksimipaino = maksimipaino;
}

Matkalaukku.prototype.sisaltaa = function(tavara) {
    for(var i = 0; i < this.tavarat.length; i++) {
        if(this.tavarat[i] === tavara) {
            return true;
        }
    }
    
    return false;
}

Matkalaukku.prototype.paino = function() {
    var paino = 0;
    for(var i = 0; i < this.tavarat.length; i++) {
        paino += this.tavarat[i].paino;
    }
    
    return paino;
}

Matkalaukku.prototype.lisaa = function(tavara) {
    if(!(tavara instanceof Tavara)) {
        console.log("Vääränlainen esine, ei onnistu!");
        return;
    }
    
    if(this.sisaltaa(tavara)) {
        console.log("Tavara lisätty jo, ei onnistu!");
        return;
    }
    
    if(this.paino() + tavara.paino > this.maksimipaino) {
        console.log("Liian painava, ei pysty!");
        return;
    }
    
    this.tavarat.push(tavara);
}

// testikoodi:
var kivi = new Tavara("kivi", 3);
var kirja = new Tavara("kirja", 7);
var pumpuli = new Tavara("pumpuli", 0.001);

var laukku = new Matkalaukku(10);
var vuitton = new Matkalaukku(3);



laukku.lisaa(kivi);
console.log("laukun paino, pitäisi olla 3: " + laukku.paino());
laukku.lisaa(kivi); // virhe: "Tavara lisätty jo, ei onnistu!"

laukku.lisaa(kirja);
console.log("laukun paino, pitäisi olla 10: " + laukku.paino());

laukku.lisaa(pumpuli); // virhe: "Liian painava, ei pysty!"

console.log("laukun paino, pitäisi olla 10: " + laukku.paino());


vuitton.lisaa(pumpuli);
console.log("vuittonin paino, pitäisi olla 0.001: " + vuitton.paino());

// seuraavien komentojen ei pitäisi toimia yhdessä
pumpuli.paino = 300; // jos tavaralla on metodi paino, tämä rikkoo ohjelman seuraavassa, muuten ei
console.log("vuittonin paino, pitäisi olla vieläkin 0.001: " + vuitton.paino()); // paino ei ole muuttunut
