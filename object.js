/* ==========================================================================
PROGETTO: DATA STRUCTURES & OBJECTS (Back-office Management)
Alessia Iulianetti
==========================================================================
*/

/**
 * ESERCIZIO 1: E-COMMERCE PREMIUM FILTER
 * Obiettivo: Estrarre e sommare dati da un listino prezzi (Object to Array).
 */
// ES 1
let catalogo = {
  scarpe: 120,
  maglia: 30,
  giacca: 150,
  guanti: 25,
  zaino: 110
};

// 1. Trasformazione in Array di Array
let catalogoArray = Object.entries(catalogo);

// 2. Filtro prodotti di lusso (> 100)
let premium = catalogoArray.filter(([prodotto, prezzo]) => prezzo > 100);

console.log("--- PRODOTTI PREMIUM ---");
for (const [prodotto, prezzo] of premium) {
   console.log(`Il prodotto ${prodotto} è premium e costa ${prezzo}€`);
}

console.log("--- STATISTICHE MAGAZZINO ---");

// 3. Conteggio elementi (Quanti sono?)
let numeroProdotti = Object.values(catalogo).length;
console.log(`Numero totale di tipologie prodotti: ${numeroProdotti}`);

// 4. Somma dei valori (Quanto valgono?)
let valoreTotale = Object.values(catalogo).reduce((acc, curr) => acc + curr, 0);
console.log(`Valore totale della merce in magazzino: ${valoreTotale}€`);
/**
 * ESERCIZIO 2: USER PERMISSIONS CONTROL
 * Obiettivo: Gestione ruoli e autorizzazioni admin.
 */
//ES 2
let utenti = {
  admin: true,
  marco: false,
  sara: true,
  luca: false,
  giulia: true
};
 let utentiArray = Object.entries(utenti);
 let utenteAdmin = utentiArray.filter(([nome, valore]) => valore === true);
 let maiuscolo = utenteAdmin.map(([nome, valore]) => nome.toUpperCase());
 for(const nome of maiuscolo){
    console.log(`L'utente ${nome} ha i permessi di amministratore`)
 }
 let contaNomi = Object.keys(utenti).length;
 console.log(`il totale degli utenti è`, contaNomi)


