


 // pour les champs

// ------- Nom
 const champInputNom = document.getElementById("nom");
 const messageErreurNom = document.getElementById("erreurNom");
 
 champInputNom.addEventListener("focus", () => {
   messageErreurNom.style.display = "block";
 });
 
 champInputNom.addEventListener("blur", () => {
   messageErreurNom.style.display = "none";
 });
// ------- Prenom
const champInputPrenom = document.getElementById("prenom");
const messageErreurPrenom = document.getElementById("erreurPrenom");

champInputPrenom.addEventListener("focus", () => {
  messageErreurPrenom.style.display = "block";
});

champInputPrenom.addEventListener("blur", () => {
  messageErreurPrenom.style.display = "none";
});
// ------- Date de naissance
const champInputDate = document.getElementById("dateNaissance");
const messageErreurDate = document.getElementById("erreurDate");

champInputDate.addEventListener("focus", () => {
  messageErreurDate.style.display = "block";
});

champInputDate.addEventListener("blur", () => {
  messageErreurDate.style.display = "none";
});
// --------- Mot De Passe

const champInputPasseRepeat = document.getElementById("repeteMotDePasse");
const champInputPasse = document.getElementById("password");
const messageErreurPasse = document.getElementById("erreurPasse");

champInputPasseRepeat.addEventListener("focus", () => {
  messageErreurPasse.style.display = "block";
});

let passe1;
let pass2;
champInputPasseRepeat.addEventListener("blur", () => {
  let passe1 = champInputPasse.value;
  let passe2 = champInputPasseRepeat.value;
  
  if (passe1 !== passe2) {
    messageErreurPasse.style.display = "block";
  } else {
    messageErreurPasse.style.display = "none";
  }
});


// #langages option {
//     font-family: Arial, sans-serif;
//     font-size: 14px;
//     color: #0000FF !important;
//   }
  
//   #langages option:hover {
//     background-color: #ddbbbb;
//   }

//   const modifOptionListColor = document.getElementById("langages");
//   console.log(modifOptionListColor);