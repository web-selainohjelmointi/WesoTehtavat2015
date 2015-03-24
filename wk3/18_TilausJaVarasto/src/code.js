var kauppa = {};

kauppa.hinnasto = (function() {
    function annaHinta(tuote) {
        return 3;
    }

    return {
        hinta: annaHinta
    };
})();

kauppa.ostoskori = (function(hinnasto) {
    var ostokset = [];

    function lisaaOstos(tuotteenNimi) {
        if(!ostokset[tuotteenNimi]) {
            ostokset[tuotteenNimi] = 0;
        }

        ostokset[tuotteenNimi]++;
    }

    function tuotteitaYhteensa() {
        var lukumaara = 0;
        for(var tuotteenNimi in ostokset) {
            lukumaara += ostokset[tuotteenNimi];
        }
        
        return lukumaara;
    }

    function yhteishinta() {
        var summa = 0;
        for(var tuotteenNimi in ostokset) {
            summa += ostokset[tuotteenNimi] * hinnasto.hinta(tuotteenNimi);
        }
        
        return summa;
    }

    return {
        lisaa: lisaaOstos,
        tuotteidenLukumaara: tuotteitaYhteensa,
        yhteishinta: yhteishinta
    };
   
 })(kauppa.hinnasto);


kauppa.ostoskori.lisaa("kivi");
kauppa.ostoskori.lisaa("kivi");
kauppa.ostoskori.lisaa("kivi");
console.log(kauppa.ostoskori.tuotteidenLukumaara()); // 3
//console.log(kauppa.varasto.saldo("kivi")); // 0

//kauppa.ostoskori.tilaa();
//console.log(kauppa.ostoskori.tuotteidenLukumaara()); // 0
//console.log(kauppa.varasto.saldo("kivi")); // -3
//
//console.log(kauppa.varasto.saldo("paperi")); // 0

kauppa.ostoskori.lisaa("kivi");
kauppa.ostoskori.lisaa("kivi");
kauppa.ostoskori.lisaa("paperi");

//kauppa.ostoskori.tilaa();
//console.log(kauppa.varasto.saldo("kivi")); // -5
//console.log(kauppa.varasto.saldo("paperi")); // -1
//
//kauppa.varasto.lisaa("kivi", 7);
//console.log(kauppa.varasto.saldo("kivi")); // 2