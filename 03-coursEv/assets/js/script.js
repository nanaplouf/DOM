/* Cet événement se déclenche lorsque le DOM (Document Object Model) est complètement chargé et analysé,
    c'est-à-dire que tous les éléments HTML sont accessibles et peuvent être manipulés par JavaScript.
*/
document.addEventListener("DOMContentLoaded", () =>{
    let clickBtn = document.getElementById("clickBtn");
    let output = document.getElementById("output");

    // ---- 1. Événement de clic -----
    // clickBtn.addEventListener("click", function (){
    //     output.innerText = "Bouton est cliqué !";
    // });

    let hoverBtn = document.getElementById("hoverBtn");
    
    // ---- 2. Événement de survol (mouse over) -----
    hoverBtn.addEventListener("mouseover", function (){
        output.innerText = "Bouton survolé !";
    })

    let focusBtn = document.getElementById("focusBtn");

    // ---- 3. Événement de focus (focus) -----
    focusBtn.addEventListener("focus", function (){
        output.innerText = "Bouton focalisé !";
        focusBtn.style.border = "2px solid salmon";
    })

    let inputField = document.getElementById("inputField");

    console.dir(inputField);

    // ---- 4. Événement d'entrée de texte (input) -----
    inputField.addEventListener("input", function (){
        output.innerText = "Vous avez tapé : " + inputField.value;
    })

    // ---- 5. Événement au clavier (keydown) -----
    // Ajout d'un événement au clavier sur le document entier
    document.addEventListener("keydown", function(){
        output.innerHTML = "Touche enfoncée : " + event.key;
    })

    // ---- 6. Supprimer un gestionnaire d'événement -----
    function handleClick(){
        output.innerText = "Bouton cliqué !";
    }

    clickBtn.addEventListener("click", handleClick);

    // Suppression du gestionnaire d'événement après un certain temps
    setTimeout(function (){
        clickBtn.removeEventListener("click", handleClick);
        output.innerText = "Evénement de click retiré après 5 secondes";
    }, 5000);

    // ---- 7. Événement au chargement de la page -----
    /* Cet événement se déclenche après le chargement complet de la page, y compris toutes les ressources 
        externes comme les images, les styles CSS et les scripts.
    */
    window.addEventListener("load", function () {
        output.innerText = "La page est entièrement chargée !";
        console.log("La page est prête.");
    });

});
