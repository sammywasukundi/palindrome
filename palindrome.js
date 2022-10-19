
// factorielle

const msg = document.getElementById("fact");
const btn = document.getElementById("btn");
const nbreEnter = document.getElementById("ligne");

let nbre;
const factorielle = (nbre) => {
    if(nbre <= 1)
        return 1;
    else 
        return(nbre * factorielle(nbre-1));
}
//alert(factorielle(1));
const afficher = () => {
    nbre = parseInt(nbreEnter.Value);
    if(isNaN(nbre))
    {
        alert('ceci ne pas un nombre');
        return;
    }
    else
    {
        msg.innerHTML="Le factorielle de " + nbre + "est " + factorielle(nbre);
        return;
    }
        
          
}


//openclassroom
/*
//On pointe sur l'élément de message
const espaceMessage = document.getElementById("message");
//On pointe sur l'élément de bouton
const bouton = document.getElementById("bouton");
//On pointe sur l'élément de champ de saisie de l'année
const numberInput = document.getElementById("number");


//On défini la variage année qu'on utilisera et un variable définissant l'age de la majorité
let number;

function factorielle(number){
  if(number <= 1) return 1;
  else return (number * factorielle(number-1));
}

function onCalcul(){
  //On récupère la saisie de l'année et on transforme le texte en nombre entier
  number = parseInt(numberInput.value);
  //Si la saisie n'est pas un nombre, on affiche un message d'erreur
  if(isNaN(number)){
    alert("Ceci n'est pas un nombre");
    return;
  }
  espaceMessage.innerHTML = "La factorielle de " + number + " est " + factorielle(number);
}*/

//objet date

var D = new Date();

var hour = D.getHours();
var minut = D.getMinutes();
var second = D.getSeconds();

alert("l'heure actuelle est : " + hour +':'+ minut +':'+ second);

var year =D.getFullYear();
var mounth =D.getMonth();
var day =D.getDay();

var mois =['janvier','Fevrier','mars','avril','mai','juin','juillet','aout','septembre','octobre','novembre','decembre'];
var jours = ['dimanche','lundi','mardi','mercredi','jeudi','vendredi','samedi'];

alert("la date actuelle est : " + jours[day]+ ' le ' + day + '/'+ mois[mounth] +'/'+ year);
