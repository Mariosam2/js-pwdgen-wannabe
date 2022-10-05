

const password = document.getElementById("pw");


/* alert prompt */
const userName = prompt("Qual'è il tuo nome?")
const userSurname = prompt("Qual'è il tuo cognome?")
const userColor = prompt("Qual'è il tuo colore preferito?")


password.innerHTML = `La tua password sicurissima è: ${userName}${userSurname}${userColor}22`;
