

// TP01 - JAVASCRIPT

//   ***********Question 1**********************

function getRandomNumber() {
    return Math.floor(Math.random() * 100);
  }
  
  function generateRandomNumbers() {
    const numbers = new Set();
    let count = 0;
  
    while (numbers.size < 100) {
      const randomNumber = getRandomNumber();
      numbers.add(randomNumber);
      count++;
    }
  
    return count;
  }
  
  const numberOfTries = generateRandomNumbers();
  const resultatQ1 = document.getElementById("resultatQuestion1");
  resultatQ1.innerText = numberOfTries;


//   ***********Question 2**********************
const phrase = "une chaine avec des lettres dans un certain ordre pour donner du sens";
const phraseTriee = phrase.split('').sort().join('');
const resultatQ2 = document.getElementById("resultatQuestion2");
resultatQ2.innerText = phraseTriee;


//   ***********Question 3**********************
const phrase2 = "une phrase sans majuscule";
const mots = phrase2.split(" ");
const phraseMajuscule = mots.map(mot => mot.charAt(0).toUpperCase() + mot.slice(1)).join(" ");
const resultatQ3 = document.getElementById("resultatQuestion3");
resultatQ3.innerText = phraseMajuscule;






