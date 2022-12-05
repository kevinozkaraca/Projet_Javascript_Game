// Code pour la vérification du formulaire

//ciblage des éléments :
let inputPrenom = document.getElementById("first");
let inputNom = document.getElementById("last");
let inputEmail = document.getElementById("email");
let checkbox01 = document.getElementsByClassName("checkbox-icon")[0];
let checkbox02 = document.getElementsByClassName("checkbox-icon")[1];
let bouttonCParti = document.getElementsByClassName("btn-submit")[0];
// creation de la balise en cas de probleme
let smallCreation = document.createElement("small");

function validationDuBoutton() {
  bouttonCParti.addEventListener("click", function (e) {
    e.target.disabled = true;
    bouttonCParti.insertAdjacentElement("afterend", smallCreation);
    smallCreation.setAttribute("whidh", "100%");
    smallCreation.innerText = "khdklfhl";
    console.log(bouttonCParti);
  });
}
validationDuBoutton();

/*
function validationEmail() {
  // Email
  let email = document.getElementById("email");
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  email.addEventListener("change", function () {
    /*if (regexEmail.test(email.value)) {
      emailErrorMsg.innerText = "";
      validationEmailCheck = true;
      return true;
    } else {}
    const creationDeDiv1 = document.createElement("small");
    emailErrorMsg.innerText = "Veuillez saisir une adresse mail valide";
    email.appendChild(creationDeDiv1);
    return false;
  });
}

validationEmail();

function validationPrenom() {
  // Prenom
  let firstName = document.getElementById("firstName");
  let firstNameErrorMsg = document.getElementById("firstNameErrorMsg");
  let regexFirstName =
    /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;
  firstName.addEventListener("change", function () {
    if (regexFirstName.test(firstName.value)) {
      firstNameErrorMsg.innerText = "  ";
      validationPrenomCheck = true;

      return true;
    } else {
      firstNameErrorMsg.innerText = "Veuillez saisir un prénom correct";
      return false;
    }
  });
}
function validationNom() {
  // Nom
  let lastName = document.getElementById("lastName");
  let lastNameErrorMsg = document.getElementById("lastNameErrorMsg");
  let regexLastName =
    /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;
  lastName.addEventListener("change", function () {
    if (regexLastName.test(lastName.value)) {
      lastNameErrorMsg.innerText = "  ";
      validationNomCheck = true;

      return true;
    } else {
      lastNameErrorMsg.innerText = "Veuillez saisir un nom correct";
      return false;
    }
  });
}


if (
    validationPrenomCheck == true &&
    validationNomCheck == true &&
    validationAdressCheck == true &&
    validationVilleCheck == true &&
    validationEmailCheck == true
  )*/
