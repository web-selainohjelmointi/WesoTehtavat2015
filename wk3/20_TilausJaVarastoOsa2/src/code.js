var kauppa = {};

kauppa.hinnasto = (function () {
    function annaHinta(tuote) {
        return 3;
    }

    return {
        hinta: annaHinta
    };
})();


kauppa.Ostoskori = (function (hinnasto) {

    // konstruktori
    function Kori() {
        // oliokohtaiset muuttujat
        var ostokset = [];

        // oliokohtaiset metodit
        this.lisaa = function (tuotteenNimi) {
            if (!ostokset[tuotteenNimi]) {
                // jos tuotetta ei ole lisätty ostoskoriin, lisätään se sinne
                ostokset[tuotteenNimi] = 0;
            }

            // kasvatetaan tuotteen lukumäärää yhdellä
            ostokset[tuotteenNimi]++;
        }

        this.tuotteidenLukumaara = function () {
            var lukumaara = 0;
            for (var tuotteenNimi in ostokset) {
                lukumaara += ostokset[tuotteenNimi];
            }

            return lukumaara;
        }

        this.yhteishinta = function () {
            var summa = 0;
            for (var tuotteenNimi in ostokset) {
                summa += ostokset[tuotteenNimi] * hinnasto.hinta(tuotteenNimi);
            }

            return summa;
        }
    }

    return Kori;
})(kauppa.hinnasto);


var kori = new kauppa.Ostoskori();
kori.lisaa("kivi");
kori.lisaa("kivi");
kori.lisaa("kivi");
console.log(kori.tuotteidenLukumaara()); // 3

//console.log(kauppa.varasto.saldo("kivi")); // 0
//
//kori.tilaa();
//console.log(kori.tuotteidenLukumaara()); // 0
//console.log(kauppa.varasto.saldo("kivi")); // -3
//
//console.log(kauppa.varasto.saldo("paperi")); // 0
//
//kori.lisaa("kivi");
//
//var uusikori = new kauppa.Ostoskori();
//
//uusikori.lisaa("kivi");
//uusikori.lisaa("paperi");
//
//
//console.log(kori.tuotteidenLukumaara()); // 1
//console.log(uusikori.tuotteidenLukumaara()); // 2
//
//kori.tilaa();
//uusikori.tilaa();
//
//console.log(kauppa.varasto.saldo("kivi")); // -5
//console.log(kauppa.varasto.saldo("paperi")); // -1
//
//kauppa.varasto.lisaa("kivi", 7);
//console.log(kauppa.varasto.saldo("kivi")); // 2