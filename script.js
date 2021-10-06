document.getElementById("age").innerHTML = new Date().getFullYear() - 2002;


var phrase  = [ 
    "Bonjour à vous.",
    "Je suis Tom Planche.",
    "Bienvenue sur mon site.",
    ":)"
];

var part = 0;
var part_index = 0;
var intervalle_instance;
var elem = document.querySelector("#change");

function Ecrire() {
    var texte = phrase[part].substring(0, part_index + 1);
    elem.innerHTML = texte;
    part_index++;

    if (texte === phrase[part]) {
        clearInterval(intervalle_instance);
        setTimeout(function() {
            intervalle_instance = setInterval(Effacer, 25);
        }, 2000);
    }
};

function Effacer() {
    var texte = phrase[part].substring(0, part_index - 1);
    elem.innerHTML = texte;
    part_index--;

    if (texte === '') {
        clearInterval(intervalle_instance);

        if (part == (phrase.length - 1))
            part = 0;
        else
            part++;

            part_index = 0;

        setTimeout(function() {
            intervalle_instance = setInterval(Ecrire, 85);
        }, 600);
    }
};

intervalle_instance = setInterval(Ecrire, 85);


var menuBoxes = document.getElementsByClassName('lien');

for (var i = 0; i < menuBoxes.length; i++) {
    menuBoxes[i].onmouseover = function(e) {
        var color = '#'+Math.floor(Math.random()*16777215).toString(16);
        var colorString = '0px 0px 30px 0px ' + color;
        this.style['color'] = color;
    }  
};

function translateToEn() {

    phrase = [ 
        "Hello.",
        "I'm Tom Planche.",
        "Welcome to my website."
    ];
    document.getElementById('en').style.color = '#FE9900';
    document.getElementById('en').style.textDecoration = 'underline';
    document.getElementById('fr').style.color = 'wheat';
    document.getElementById('fr').style.textDecoration = 'none';
    document.getElementById('en').style.fontSize = '22px';
    document.getElementById('fr').style.fontSize = '20px'

    document.getElementById('aProposTitre').innerHTML = "About me :"
    
    document.getElementById('aProposTexte').innerHTML = "Tom Planche, 19yo. <br> 12th grade french student specialized in advanced mathematics + Digital and Computer Sciences."

    document.getElementById('competancesTitre').innerHTML = "My skills :"
    
    document.getElementById('competancesLangues').innerHTML = "Languages : French ( native ),&nbsp English (C1),&nbsp Spanish (B2)."
    
    
    document.getElementById('informatiqueTitre').innerHTML = "Computing :"
    document.getElementById('informatiqueLogiciels').innerHTML = "Softwear : Adobe Suite,&nbsp JetBrain Suite,&nbspMicrosoft Suite,&nbsp xCode,&nbsp Final Cut Pro X,&nbsp Logic Pro X."
    document.getElementById('certif').innerHTML = "Certification :<br>All <a class='lien' href='https://pix.fr'>Pix</a> levels validated."
    
    document.getElementById('experiencesProTitre').innerHTML = "Professional experiences :"
    document.getElementById('experiencesProSixSemaines').innerHTML = "Fixed term contract of six weeks at the Drive Leclerc of Tarbes at 20h/week (2019)."
    document.getElementById('experiencesProDeuxMois').innerHTML = "Full-time fixed-term contract for two months at Leclerc Meridien in Tarbes (2020)."

    document.getElementById('mesProjets').innerHTML = "My projects :"
    document.getElementById('scrapeFacebook').innerHTML = "Scrape of the free facebook stuff into my city."
    document.getElementById('scrapeDealabs').innerHTML = "Scrape of the best deals on <a class='lien' href=\"http:///www.dealabs.com\">Dealabs</a>."
    document.getElementById('scrapeTorrent').innerHTML = "Scrape of the latests torrents on a website, <a class='lien' href=\"https://github.com/TomPlanche/torrentScrape\">GitHub link</a>."

    document.getElementById('botTwi').innerHTML = "Twitter bot who responds with weather data from the city put un #."
    document.getElementById('botDiscord').innerHTML = "Discord bot who's using all my above scrapes."

    document.getElementById('meContacter').innerHTML = "Contact me :"

    document.getElementsByClassName('lien').style['color'] = "#FE9900"
};

function translateToFr() {

    phrase  = [ 
        "Bonjour à vous.",
        "Je suis Tom Planche.",
        "Bienvenue sur mon site."
    ];

    document.getElementById('fr').style.color = '#FE9900';
    document.getElementById('fr').style.textDecoration = 'underline';
    document.getElementById('en').style.color = 'wheat';
    document.getElementById('en').style.textDecoration = '';
    document.getElementById('fr').style.fontSize = '22px';
    document.getElementById('en').style.fontSize = '2Opx'

    document.getElementById('aProposTitre').innerHTML = "A propos de moi :"
    document.getElementById('aProposTexte').innerHTML = "Tom Planche, 19 ans. <br> Élève français en Terminale spécialité Mathes exeprtes avec Numérique et Sciences de l'Informatique au lycée Jean Dupuy à Tarbes."

    document.getElementById('competancesTitre').innerHTML = "Mes compétences :"
    document.getElementById('competancesLangues').innerHTML = "Langues : Français ( natif ),&nbsp Anglais C1,&nbsp Epagnol B2."
    document.getElementById('informatiqueTitre').innerHTML = "Informatique :"
    document.getElementById('informatiqueLogiciels').innerHTML = "Logiciels : Suite Adobe,&nbsp Suite JetBrain,&nbsp Suite Microsoft,&nbsp xCode,&nbsp Final Cut Pro X,&nbsp Logic Pro X."
    document.getElementById('certif').innerHTML = "Certification :<br>Tous les niveaux de <a class='lien' href='https://pix.fr'>Pix</a> validés."
    
    document.getElementById('experiencesProTitre').innerHTML = "Expériences professionnelles :"
    document.getElementById('experiencesProSixSemaines').innerHTML = "CDD de six semaines au Drive Leclerc de Tarbes à 20h/semaines (2019)."
    document.getElementById('experiencesProDeuxMois').innerHTML = "CDD à temps plein de deux mois au Leclerc Méridien de Tarbes (2020)."


    document.getElementById('mesProjets').innerHTML = "Mes projets :"
    document.getElementById('scrapeFacebook').innerHTML = "Scrape des objects gratuits de Facebook dans ma ville."
    document.getElementById('scrapeDealabs').innerHTML = "Scrape des meilleures promotions proposées par le site <a id='lien' href=\"http:///www.dealabs.com\">Dealabs</a>."
    document.getElementById('scrapeTorrent').innerHTML = "Scrape des derniers torrents proposés par un site, <a id='lien' href=\"https://github.com/TomPlanche/torrentScrape\">lien GitHub</a>."

    document.getElementById('botTwi').innerHTML = "Bot Twitter qui répond à une mention avec les données météos de la ville mise en #."
    document.getElementById('botDiscord').innerHTML = "Bot discord qui a pour commandes mes scrapes ci-dessus."

    document.getElementById('meContacter').innerHTML = "Me contacter :"

    document.getElementsByClassName('lien').style['color'] = "#FE9900"
};