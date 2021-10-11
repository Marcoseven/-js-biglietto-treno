/* chiediamo all'utente il numero di km che vuole percorrere e l'età, e poi calcoliamo il prezzo totale del biglietto, con le condizioni che per ogni km il prezzo è pari a 0.21 € e poi va applicato uno sconto del 20% per i minorenni mentre va applicato uno sconto del 40% per gli over 65 */

// variabili const
const distance = prompt("Quanti km vuole percorrere?");
const age = prompt("Quanti anni hai?");
const result = distance * 0.21;

// risposte visionate su console
console.log("Numero utente:", distance + " km");
console.log("Numero utente:", age + " anni");
console.log("Prezzo:", result + " €");


