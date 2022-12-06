/*-----------------------------------------
  Code pour la vérification du formulaire
-----------------------------------------*/

// variable à checker pour la validation du formulaire
let validationPrenomCheck = false;
let validationNomCheck = false;
let validationAdressCheck = false;
let validationEmailCheck = false;
let validationCheckBox = false;

//ciblage des éléments :
let inputPrenom = document.getElementById("first");
let inputNom = document.getElementById("last");
let inputEmail = document.getElementById("email");
let checkbox01 = document.getElementById("checkbox1");
let labelCheckbox01 = document.getElementsByClassName("checkbox2-label")[0];
let bouttonCParti = document.getElementsByClassName("btn-submit")[0];
let numberOfGameon = document.getElementById("birthdate");

console.log(numberOfGameon);

// liste des regex
let regexFirstName =
  /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;
let regexLastName =
  /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;
let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

// creation de la balise en cas de probleme
let smallCreation1 = document.createElement("small");
let smallCreation2 = document.createElement("small");
let smallCreation3 = document.createElement("small");
let smallCreation4 = document.createElement("small");
let smallCreation5 = document.createElement("small");

// fonction de validation pour le prenom
function validationPrenom() {
  inputPrenom.addEventListener("change", function () {
    if (regexFirstName.test(inputPrenom.value)) {
      smallCreation1.innerText = "";
      validationPrenomCheck = true;
    } else {
      inputPrenom.insertAdjacentElement("afterend", smallCreation1);
      smallCreation1.style.color = "red";
      smallCreation1.style.fontSize = "small";
      smallCreation1.innerText = "En attente d'une entrée valide";
    }
  });
}
validationPrenom();

// fonction de validation pour le nom
function validationNom() {
  inputNom.addEventListener("change", function () {
    if (regexLastName.test(inputNom.value)) {
      smallCreation2.innerText = "";
      validationNomCheck = true;
    } else {
      inputNom.insertAdjacentElement("afterend", smallCreation2);
      smallCreation2.style.color = "red";
      smallCreation2.style.fontSize = "small";
      smallCreation2.innerText = "En attente d'une entrée valide";
    }
  });
}
validationNom();

// fonction de validation pour le nom
function validationMail() {
  inputEmail.addEventListener("change", function () {
    if (regexEmail.test(inputEmail.value)) {
      smallCreation3.innerText = "";
      validationNomCheck = true;
    } else {
      inputEmail.insertAdjacentElement("afterend", smallCreation3);
      smallCreation3.style.color = "red";
      smallCreation3.style.fontSize = "small";
      smallCreation3.innerText = "En attente d'une entrée valide";
    }
  });
}
validationMail();

// fonction de validation pour la checkbox
function validationCheckBox01() {
  checkbox01.addEventListener("change", function () {
    if (this.checked) {
      smallCreation4.innerText = "";
      validationCheckBox = true;
    } else {
      labelCheckbox01.insertAdjacentElement("afterend", smallCreation4);
      smallCreation4.style.color = "red";
      smallCreation4.style.fontSize = "small";
      smallCreation4.innerHTML = "<br> Veuillez accepter les conditions d'utilisation";
    }
  });
}
validationCheckBox01();

// fonction de validation pour le bouton
function validationDuBoutton(e) {
  bouttonCParti.addEventListener("click", function (e) {
    if (
      validationPrenomCheck == false &&
      validationNomCheck == false &&
      validationAdressCheck == false &&
      validationEmailCheck == false &&
      validationCheckBox == false
    ) {
      e.target.disabled = true;
      bouttonCParti.insertAdjacentElement("afterend", smallCreation5);
      smallCreation5.style.color = "red";
      smallCreation5.style.fontSize = "small";
      smallCreation5.innerText = "Des informations sont manquantes ou erronées";
      console.log(numberOfGameon);
    } else {
      e.target.disabled = false;
    }
  });
}
validationDuBoutton();
