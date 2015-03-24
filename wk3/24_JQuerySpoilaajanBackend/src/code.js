var spoilaaja = {};

spoilaaja.View = function (containerId) {
    var container = document.getElementById(containerId);
    var listener;

    // julkiset metodit
    this.render = function (data, key, value) {
        if (data !== false) {
            renderAll(data);
        } else {
            renderSingle(key, value);
        }
    }

    this.setListener = function (actionListener) {
        listener = actionListener;
    }

    // apufunktiot
    function renderAll(data) {
        clear();

        for (var key in data) {
            renderSingle(key, data[key]);
        }
    }

    function clear() {
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
    }

    function renderSingle(key, value) {
        var element = document.getElementById(key);

        if (!element) {
            // jos elementtiä ei ole vielä olemassa, luodaan sellainen
            createElement(key, value);
        }

        document.getElementById(key).value = value;
    }

    function createElement(key, value) {
        var article = document.createElement("article");
        var label = document.createElement("label");
        var textField = document.createElement("input");
        textField.type = "text";

        label.appendChild(document.createTextNode(key));
        textField.id = key;
        textField.value = value;

        article.appendChild(label);
        article.appendChild(textField);

        container.appendChild(article);

        // jokaiseen elementtiin lisätään tapahtumankuuntelija
        if (listener) {
            textField.addEventListener("change", function (eventInformation) {
                var textField = eventInformation.target;
                listener(textField.id, textField.value);
            }, false);
        }
    }
}

spoilaaja.Model = function (initialData) {
    var data = initialData;
    var listener;

    this.update = function (key, value) {
        data[key] = value;
        if (!listener) {
            console.log("Model update called, but listener has not been set :(");
            return;
        }

        listener(key, value);
    }

    this.get = function (key) {
        return data[key];
    }

    this.getAll = function () {
        return data;
    }

    this.setListener = function (action) {
        listener = action;
    }
}


spoilaaja.init = function () {

    var data = {};
    data["Running Blind"] = "Murhaaja on nainen!";
    data["Cat's cradle"] = "se jäätävä homma...";

    var model = new spoilaaja.Model(data);
    var view = new spoilaaja.View("spoilaukset");

    // tapahtuman kuuntelijat viewlle (näin alustava tulostus ei muuta modelia
    view.setListener(function (key, value) {
        if (model.get(key) !== value) {
            model.update(key, value);
        }
    });

    view.render(model.getAll(), false, false);

    model.setListener(function (key, value) {
        view.render(false, key, value);
    });

    // kytketään nappi toimimaan
    var nappi = document.querySelector("#input #button");
    nappi.addEventListener("click", function (eventInformation) {
        var kirja = document.querySelector("#input #kirja").value;
        if (!kirja) {
            return;
        }
        var spoilaus = document.querySelector("#input #spoilaus").value;

        model.update(kirja, spoilaus);
    }, false);
}