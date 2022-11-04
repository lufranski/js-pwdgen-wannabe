// Password Generator

// Variabili
const numeroPassword = 21;
let nomeUtente;
let cognomeUtente;
let coloreUtente;

// Chiedere all'utente il suo nome
nomeUtente = prompt ("Inserisci il tuo nome");

console.log(nomeUtente);

// Chiedere all'utente il suo cognome
cognomeUtente = prompt ("Inserisci il tuo cognome");

console.log(cognomeUtente);

// Chiedere all'utente il suo colore preferito
coloreUtente = prompt ("Inserisci il tuo cognome preferito")

console.log(coloreUtente);

// Output

document.getElementById("container").innerHTML = `Congratulazioni, hai creato una nuova password! <br>La tua nuova password &eacute; ${nomeUtente}${cognomeUtente}${coloreUtente}${numeroPassword}! ` ;