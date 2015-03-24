function init() {
    var navLinks = document.querySelectorAll("header nav a");
    for(var i = 0; i < navLinks.length; i++) {
        var link = navLinks[i];

        // lisätään elementille id, josta päätellään näytettävä artikkeli
        link.id = i;

        // lisätään tapahtumankuuntelija tapahtumalle click. huom! ero onclick-attribuuttiin
        link.addEventListener('click', handleLinkClick, false);
    }

    displaySection(0);
}

function displaySection(index) {
    var sections = document.getElementsByTagName("section");

    for(var i = 0; i < sections.length; i++) {
        if (index == i) {
            sections[i].className='';
        } else {
            sections[i].className='hidden';
        }
    }
}

function handleLinkClick(eventInformation) {
    var origin = eventInformation.target;

    // kutsutaan erillistä displayArticle-funkiota, joka
    // näyttää halutun artikkelin
    displaySection(origin.id);

    // kielletään selainta tekemästä oletustoiminto (siirtyminen)
    eventInformation.preventDefault();
}