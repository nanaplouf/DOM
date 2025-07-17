// Éxécution au chargement du DOM
document.addEventListener("DOMContentLoaded", function (){

    let form = document.getElementById("quote-form");
    let authorName = document.getElementById("author-name");
    let text = document.querySelector("textarea");
    let myDivHTML = document.getElementById("quote-list");


    form.addEventListener("submit", (event)=>{
        // Empêche le rechargement de la page à la soumission du formulaire
        event.preventDefault();

        let citation = text.value;
        let author = authorName.value;

        if(citation && author){

            //créer une div
            let div = document.createElement("div");

            //affiche la même chose :
            div.innerHTML = "<p>" + citation + "</p> <p>" + author + "</p>";
            //div.innerHTML = `<p> ${citation} </p> <p> ${author}</p>`;

            //ajouter la div à la div dans le HTML
            myDivHTML.appendChild(div);

            // Réinitialise le formulaire
            text.value = "";
            authorName.value = "";

        }
        
    })

});
