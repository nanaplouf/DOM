/* Attendre que le DOM soit complètement chargé avant d'exécuter le script quand le lien du script
	est placé dans le head
*/
document.addEventListener("DOMContentLoaded", function(){
    // SECTION 1 : SÉLECTION DES ÉLÉMENTS DU DOM
    let title = document.getElementById("title");
    console.log(title);

    // Sélection d'un élément par son nom de balise (le premier élément correspondant est sélectionné)
    let title2 = document.querySelector("h1");
    console.log(title2);

    // Sélection du dernier élément <li> dans la liste
    let liste = document.querySelector("li:last-child");
    console.log(liste);

    let liste2 = document.querySelectorAll("li");
    console.log(liste2);

    /************************************************************************/

    // SECTION 2 : MANIPULATION DU CONTENU HTML ET TEXTUEL

    let div = document.querySelector("div");
    console.log(div);

    // Modification du contenu HTML interne (en remplaçant tout le contenu)
    div.innerHTML = "Hello vous !";

    // Modification du texte interne (remplace le texte uniquement)
    div.innerText = "Heeeey !!!";

    /************************************************************************/

	// SECTION 3 : MODIFICATION DES STYLES

    // Ajouter des classes CSS définies dans un fichier CSS
    liste.classList.add("modif");
    
    // Retirer des classes CSS définies dans un fichier CSS
    liste.classList.remove("modif");

    // Fonction pour modifier les styles directement via JavaScript
    function modifier(){
        title.style.backgroundColor = "Salmon";
        title.style.color = "DarkSalmon";
        title.style.margin = "20px";
    }

    // Appel de la fonction pour appliquer les styles
    modifier();

    /************************************************************************/

	// SECTION 4 : INTERACTION AVEC LE DOM
    //Afficher la div
    div.style.display = "block";

    /************************************************************************/

	// SECTION 5 : CRÉATION ET AJOUT D'ÉLÉMENTS DANS LE DOM

    let button1 = document.querySelector("#add");
    let button2 = document.querySelector("#delete");

    button1.addEventListener("click", function (){
        let newList = document.createElement("li");

        newList.innerText = "Nouvel Elément.";

        let ul = document.querySelector("ul");

        ul.appendChild(newList);

    })

    /************************************************************************/

	// SECTION 6 : SUPPRESSION D'ÉLÉMENTS DU DOM

    button2.addEventListener("click", function (){
        let lastlistItem = document.querySelector("ul li:last-child");

        
        if(lastlistItem){
            lastlistItem.remove();
        }else{
            alert("Aucun élément à supprimer !");
        }
    })

})