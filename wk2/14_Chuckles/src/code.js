var chuckles = {};

chuckles.gui = (function () {
    function show() {
        var chucklesElement = document.getElementById("chuckles");

        clear(chucklesElement);
        populate(chucklesElement);
    }

    function clear(element) {
        while (element.firstChild) {
            element.removeChild(element.firstChild);
        }
    }

    function populate(element) {
        var chucks = chuckles.data.list();
        for (var i = 0; i < chucks.length; i++) {
            addChuckle(element, chucks[i]);
        }
    }

    function addChuckle(element, chuckle) {
        // do something relevant here

    }

    return {
        show: show
    };

})();

chuckles.data = (function (displayHook) {
    // toteuta tehtävän vaatima toiminnallisuus tänne -- ota myös selvää
    // mikä ihme tuo displayHook on

    // tutustu myös ylläolevaan chuckles guihin -- siinä on hyötyä huomattavasti
    // jos data tarjoaa list-funktion, millä mahdolliseen dataan pääsee käsiksi


    function load(url) {
        // tässä voi aloittaa datan lataamisesta
    }



    return {
        load: load
    };


})(chuckles.gui.show);

function init() {
    var url = "";

    chuckles.data.load(url);
}

