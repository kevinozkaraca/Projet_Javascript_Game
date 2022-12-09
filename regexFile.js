/*-----------------------------------------
  Code pour la vérification du formulaire
-----------------------------------------*/

// variable à checker pour la validation du formulaire
let validationPrenomCheck = false;
let validationNomCheck = false;
let validationEmailCheck = false;
let validationCheckBoxCheck = false;
let validationTownCheckBoxCheck = false;
let validationGamonQuantityCheck = false;

//ciblage des éléments :
let inputPrenom = document.getElementById("first");
let inputNom = document.getElementById("last");
let inputEmail = document.getElementById("email");
let checkbox01 = document.getElementById("checkbox1");
let townCheckbox = document.getElementsByClassName("checkbox-input");
let townFormData = document.getElementsByClassName("formData")[6];
let bouttonCParti = document.getElementsByClassName("btn-submit")[0];
let numberOfGameon = document.getElementById("quantity");
let boutonModal = document.querySelector("button");

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
let smallCreation6 = document.createElement("small");

// fonction de validation pour le prenom
function validationPrenom() {
  inputPrenom.addEventListener("change", function () {
    if (regexFirstName.test(inputPrenom.value)) {
      smallCreation1.innerText = "";
      validationPrenomCheck = true;
      validationDuBoutton();
    } else {
      inputPrenom.insertAdjacentElement("afterend", smallCreation1);
      smallCreation1.style.color = "red";
      smallCreation1.style.fontSize = "small";
      smallCreation1.innerText = "Veuillez séléctionner une ville";
      validationDuBoutton();
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
      validationDuBoutton();
    } else {
      inputNom.insertAdjacentElement("afterend", smallCreation2);
      smallCreation2.style.color = "red";
      smallCreation2.style.fontSize = "small";
      smallCreation2.innerText = "En attente d'une entrée valide";
      validationNomCheck = false;
      validationDuBoutton();
    }
  });
}
validationNom();

// fonction de validation pour le Mail
function validationMail() {
  inputEmail.addEventListener("change", function () {
    if (regexEmail.test(inputEmail.value)) {
      smallCreation3.innerText = "";
      validationEmailCheck = true;
      validationDuBoutton();
    } else {
      inputEmail.insertAdjacentElement("afterend", smallCreation3);
      smallCreation3.style.color = "red";
      smallCreation3.style.fontSize = "small";
      smallCreation3.innerText = "En attente d'une entrée valide";
      validationNomCheck = false;
      validationDuBoutton();
    }
  });
}
validationMail();

// fonction de validation pour la checkbox
function validationCheckBox() {
  checkbox01.addEventListener("change", function () {
    if (this.checked) {
      smallCreation4.innerText = "";
      validationCheckBoxCheck = true;
      validationDuBoutton();
    } else {
      labelCheckbox01.insertAdjacentElement("afterend", smallCreation4);
      smallCreation4.style.color = "red";
      smallCreation4.style.fontSize = "small";
      smallCreation4.innerHTML = "<br> Veuillez accepter les conditions d'utilisation";
      validationCheckBoxCheck = false;
      validationDuBoutton();
    }
  });
}
validationCheckBox();

// fonction de validation de la quantité de tournoi
function validationGamonQuantity() {
  numberOfGameon.addEventListener("change", function () {
    if (numberOfGameon.value <= -1 || numberOfGameon.value >= 100) {
      numberOfGameon.insertAdjacentElement("afterend", smallCreation5);
      smallCreation5.style.color = "red";
      smallCreation5.style.fontSize = "small";
      smallCreation5.innerText = "Veuillez saisir un nombre en 0 et 99";
      validationGamonQuantityCheck = false;
      validationDuBoutton();
    } else {
      smallCreation4.innerText = "";
      validationGamonQuantityCheck = true;
      validationDuBoutton();
    }
  });
}
validationGamonQuantity();

// fonction de validation pour la checkbox Ville
function validationTownCheckBox() {
  for (i = 0; i < 6; i++) {
    townCheckbox[i].addEventListener("change", function () {
      if (this.checked) {
        validationTownCheckBoxCheck = true;
        validationDuBoutton();
      }
    });
  }
}
validationTownCheckBox();

// fonction de validation final
function validationDuBoutton() {
  console.log(
    validationPrenomCheck,
    validationNomCheck,
    validationEmailCheck,
    validationCheckBoxCheck,
    validationGamonQuantityCheck,
    validationTownCheckBoxCheck
  );
  if (
    validationPrenomCheck == false ||
    validationNomCheck == false ||
    validationEmailCheck == false ||
    validationCheckBoxCheck == false ||
    validationGamonQuantityCheck == false ||
    validationTownCheckBoxCheck == false
  ) {
    bouttonCParti.disabled = true;
    bouttonCParti.insertAdjacentElement("afterend", smallCreation6);
    smallCreation6.style.color = "white";
    smallCreation6.style.fontSize = "small";
    smallCreation6.innerText = "(*) Veuillez remplir les champs obligatoires ou les corriger";
  } else if (
    validationPrenomCheck == true &&
    validationNomCheck == true &&
    validationEmailCheck == true &&
    validationCheckBoxCheck == true &&
    validationGamonQuantityCheck == true &&
    validationTownCheckBoxCheck == true
  ) {
    bouttonCParti.disabled = false;
    smallCreation6.style.color = "green";
    smallCreation6.style.fontSize = "small";
    smallCreation6.innerText = "Votre formulaire est valide !";
  }
}
validationDuBoutton();

// Finir la validation du lieu !
