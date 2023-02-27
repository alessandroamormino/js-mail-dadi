// CONSEGNA:

// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// PSEUDOCODICE: 

/* 

- Seleziono l'input dell'utente dal DOM e ne salvo il valore al click del bottone "Accedi";
- Inizializzo un'array che contenga n email di persone che possono accedere;
- PER OGNI ELEMENTO DELL'ARRAY
    ? SE La mail inserita in input è contenuta nell'array
        ° V1: Stampare nel DOM che l'utente può giocare
    : ALTRIMENTI 
        ° F1: Stampare nel DOM che l'utente non può giocare
- Creare due variabili che contengano due numeri casuali da 1 a 6, uno per l'utente e uno per il PC;
? SE dadoUtente > dadoPC
    ° V1: Stampare nel DOM che l'utente ha vinto (con sua mail/nome);
:? ALTRIMENTI SE dadoUtente = dadoPC
    ° V1: Stampare nel DOM che c'è stato un pareggio;
: ALTRIMENTI 
    ° F1: Stampare nel DOM che l'utente ha perso;

BONUS: 
- Credo due sezioni nel DOM affiancate che corrispondono al dadoUtente e al dadoPC;
- Creo nel DOM un tag <img> senza src, per le due sezioni, che conterrà l'immagine del dado uscito;
- Valorizzo la mia src con l'immagine contenuta nell'array delle facce dei dadi (immagini) e la posizione la leggo dalla variabile numeri generati casuali - 1;
- Stampo nel DOM il messaggio di vittoria/sconfitta stilizzato;

BONUS 2: Alla meglio di 3!
- Creo un array vuoto che registri le vittorie o sconfitte del giocatore;
- In fase di controllo se vittoria o sconfitta, inserisco nell'array 'W' oppure 'L' riferito al giocatore con il metodo push();
- PER OGNI ELEMENTO DELL'ARRAY W/L: 
    ° Conto quante W ci sono e le memorizzo in una variabile;
    ? SE la variabile è >= 2
        ° V1: Stampo nel DOM che il giocatore ha vinto la partita;
    : ALTRIMENTI
        ° F1: Stampo nel DOM che il giocatore ha perso la partita;
*/

// CODE:

// - Seleziono l'input dell'utente dal DOM e ne salvo il valore;
let emailEl = document.getElementById('email');
let loginEl = document.getElementById('btn-submit');
let messageEl = document.getElementById('message');

// - Inizializzo un'array che contenga n email di persone che possono accedere;
let users = ['asd123@gmail.com', 'prova@icloud.com', 'ciao@gmail.com', 'test@libero.it'];

let email;

loginEl.addEventListener('click', function(){
    // salvo il valore al click
    email = emailEl.value;

    let okLogin = 0;

    // - PER OGNI ELEMENTO DELL'ARRAY
    for(let i=0; i<users.length; i++){

        // ? SE La mail inserita in input è contenuta nell'array
        if(email===users[i]){
            okLogin++;
        } else {
            okLogin += 0;
        }
    }

    if(okLogin==1){
        // ° V1: Stampare nel DOM che l'utente può giocare
        messageEl.innerHTML = 'Puoi giocare :)';
    }else {
        // ° F1: Stampare nel DOM che l'utente non può giocare
        messageEl.innerHTML = 'Non puoi giocare :(';
    }

});