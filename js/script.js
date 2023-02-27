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

x Seleziono l'input dell'utente dal DOM e ne salvo il valore al click del bottone "Gioca";
x Inizializzo un'array che contenga n email di persone che possono accedere;
x PER OGNI ELEMENTO DELL'ARRAY
    ? SE La mail inserita in input è contenuta nell'array
        x V1: Stampare nel DOM che l'utente può giocare
    : ALTRIMENTI 
        x F1: Stampare nel DOM che l'utente non può giocare
x Creare due variabili che contengano due numeri casuali da 1 a 6, uno per l'utente e uno per il PC;
? SE dadoUtente > dadoPC
    x V1: Stampare nel DOM che l'utente ha vinto (con sua mail/nome);
:? ALTRIMENTI SE dadoUtente = dadoPC
    x V1: Stampare nel DOM che c'è stato un pareggio;
: ALTRIMENTI 
    x F1: Stampare nel DOM che l'utente ha perso;

BONUS: 
- Credo due sezioni nel DOM affiancate che corrispondono al dadoUtente e al dadoPC;
- Creo nel DOM un tag <img> senza src, per le due sezioni, che conterrà l'immagine del dado uscito;
- Valorizzo la mia src con l'immagine contenuta nell'array delle facce dei dadi (immagini) e la posizione la leggo dalla variabile numeri generati casuali - 1;
- Stampo nel DOM il messaggio di vittoria/sconfitta stilizzato;

BONUS 2: Alla meglio di 3!
x Creo un array vuoto che registri le vittorie o sconfitte del giocatore;
x In fase di controllo se vittoria o sconfitta, inserisco nell'array 'W' oppure 'L' riferito al giocatore con il metodo push();
- PER OGNI ELEMENTO DELL'ARRAY W/L: 
    x Conto quante W ci sono e le memorizzo in una variabile;
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
let email;

// - Inizializzo un'array che contenga n email di persone che possono accedere;
let users = ['asd123@gmail.com', 'prova@icloud.com', 'ciao@gmail.com', 'test@libero.it'];

// - Creo un array vuoto che registri le vittorie o sconfitte del giocatore;
let recordWL = [];
let wins = 0;

loginEl.addEventListener('click', function(){

    // - Creare due variabili che contengano due numeri casuali da 1 a 6, uno per l'utente e uno per il PC;
    let dadoUser = Math.floor(Math.random()*6)+1;
    let dadoPc = Math.floor(Math.random()*6)+1;

    // salvo il valore al click
    email = emailEl.value;

    // CONTROLLO MAIL

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

            // GIOCO DEI DADI
            if(recordWL.length<3){
                if(dadoUser>dadoPc){
                    recordWL.push('W');
                    console.log(`${dadoUser}-${dadoPc}: Hai vinto questo round!`);
                }else if(dadoUser==dadoPc){
                    console.log(`${dadoUser}-${dadoPc}: Parità!`);
                }else{
                    recordWL.push('L');
                    console.log(`${dadoUser}-${dadoPc}: Hai perso questo round..`);
                }
            }else{
                for(let n=0; n<recordWL.length; n++){
                    //  Conto quante W ci sono e le memorizzo in una variabile;
                    if(recordWL[n]==='W'){
                        wins++;
                    }
                }
                
                // Controllo esito partita
                // ? SE la variabile è >= 2
                if(wins>=2){
                    // ° V1: Stampo nel DOM che il giocatore ha vinto la partita;
                    console.log('Hai vinto! :)');
                }else{
                    // ° F1: Stampo nel DOM che il giocatore ha perso la partita;
                    console.log('Hai perso.. :(');
                }
            }
    }else {
        // ° F1: Stampare nel DOM che l'utente non può giocare
        messageEl.innerHTML = 'Non puoi giocare :(';
    }


});