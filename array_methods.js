/* ==========================================================================
PROGETTO: MANIPOLAZIONE DATI BACK-OFFICE (JavaScript Array Methods)
Alessia Iulianetti
Data: 2026
==========================================================================
*/

/**
 * ESERCIZIO 1: IL GESTORE DEL TEAM
 * CONSEGNA:
 * 1. MAP: Pulisci i nomi dagli spazi (.trim()) e falli in MAIUSCOLO.
 * 2. FILTER: Tieni solo i nomi con più di 4 lettere.
 * 3. SORT: Crea una copia dell'array filtrato e ordinalo alfabeticamente.
 * 4. FIND: Cerca se esiste esattamente il collaboratore "MARCO".
 * 5. REDUCE: Calcola la somma totale delle lettere di tutto il team.
 */
let collaboratori = ["marco", "luca", "giovanni", "stefano", "maria"];

let gestisciTeam = (lista) => {
  let pulizia = lista.map(nome => nome.trim().toUpperCase());
  let filtrati = pulizia.filter(nome => nome.length > 4);
  let copia = [...filtrati].sort();
  let nomeUnico = pulizia.find(nome => nome === "MARCO");
  let lettereTotali = filtrati.reduce((acc, curr) => acc + curr.length, 0);

  console.log("--- ESERCIZIO 1: TEAM ---");
  console.log(`Nomi corretti: ${pulizia}`);
  console.log(`Filtro nomi lunghi: ${filtrati}`);
  console.log(`Lista ordinata: ${copia.join(" -> ")}`);
  console.log(`Ricerca 'MARCO': ${nomeUnico ? "Trovato" : "Non trovato"}`);
  console.log(`Totale lettere team: ${lettereTotali}`);
  console.log("\n");
};
gestisciTeam(collaboratori);


/**
 * ESERCIZIO 2: IL FILTRO EDITORIALE (SEO)
 * CONSEGNA:
 * 1. MAP: Rendi i titoli minuscoli e senza spazi (formato URL).
 * 2. FILTER: Escludi i titoli più corti di 10 caratteri (non buoni per SEO).
 * 3. SORT: Ordina i titoli scelti in ordine alfabetico (senza rovinare l'originale).
 * 4. REDUCE: Calcola il peso totale (caratteri) degli articoli scelti.
 */
let articoli = [" Guida js ", "CSS", " HTML per tutti ", "React VS Angular"];

let preparaPost = (lista) => {
  let listaFinale = lista.map(art => art.trim().toLowerCase());
  let filtraArticoli = listaFinale.filter(art => art.length > 10);
  let copiaArticoli = [...filtraArticoli].sort();
  let articoliTot = filtraArticoli.reduce((acc, curr) => acc + curr.length, 0);

  console.log("--- ESERCIZIO 2: SEO ---");
  console.log(`Link puliti: ${listaFinale.join(" | ")}`);
  console.log(`Articoli approvati SEO: ${filtraArticoli}`);
  console.log(`Totale caratteri approvati: ${articoliTot}`);
  console.log(`Vetrina finale: ${copiaArticoli.join(" - ")}`);
  console.log("\n");
};
preparaPost(articoli);


/**
 * ESERCIZIO 3: TRAVEL PLANNER (DATA EXTRACTION)
 * CONSEGNA:
 * 1. MAP: Pulisci i dati e rendi le città MAIUSCOLE.
 * 2. FILTER: Filtra solo i viaggi "Low Cost" (prezzo < 1000€).
 * 3. SOME: Verifica se esiste un'offerta a esattamente 500€.
 * 4. EVERY: Controlla che nessun prezzo sia sospetto (tutti > 100€).
 * 5. FIND + SPLIT: Trova la città "PARIGI" ed estrai solo il nome senza il prezzo.
 * 6. REDUCE: Calcola il budget totale necessario per comprare tutti i viaggi Low Cost.
 */
let pacchetti = ["Roma:500", " Parigi:1200 ", " Berlino:800", "Madrid:900"];

let organizzaViaggi = (lista) => {
  let clean = lista.map(p => p.trim().toUpperCase());
  
  // Filtro prezzi < 1000
  let economici = clean.filter(p => Number(p.split(":")[1]) < 1000);
  
  // Controlli logici
  let prezzoEsatto = economici.some(p => p.includes("500"));
  let viaggiCento = economici.every(p => Number(p.split(":")[1]) > 100);
  
  // Ricerca e isolamento stringa
  let elementoTrovato = clean.find(p => p.includes("PARIGI"));
  let soloNome = elementoTrovato ? elementoTrovato.split(":")[0] : "Non trovato";
  
  // Somma prezzi
  let totaleLowCost = economici.reduce((acc, curr) => {
    return acc + Number(curr.split(":")[1]);
  }, 0);

  console.log("--- ESERCIZIO 3: TRAVEL ---");
  console.log(`Catalogo pulito: ${clean}`);
  console.log(`Viaggi Low Cost: ${economici}`);
  console.log(`Esiste offerta 500€?: ${prezzoEsatto}`);
  console.log(`Prezzi sicuri (>100€): ${viaggiCento}`);
  console.log(`Dettaglio ricerca: ${soloNome}`);
  console.log(`Budget totale Low Cost: ${totaleLowCost}€`);
};
organizzaViaggi(pacchetti);



