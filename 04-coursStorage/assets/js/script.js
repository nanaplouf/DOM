/* 
   Le localStorage permet de stocker des informations dans le navigateur de manière persistante.
   Les données restent disponibles même après la fermeture du navigateur, jusqu'à ce qu'elles soient explicitement supprimées.
*/

/* 
   On peut stocker des données de manière temporaire dans sessionStorage (valables jusqu'à la fermeture du navigateur) 
   ou de manière prolongée dans localStorage (persistant jusqu'à suppression manuelle ou vidage du cache).
*/

let nom = "Marcellin";
let prenom = "Jules";

// Sélection des éléments du DOM avec leurs ID respectifs
let ageField = document.getElementById("age");
let jobField = document.getElementById("job");

/*  
    Définition de valeurs dans le localStorage avec setItem.
    Cette méthode stocke les données sous forme de paires clé-valeur, où les deux paramètres doivent être des chaînes de caractères.
    Le navigateur conserve ces données même après sa fermeture.
*/

localStorage.setItem("nom", nom);
localStorage.setItem("prenom", prenom);

// On peut aussi définir des valeurs directement comme propriété de localStorage (similaire à setItem).
localStorage.prenom = prenom;

let prenom2;
let nom2;

/* 
   Vérification de l'existence des données dans le localStorage. 
   Si elles existent, on les récupère. Sinon, on demande les informations à l'utilisateur.
*/

if (localStorage.prenom != null) {
	prenom2 = localStorage.prenom;
} else {
	prenom2 = prompt("Quel est votre prénom ?");
	localStorage.prenom = prenom2;
}

if (localStorage.nom != null) {
	nom2 = localStorage.nom;
} else {
	nom2 = prompt("Quel est votre nom ?");
	localStorage.nom = nom2;
}

// Affichage du prénom et nom récupérés dans la page HTML
document.querySelector("h1").innerHTML = `Hello ${prenom2} ${nom2}`;

/*******************************************************************/

let p = document.querySelector(".job");
let valid = document.querySelector("#valid");
let deleteBtn = document.querySelector("#delete");

// Récupération des données utilisateur depuis le localStorage et conversion en objet avec JSON.parse
let userParse = JSON.parse(localStorage.getItem("user"));

/* 
   Explication des méthodes :
   - JSON.stringify(objet) : Cette méthode convertit un objet JavaScript en une chaîne de caractères JSON.
   - JSON.parse(string) : Cette méthode convertit une chaîne de caractères JSON en un objet JavaScript.
   
   Pourquoi utiliser ces méthodes ?
   Le localStorage ne peut stocker que des chaînes de caractères. Pour stocker des objets, il est nécessaire de 
   les convertir en chaînes avec JSON.stringify avant de les stocker. Ensuite, pour réutiliser les données stockées, 
   il faut les reconvertir en objets avec JSON.parse.
*/

// Si l'objet utilisateur existe déjà dans le localStorage, on affiche ses données
if (userParse != null) {
	p.textContent = `Merci, vous êtes ${userParse.job} et vous avez ${userParse.age} ans`;
}

// Gestionnaire d'événements pour le bouton "Valider"
// Au clic, on crée un objet utilisateur avec les valeurs saisies, on le convertit en chaîne JSON et on le stocke
valid.addEventListener("click", function () {
	let user = {
		age: ageField.value,
		job: jobField.value,
	};
	localStorage.setItem("user", JSON.stringify(user));
	// p.textContent = `Merci, vous êtes ${user.job} et vous avez ${user.age} ans`;
});

// Gestionnaire d'événements pour le bouton "Supprimer"
// Au clic, on supprime l'objet utilisateur du localStorage
deleteBtn.addEventListener("click", function () {
	localStorage.removeItem("user");
	p.textContent = "Les données ont été supprimées.";
});
