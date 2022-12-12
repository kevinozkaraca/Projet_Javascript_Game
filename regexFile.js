/*-----------------------------------------
  Code pour la vérification du formulaire
-----------------------------------------*/

// variable à checker pour la validation du formulaire
let validationFirstName = false;
let validationLastName = false;
let validationEmail = false;
let validationCheckBox = false;
let validationTown = false;
let validationGamonQuantity = false;

// ciblage des éléments
let inputFirstName = document.getElementById("first");
let inputLastName = document.getElementById("last");
let inputEmail = document.getElementById("email");
let checkbox01 = document.getElementById("checkbox1");
let labelConditionsCheckbox = document.getElementsByClassName("checkbox2-label")[0];
let townCheckbox = document.getElementsByClassName("checkbox-input");
let townFormData = document.getElementsByClassName("formData")[6];
let submitButton = document.getElementsByClassName("btn-submit")[0];
let numberOfGameon = document.getElementById("quantity");
let modalButton = document.querySelector("button");

// Tableau des vérifications
let validationArray = [
  validationFirstName,
  validationLastName,
  validationEmail,
  validationCheckBox,
  validationGamonQuantity,
  validationTown,
];

// liste des regex
let regexFirstName =
  /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;
let regexLastName =
  /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;
let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

// creation de la balise en cas de probleme
let smallCreationFirstName = document.createElement("small");
let smallCreationLastName = document.createElement("small");
let smallCreationMail = document.createElement("small");
let smallCreationCheckbox = document.createElement("small");
let smallCreationGameonQuantity = document.createElement("small");
let smallCreationModalValidation = document.createElement("small");

// fonction de validation pour le prenom
function functionFirstName() {
  inputFirstName.addEventListener("change", function () {
    if (regexFirstName.test(inputFirstName.value)) {
      smallCreationFirstName.innerText = "";
      validationFirstName = true;
      functionValidation();
    } else {
      inputFirstName.insertAdjacentElement("afterend", smallCreationFirstName);
      smallCreationFirstName.style.color = "red";
      smallCreationFirstName.style.fontSize = "small";
      smallCreationFirstName.innerText = "En attente d'une entrée valide";
      functionValidation();
    }
  });
}
functionFirstName();

// fonction de validation pour le nom
function functionLastName() {
  inputLastName.addEventListener("change", function () {
    if (regexLastName.test(inputLastName.value)) {
      smallCreationLastName.innerText = "";
      validationLastName = true;
      functionValidation();
    } else {
      inputLastName.insertAdjacentElement("afterend", smallCreationLastName);
      smallCreationLastName.style.color = "red";
      smallCreationLastName.style.fontSize = "small";
      smallCreationLastName.innerText = "En attente d'une entrée valide";
      validationLastName = false;
      functionValidation();
    }
  });
}
functionLastName();

// fonction de validation pour le Mail
function functionEmail() {
  inputEmail.addEventListener("change", function () {
    if (regexEmail.test(inputEmail.value)) {
      smallCreationMail.innerText = "";
      validationEmail = true;
      functionValidation();
    } else {
      inputEmail.insertAdjacentElement("afterend", smallCreationMail);
      smallCreationMail.style.color = "red";
      smallCreationMail.style.fontSize = "small";
      smallCreationMail.innerText = "En attente d'une entrée valide";
      validationLastName = false;
      functionValidation();
    }
  });
}
functionEmail();

// fonction de validation pour la checkbox
function FunctionCheckbox() {
  checkbox01.addEventListener("change", function () {
    if (this.checked) {
      smallCreationCheckbox.innerText = "";
      validationCheckBox = true;
      functionValidation();
    } else {
      labelConditionsCheckbox.insertAdjacentElement("afterend", smallCreationCheckbox);
      smallCreationCheckbox.style.color = "red";
      smallCreationCheckbox.style.fontSize = "small";
      smallCreationCheckbox.innerHTML = "<br> Veuillez accepter les conditions d'utilisation";
      validationCheckBox = false;
      functionValidation();
    }
  });
}
FunctionCheckbox();

// fonction de validation de la quantité de tournoi
function functionGamonQuantity() {
  numberOfGameon.addEventListener("change", function () {
    if (numberOfGameon.value <= -1 || numberOfGameon.value >= 100) {
      numberOfGameon.insertAdjacentElement("afterend", smallCreationGameonQuantity);
      smallCreationGameonQuantity.style.color = "red";
      smallCreationGameonQuantity.style.fontSize = "small";
      smallCreationGameonQuantity.innerText = "Veuillez saisir un nombre en 0 et 99";
      validationGamonQuantity = false;
      functionValidation();
    } else {
      smallCreationGameonQuantity.innerText = "";
      validationGamonQuantity = true;
      functionValidation();
    }
  });
}
functionGamonQuantity();

// fonction de validation pour la checkbox Ville
function functionTown() {
  for (i = 0; i < 6; i++) {
    townCheckbox[i].addEventListener("change", function () {
      if (this.checked) {
        validationTown = true;
        functionValidation();
      }
    });
  }
}
functionTown();

// fonction de validation final
function functionValidation() {
  console.log(
    validationFirstName,
    validationLastName,
    validationEmail,
    validationCheckBox,
    validationGamonQuantity,
    validationTown
  );
  if (validationArray.some(Boolean) == false) {
    submitButton.disabled = true;
    submitButton.insertAdjacentElement("afterend", smallCreationModalValidation);
    smallCreationModalValidation.style.color = "white";
    smallCreationModalValidation.style.fontSize = "small";
    smallCreationModalValidation.innerText = "(*) Veuillez remplir les champs obligatoires ou les corriger";
  }
  if (validationArray.every(Boolean) == true) {
    console.log("dkfjhqm");
    submitButton.disabled = false;
    smallCreationModalValidation.style.color = "green";
    smallCreationModalValidation.style.fontSize = "small";
    smallCreationModalValidation.innerText = "Votre formulaire est valide !";
  }
}
functionValidation();
