/* chiediamo all'utente il numero di km che vuole percorrere e l'età, e poi calcoliamo il prezzo totale del biglietto, con le condizioni che per ogni km il prezzo è pari a 0.21 € e poi va applicato uno sconto del 20% per i minorenni mentre va applicato uno sconto del 40% per gli over 65 */

// variabili const
const distance = prompt("Quanti km vuole percorrere?");
const userAge = prompt("Quanti anni hai?");
const result = distance * "0.21";

// risposte visionate su console
console.log("Km che vuole percorrere l'utente:", distance + " km");
console.log("Età dell'utente:", userAge + " anni");
console.log("Prezzo biglietto standard:", result + " €");

// calcoli sconti
if (userAge < 18) {
	var discount_first = 0.21 - (0.21 / 100) * 20;
	console.log(
		"Prezzo biglietto scontato per i minorenni: ",
		discount_first.toFixed(2) + " €"
	);
} else if (userAge >= 65) {
	var discount_second = 0.21 - (0.21 / 100) * 40;
	console.log(
		"Prezzo biglietto scontato per gli over 65 anni: ",
		discount_second.toFixed(2) + " €"
	);
}
