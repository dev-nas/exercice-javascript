// javascript
const mot = 'simplon';


function capitalize(word){
    //traitement
    //1 - on recupere le premiere lettre
    const firstLetter = word[0].toUpperCase();
    //2 - je la stock dans une variable
    //3 - je la mets en majuscule
    //4 - On l'affiche 
    console.log(firstLetter);
    //5 - On stock le reste du mot dans une variable qu'on met en minuscule
    const restOfWord = word.substr(1).toLowerCase();
    //6 - on concatene dans une variable
    const response = `${firstLetter}${restOfWord}`;
    const response = firstLetter + restOfWord;
    //7 - on retourne la reponse
    console.log capitalize(word);
};



// exercice 1 on additionne les deux constantes//

/*const num1="4";
const num2="5";

const resultat = num1 + num2;

console.log(resultat);*/


const x = 4 + 5;
document.write(x);


//exercice 2 les tableaux

const villes = ['Paris','Marseille','Nice','Saint tropez','Bordeaux'];
console.log(villes[3]);

villes.push('Toulon');
console.log (villes [2]);

ville.splice(2, 1);
console.log (villes);

//exercice 3 les boucles


const array1 = [2, 4, 8];

for (let i=0 ; i<array1.length ; i++){
  console.log(Math.pow(array1[i],2));
}

const promo = [12, 13, 17, 3, 14, 18];
var somme= 0
var n=promo.length;
for (let i=0 ; i<promo.length ; i++){
somme = somme + promo [i];

}

var moyenne = somme/n;
  console.log(moyenne);

  /*var date = new Date();
  var uneDate = new Date(2019, 6, 6, 11, 10, 10);
  var uneAutreDate = new Date(annee, mois, jour);
  var derniereDate = new Date(millisecondes);*/

  var boite = document.querySelector('div'); // variable objet
   function horloge() 
   {
      var heure =new Date();
	   var heureGMT = heure.toGMTString();
	   boite1.textContent = "il est : " + heure.getHours()+":"+ heure.getMinutes()+":"+ heure.getSeconds() + " mais en GMT il est : " + heureGMT;
   }
   setInterval("horloge()", 1000);

    var aujourdhui = new Date(); 
    var annee = aujourdhui.getFullYear(); // retourne le millésime
	var mois = aujourdhui.getMonth()+1; // date.getMonth retourne un entier entre 0 et 11 donc il faut ajouter 1
	var jour = aujourdhui.getDate(); // retourne le jour (1à 31)
	var joursemaine = aujourdhui.getDay() ; // retourne un entier compris entre 0 et 6 (0 pour dimanche)
	var tab_jour=new Array("Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi");
	document.write('Nous sommes le : ' +  tab_jour[joursemaine] + ' ' + jour + '/' + mois + '/' + annee) ; 

fonction direbonjour() {
	let salut;


if (7 >= heure && heure <= 17){
console.log ('Bonjour');
} else if (17 =< heure && heure >= 24){
console.log ('Bonsoir');
}
	


  //exercice 4 les conditions


const age = 19;
  if (age >=18) {
  	    console.log('On peut voter');
  }
  else {
  		console.log('Ne peut pas voter');
  };
  

  //exercice 5 les fonctions//

const num1= 3 ;
const num2= 4 ;

const add = (num1, num2) => {
	let resultat = num1 + num2;
return resultat;
};

console.log(add(num1,num2));

const square =(number)=>{
	let resultat =i*i ;
	return resultat;

};
console.log(square(i));


const beatles =["paul","john","ringo","george"];











  
 




