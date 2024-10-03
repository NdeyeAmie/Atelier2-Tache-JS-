const number = 14;
console.log(typeof number + " " + "4");
const typeDeVariable = number.toString();
console.log(typeof typeDeVariable);

// alert("Le type de variable est :" + " " + number)

let dateAujourdhui = new Date();
// recuperer les jour de la semaine
let jours = ["Dimanche", "Lundi" , "Mardi" , "Mercredi" , "Jeudi" , "Vendredi", "Samdei"]
let jourSemaine = jours[dateAujourdhui.getDay()];

// Recuperer les Mois dee l'annee 
let moisAnnee = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
let mois = moisAnnee[dateAujourdhui.getMonth()];

let jourMois = dateAujourdhui.getDate();
let annee = dateAujourdhui.getFullYear();

alert("La date d'aujourd'hui est :" + " " + jourSemaine + " " + jourMois + " " + mois + " " + annee)
 