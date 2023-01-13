/*
Descrizione:
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

1. creo una funzione che mi generi 5 numeri casuali, li metto in un array e 
2. quando li ha generati li mostro in pagina per 30 secondi
3. genero 5 prompt che usciranno uno alla volta in cui l'utente inserirà i numeri
4. con un ciclo for confronto i numeri inseriti dall'utente con quelli presenti nell'array;
se il numero è presente lo metto in un altro array altrimenti no.
5. conto quanti elementi ci sono nell'array.
6. mostro all'utente il punteggio e i numeri indovinati.
*/

function randomNumb(min, max) {
  let numbers = Math.floor(Math.random() * (max - min + 1)) + min;
  return numbers;
}

numeriRandArrey = [];

for (let i = 0; i < 5; i++) {
  const numbers = randomNumb(20, 1);
  numeriRandArrey.push(numbers);
}

console.log("numeriRandArrey", numeriRandArrey);

const mex = document.querySelector(".messaggioNumeri");
mex.innerHTML += `<h1>${numeriRandArrey}</h1>`;

setTimeout(myFunction, 30000);
function myFunction() {
  mex.classList.add("hidden");
}

setTimeout(myFunctionB, 31000);
function myFunctionB() {
  const numUno = prompt("inserisci il primo numero");
  controllo(numUno);
  const numDue = prompt("inserisci il secondo numero");
  controllo(numDue);
  const numTre = prompt("inserisci il terzo numero");
  controllo(numTre);
  const numQuattro = prompt("inserisci il quarto numero");
  controllo(numQuattro);
  const numCinque = prompt("inserisci il quinto numero");
  controllo(numCinque);
}

arrayUtente = [];

function controllo(numeroUtente) {
  if (isNaN(numeroUtente) || numeroUtente == "") {
    alert("Numero non valido, ricarica e riprova.");
    myFunctionB();
  } else {
    arrayUtente.push(numeroUtente);
  }
}

console.log("arrayUtente", arrayUtente);

arrayRisultato = [];
const messaggioFinale = document.querySelector(".risultato");

setTimeout(myFunctionC, 32000);
function myFunctionC() {
  for (let i = 0; i < numeriRandArrey.length; i++) {
    if (arrayUtente[i] == numeriRandArrey[i]) {
      arrayRisultato.push(arrayUtente[i]);
      messaggioFinale.innerHTML = `<h2>Il tuo punteggio è ${arrayRisultato.length}.<br> Hai indovinato i seguenti numeri: ${arrayRisultato}.</h2>`;
    }
  }
}

console.log("arrayRisultato", arrayRisultato);
