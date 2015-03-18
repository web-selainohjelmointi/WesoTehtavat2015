// testikoodi:
var kivi = new Tavara("kivi", 3);
var kirja = new Tavara("kirja", 7);
var pumpuli = new Tavara("pumpuli", 0.001);

var laukku = new Matkalaukku(10);
var vuitton = new Matkalaukku(3);

var schenker = new Ruuma(15);


laukku.lisaa(kivi);
console.log("laukun paino, pitäisi olla 3: " + laukku.paino());
laukku.lisaa(kivi); // virhe: "Tavara lisätty jo, ei onnistu!"

laukku.lisaa(kirja);
console.log("laukun paino, pitäisi olla 10: " + laukku.paino());

laukku.lisaa(pumpuli); // virhe: "Liian painava, ei pysty!"

console.log("laukun paino, pitäisi olla 10: " + laukku.paino());


schenker.lisaa(laukku);
schenker.lisaa(pumpuli); // virhe: Vääränlainen esine, ei onnistu!

console.log("Ruuman paino, pitäisi olla 10: " + schenker.paino());

vuitton.lisaa(pumpuli);
schenker.lisaa(vuitton);
console.log("Ruuman paino, pitäisi olla noin 10.001: " + schenker.paino()); 

pumpuli.paino = 300;
console.log("Ruuman paino, pitäisi olla 310: " + schenker.paino()); // hups!
