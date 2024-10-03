//  Déclarer une variable de type int et la convertir en string puis l’afficher par alerte

// Déclaration d'une variable de type entier
let nombre = 42;
console.log(typeof nombre);

// Conversion en string
let nombreEnString = nombre.toString(); //La méthode toString() renvoie un objet sous forme de chaîne . 

// Afficher par alerte
alert("Le nombre en string est : " + nombreEnString);


// Déclaration de la date actuelle
let dateAujourdhui = new Date();

// Récupérer le jour, mois et année
let jour = dateAujourdhui.getDate();
let mois = dateAujourdhui.getMonth() + 1; // Les mois commencent à 0
let annee = dateAujourdhui.getFullYear();

// Formater la date au format jj-mm-yyyy
// La concaténation est  le fait de  rassembler deux chaines de caractères pour en former une nouvelle.
let dateFormatee = jour + "-" + mois + "-" + annee;  //concatenation

// Afficher par alerte
alert("La date d'aujourd'hui est : " + dateFormatee);