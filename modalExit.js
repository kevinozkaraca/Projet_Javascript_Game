// Fonction pour quitter la fenetre modale
let modalExitCross = document.getElementsByClassName("close");

// Fonction pour quitter la feneter modale
function exitFromModal(e) {
  if (e.target == modalExitCross[0]) {
    // Variable "modalbg" récupéré dans le fichier fourni par le centre de formation
    modalbg.style.display = "none";
  }
}

// quitte la fenetre au "click"
modalExitCross[0].addEventListener("click", exitFromModal);
