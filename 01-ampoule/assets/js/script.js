/* Attendre que le DOM soit complètement chargé avant d'exécuter le script quand le lien du script
	est placé dans le head
*/
document.addEventListener("DOMContentLoaded", function(){
    
    //Mes variables
    let myButton = document.querySelector("#toggle-button");
    let img = document.querySelector("img");
    let body = document.querySelector("body");

    // Ecoute d'évènement de clic sur le bouton.
    myButton.addEventListener("click", function(){

        // Est-ce que le bouton dit que la lumière est allumée ?
        if(myButton.innerHTML === "Allumer la lumière" ){
              
            //Changer la source de la balise img
            img.src = "assets/img/on.png";
            //Changer le style backgroundColor
            body.style.backgroundColor = "#edd37c";
            //Changer le texte
            myButton.innerHTML = "Eteindre la lumière";   

        //Sinon
        }else {

            //Changer la source de la balise img
            myButton.innerHTML = "Allumer la lumière";
            //Changer le style backgroundColor
            img.src = "assets/img/off.png";
            //Changer le texte
            body.style.backgroundColor = "rgb(79, 79, 79)";

        }

    })
})