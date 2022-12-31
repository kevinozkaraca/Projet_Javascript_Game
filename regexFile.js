/*-----------------------------------------
  Code pour la vérification du formulaire
-----------------------------------------*/

// variable à checker pour la validation du formulaire
let validationFirstName = 0;
let validationLastName = 0;
let validationEmail = 0;
let validationCheckBox = 0;
let validationTown = 0;
let validationGamonQuantity = 0;
let validationDate = 0;

// ciblage des éléments
const inputLastName = document.getElementById("last");
const inputEmail = document.getElementById("email");
const checkbox01 = document.getElementById("checkbox1");
const labelConditionsCheckbox = document.getElementsByClassName("checkbox2-label")[0];
const townCheckbox = document.getElementsByClassName("checkbox-input");
const townFormData = document.getElementsByClassName("formData")[6];
const submitButton = document.getElementsByClassName("btn-submit")[0];
const numberOfGameon = document.getElementById("quantity");
const modalButton = document.getElementsByClassName("btn-submit")[0];
const modalBody = document.getElementById("deletForm");
const inputFirstName = document.getElementById("first");
const allFormData = document.getElementsByClassName("formData");
const finalMSG = document.getElementById("finalMSG");
const dateInput = document.getElementsByClassName("text-control")[3];

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
let smallCreationDate = document.createElement("small");

// fonction de validation pour le prenom
function functionFirstName() {
  inputFirstName.addEventListener("change", function () {
    if (regexFirstName.test(inputFirstName.value) && inputFirstName.value.length >= 2) {
      smallCreationFirstName.innerText = "";
      validationFirstName = 1;
      inputFirstName.style.borderColor = "white";
      functionValidation();
    } else {
      inputFirstName.insertAdjacentElement("afterend", smallCreationFirstName);
      smallCreationFirstName.style.color = "red";
      smallCreationFirstName.style.fontSize = "small";
      smallCreationFirstName.innerText = "Un minimum de deux lettres est obligatoire";
      validationFirstName = 0;
      submitButton.disabled = true;
      submitButton.insertAdjacentElement("afterend", smallCreationModalValidation);
      smallCreationModalValidation.style.color = "white";
      smallCreationModalValidation.style.fontSize = "small";
      smallCreationModalValidation.innerText = "(*) Veuillez remplir les champs obligatoires ou les corriger";
      inputFirstName.style.borderColor = "red";
      functionValidation();
    }
  });
}
functionFirstName();

// fonction de validation pour le nom
function functionLastName() {
  inputLastName.addEventListener("change", function () {
    if (regexLastName.test(inputLastName.value) && inputLastName.value.length >= 2) {
      smallCreationLastName.innerText = "";
      validationLastName = 1;
      inputLastName.style.borderColor = "white";
      functionValidation();
    } else {
      inputLastName.insertAdjacentElement("afterend", smallCreationLastName);
      smallCreationLastName.style.color = "red";
      smallCreationLastName.style.fontSize = "small";
      smallCreationLastName.innerText = "Un minimum de deux lettres est obligatoire";
      validationLastName = 0;
      submitButton.disabled = true;
      submitButton.insertAdjacentElement("afterend", smallCreationModalValidation);
      smallCreationModalValidation.style.color = "white";
      smallCreationModalValidation.style.fontSize = "small";
      smallCreationModalValidation.innerText = "(*) Veuillez remplir les champs obligatoires ou les corriger";
      inputLastName.style.borderColor = "red";
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
      validationEmail = 1;
      inputEmail.style.borderColor = "white";
      functionValidation();
    } else {
      inputEmail.insertAdjacentElement("afterend", smallCreationMail);
      smallCreationMail.style.color = "red";
      smallCreationMail.style.fontSize = "small";
      smallCreationMail.innerText = "Veuillez entrer une adresse mail valide";
      validationLastName = 0;
      submitButton.disabled = true;
      submitButton.insertAdjacentElement("afterend", smallCreationModalValidation);
      smallCreationModalValidation.style.color = "white";
      smallCreationModalValidation.style.fontSize = "small";
      smallCreationModalValidation.innerText = "(*) Veuillez remplir les champs obligatoires ou les corriger";
      inputEmail.style.borderColor = "red";
      functionValidation();
    }
  });
}
functionEmail();

console.log(dateInput.value);

// Fonction pour la validation de la date
function functionDate() {
  dateInput.addEventListener("change", function () {
    if (dateInput.value.length) {
      validationDate = 1;
      functionValidation();
    } else {
      console.log("non");
      functionValidation();
    }
  });
}
functionDate();

// fonction de validation pour la checkbox
function functionCheckbox() {
  checkbox01.addEventListener("change", function () {
    if (this.checked) {
      smallCreationCheckbox.innerText = "";
      validationCheckBox = 1;
      functionValidation();
    } else {
      labelConditionsCheckbox.insertAdjacentElement("afterend", smallCreationCheckbox);
      smallCreationCheckbox.style.color = "red";
      smallCreationCheckbox.style.fontSize = "small";
      smallCreationCheckbox.innerHTML = "<br> Veuillez accepter les conditions d'utilisation";
      validationCheckBox = 0;
      submitButton.disabled = true;
      submitButton.insertAdjacentElement("afterend", smallCreationModalValidation);
      smallCreationModalValidation.style.color = "white";
      smallCreationModalValidation.style.fontSize = "small";
      smallCreationModalValidation.innerText = "(*) Veuillez remplir les champs obligatoires ou les corriger";
      functionValidation();
    }
  });
}
functionCheckbox();

// fonction de validation de la quantité de tournoi
function functionGamonQuantity() {
  numberOfGameon.addEventListener("change", function () {
    if (numberOfGameon.value <= -1 || numberOfGameon.value >= 100) {
      numberOfGameon.insertAdjacentElement("afterend", smallCreationGameonQuantity);
      smallCreationGameonQuantity.style.color = "red";
      smallCreationGameonQuantity.style.fontSize = "small";
      smallCreationGameonQuantity.innerText = "Veuillez saisir un nombre en 0 et 99";
      validationGamonQuantity = 0;
      submitButton.disabled = true;
      submitButton.insertAdjacentElement("afterend", smallCreationModalValidation);
      smallCreationModalValidation.style.color = "white";
      smallCreationModalValidation.style.fontSize = "small";
      smallCreationModalValidation.innerText = "(*) Veuillez remplir les champs obligatoires ou les corriger";
      numberOfGameon.style.borderColor = "red";
      functionValidation();
    } else {
      smallCreationGameonQuantity.innerText = "";
      validationGamonQuantity = 1;
      numberOfGameon.style.borderColor = "white";
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
        validationTown = 1;
        functionValidation();
      }
    });
  }
}
functionTown();

// fonction de validation final
function functionValidation() {
  // Tableau des validations
  let validationArray = [
    validationFirstName,
    validationLastName,
    validationEmail,
    validationCheckBox,
    validationGamonQuantity,
    validationTown,
    validationDate,
  ];

  console.log(
    validationFirstName,
    validationLastName,
    validationEmail,
    validationCheckBox,
    validationGamonQuantity,
    validationTown,
    validationDate
  );
  // conditions pour la validation
  function condictionTrueFalse(e) {
    return e == 1;
  }

  if (validationArray.some(condictionTrueFalse) == false) {
    submitButton.addEventListener("click", function (e) {
      if (!dateInput.value.length) {
        submitButton.disabled = true;
        numberOfGameon.insertAdjacentElement("afterend", smallCreationGameonQuantity);
        smallCreationGameonQuantity.style.color = "red";
        smallCreationGameonQuantity.style.fontSize = "small";
        smallCreationGameonQuantity.innerText = "Veuillez saisir un nombre en 0 et 99";
      }
      if (
        townCheckbox[0].checked == false &&
        townCheckbox[1].checked == false &&
        townCheckbox[2].checked == false &&
        townCheckbox[3].checked == false &&
        townCheckbox[4].checked == false &&
        townCheckbox[5].checked == false
      ) {
        submitButton.disabled = true;
        townCheckbox.insertAdjacentElement("afterend", smallCreationCheckbox);
        smallCreationGameonQuantity.style.color = "red";
        smallCreationGameonQuantity.style.fontSize = "small";
        smallCreationGameonQuantity.innerText = "Veuillez saisir un nombre en 0 et 99";
      }
    });

    submitButton.insertAdjacentElement("afterend", smallCreationModalValidation);
    smallCreationModalValidation.style.color = "white";
    smallCreationModalValidation.style.fontSize = "small";
    smallCreationModalValidation.innerText = "(*) Veuillez remplir les champs obligatoires ou les corriger";
  }
  if (validationArray.every(condictionTrueFalse) == true) {
    submitButton.disabled = false;
    smallCreationModalValidation.style.color = "green";
    smallCreationModalValidation.style.fontSize = "small";
    smallCreationModalValidation.innerText = "Votre formulaire est valide !";
    // Affichage de la modal de confirmation
    submitButton.addEventListener("click", function (e) {
      e.preventDefault();
      modalBody.style.visibility = "hidden";
      modalButton.style.visibility = "visible";
      finalMSG.style.visibility = "visible";
      modalButton.value = "Fermer";
      // Une fois le boutton changé, le boutton change pour servir de fermeture comme la croix
      if (modalButton.value == "Fermer") {
        submitButton.addEventListener("click", function (e) {
          exitFromModal(e);
        });
      }
    });
  }
}
functionValidation();
