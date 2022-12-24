/*-----------------------------------------
Partie fourni par le centre de formation
-----------------------------------------*/
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
/*-----------------------------------------
Partie codée par l'étudiant
-----------------------------------------*/

// Fonction pour quitter la fenetre modale
let modalExitCross = document.getElementsByClassName("close");

// Fonction pour quitter la feneter modale
function exitFromModal(e) {
  if (e.target == modalExitCross[0]) {
    // Variable "modalbg" récupéré dans le fichier fourni par le centre de formation
    modalbg.style.display = "none";
  }
  if (e.target == submitButton) {
    // Variable "modalbg" récupéré dans le fichier fourni par le centre de formation
    modalbg.style.display = "none";
  }
}

// quitte la fenetre au "click"
modalExitCross[0].addEventListener("click", exitFromModal);
