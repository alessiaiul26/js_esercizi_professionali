/**
 * ESERCIZI JAVASCRIPT: LOGICA E FUNZIONI
 * Target: Web Agency Back-office & E-commerce
 */

// 1. FORMATTATORE TESTO (Data Cleaning)
function pulisciTesto(testo) {
    let testoPulito = testo.trim().toLowerCase();
    return `Il testo ora è: ${testoPulito}`;
}

console.log(pulisciTesto("  MARCO  "));
console.log(pulisciTesto("  INFO@GMAIL.COM  "));


// 2. CONTROLLO SCORTE (Inventory Management)
function controllaMagazzino(quantita) {
    if (quantita > 0) {
        return "Prodotto Disponibile";
    } else {
        return "Esaurito";
    }
}

console.log(controllaMagazzino(10));
console.log(controllaMagazzino(0));


// 3. CALCOLO SPEDIZIONE (Logistica)
function calcolaSpedizione(prezzo) {
    if (prezzo >= 50) {
        return 0; // Spedizione gratuita
    } else {
        return 10; // Costo fisso 10€
    }
}

console.log("Costo spedizione ordine 60€:", calcolaSpedizione(60));
console.log("Costo spedizione ordine 40€:", calcolaSpedizione(40));


// 4. VERIFICA NUMERO PARI (Logica Matematica)
function isPari(numero) {
    if (numero % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log("Il numero 3 è pari?", isPari(3));
console.log("Il numero 4 è pari?", isPari(4));


// 5. SICUREZZA ACCESSO (Authentication)
function controlloAccesso(passwordUser, passwordCorretta) {
    if (passwordUser === passwordCorretta && passwordUser.length > 4) {
        return "Accesso consentito";
    } else {
        return "Accesso negato";
    }
}

console.log(controlloAccesso("12345", "12345")); // Successo
console.log(controlloAccesso("1234", "1234"));   // Troppo corta


// 6. APPLICAZIONE SCONTI MASSIVI (Array Processing)
let prezziProdotti = [50, 150, 200, 80];

function applicaScontiSpeciali(listaPrezzi) {
    for (let prezzo of listaPrezzi) {
        if (prezzo > 100) {
            console.log(`Prezzo speciale (sconto 20%): ${prezzo * 0.8}€`);
        } else {
            console.log(`Prezzo standard: ${prezzo}€`);
        }
    }
}

applicaScontiSpeciali(prezziProdotti);

//ARROW FUNCTION
/**
 * SEZIONE: ARROW FUNCTIONS (Sintassi Moderna)
 */

// 1. CALCOLO IVA RAPIDO (Ritorno implicito su una riga)
const calcolaIva = (prezzo) => prezzo * 1.22;

console.log("Prezzo con IVA (da 100€):", calcolaIva(100));


// 2. ETICHETTA PRODOTTO (Template Literal + Arrow)
const creaEtichetta = (nome, prezzo) => `Prodotto: ${nome}, Prezzo: ${prezzo}€`;

console.log(creaEtichetta("Zaino Design", 50));


// 3. VALIDAZIONE SCONTO (Logica con Boolean)
const isScontato = (prezzoOriginale, prezzoFinale) => {
    return prezzoFinale < prezzoOriginale;
};

console.log("Il prodotto è in saldo?", isScontato(100, 80));


// 4. CONVERTITORE VALUTA (Euro to USD)
const euroToUsd = (euro) => euro * 1.10;

console.log("100€ in Dollari:", euroToUsd(100));


// 5. FORMATTATORE COLORE (Data Cleaning rapido)
const formattaColore = (colore) => `#${colore.trim()}`;

console.log("Colore formattato:", formattaColore("  rosso  "));

//1. AGGIUNGI COLORE

colori.push("viola");
console.log("Colori dopo il push:", colori);

//2. USA INCLUDES

console.log("Il colore 'blu' è presente?", colori.includes("blu"));

//3. USA JOIN

console.log("colori uniti:" + colori.join(", "));

//4. USA SPLICE

colori.splice(1, 1, "giallo");

console.log("Colori nuovi:", colori);

//5. USA POP
colori.pop();
console.log("Colori senza il viola", colori);

//6. USA SHIFT
colori.shift();

console.log("Ora al primo posto c'è:", colori);

//7. USA UNSHIFT
colori.unshift("fucsia");

console.log("La nuova lista di colori è:",colori);
//8. USA REVERSE

colori.reverse();

console.log("L'ordine dei colori ora è:", colori);

//9. USA SORT
colori.sort();

console.log("Ordine alfabetico dei colori:", colori);

//10. INDEX OF
let posizioneBlu = colori.indexOf("blu");

console.log("La posizione del blu è:", posizioneBlu); 

//11. FIND

let trovaColore = colori.find(c => c === "fucsia");

console.log("Colore trovato:", trovaColore);

//12.SLICE
let selezionaColori = colori.slice(0,2);

console.log("I colori trovati sono:", selezionaColori);

//13. CONCAT
let nuoviColori= ["arancione", "bordeaux"];

let tuttiColori= colori.concat(nuoviColori);

console.log("la lista nuova di colori sarà:", tuttiColori);

//14. ARRAY MULTIDIMENSIONALE
let scacchiera = [
    ["a1", "a2", "a3"],
    ["b1", "b2", "b3"],
    ["c1", "c2", "c3"]

];
console.log("La posizione b2 è:", scacchiera[1][1]);

//15. mix di metodi
let listaIniziale = ["tastiera", "mouse", "stampante"];
const gestisciOrdini = (lista) => {
    lista.unshift("monitor curvo");
    lista.pop();
    lista.reverse();
    let risultatoFinale =lista.join(" | ");
    return risultatoFinale;
}

console.log("la lista aggiornata è:", gestisciOrdini(listaIniziale));



let preparaVetrina = [50, 20, 10, 80, 100];
const vetrinaScontata = (prezzi) => {
    prezzi.unshift(5);
    prezzi.sort((a, b) => b - a);
    prezzi.pop();
    let prezziTop = prezzi.slice(0, 3);
    console.log("I prezzi più alti sono:", prezziTop);
    let prezziTotali= prezziTop.join(" --- ");
    return prezziTotali;

}
console.log("La vetrina aggiornata è:", vetrinaScontata(preparaVetrina));