/* chiediamo all'utente il numero di km che vuole percorrere e l'età, 
e poi calcoliamo il prezzo totale del biglietto, con le condizioni che per ogni km il prezzo è pari a 0.21 € 
e poi va applicato uno sconto del 20% per i minorenni mentre va applicato uno sconto del 40% per gli over 65 anni
*/

// variabili
const distance = prompt("Quanti km vuole percorrere?");
const userAge = prompt("Quanti anni hai?");
const ageUnder = 18;
const ageOver = 65;
var result = distance * "0.21";

// console
console.log("Km che vuole percorrere l'utente:", distance + " km");
console.log("Età dell'utente:", userAge + " anni");

// istruzioni condizionali
if (userAge < ageUnder) {
	const under = result - result * 0.2;
	document.getElementById(
		"answers"
	).innerHTML = `Km che vuole percorrere l'utente: ${distance} km; Età dell'utente: ${userAge} anni; Prezzo biglietto scontato del 20% per gli under 18 anni: ${under.toFixed(
		2
	)} €`;
	console.log(
		"Prezzo biglietto scontato del 20% per gli under 18 anni:",
		under.toFixed(2) + " €"
	);
} else if (userAge > ageOver) {
	const over = result - result * 0.2;
	document.getElementById(
		"answers"
	).innerHTML = `Km che vuole percorrere l'utente: ${distance} km; Età dell'utente: ${userAge} anni; Prezzo biglietto scontato del 40% per gli over 65 anni: ${over.toFixed(
		2
	)} €`;
	console.log(
		"Prezzo biglietto scontato del 40% per gli over 65 anni:",
		over.toFixed(2) + " €"
	);
} else {
	document.getElementById(
		"answers"
	).innerHTML = `Km che vuole percorrere l'utente: ${distance} km; Età dell'utente: ${userAge} anni; Prezzo biglietto standard: ${result.toFixed(
		2
	)} €`;
	console.log("Prezzo biglietto standard:", result + " €");
}
