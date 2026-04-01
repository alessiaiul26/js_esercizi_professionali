/* ==========================================================================
   PROGETTO: WEB AGENCY PROJECT MANAGER (Programmazione a Oggetti - OOP)
   Descrizione: Automazione preventivi tramite Classi e Metodi d'Istanza.
   Concetti: Class, Constructor, This, Method Chaining.
   ========================================================================== */
   //ES1
class Progetto {
    constructor(nomeCliente, tipoServizio, prezzoBase) {
        this.nomeCliente = nomeCliente;
        this.tipoServizio = tipoServizio;
        this.prezzoBase = prezzoBase;

    }
    //METODI
    descrizione() {
        return `Cliente: ${this.nomeCliente} | Servizio:${this.tipoServizio}`
    }
    calcoloTotale() {
        return this.prezzoBase * 1.22
    }
    riepilogoCompleto() {
        return `${this.descrizione()} | Totale Iva Inc:${this.calcoloTotale()}`
    }

};

//ISTANZE
let progetto1 = new Progetto("Studio Verdi", "Layout", 100);
let progetto2 = new Progetto("Studio Rossi", "Logo Design", 500)
let progetto3 = new Progetto("Ristorante da Mario", "Sito Web", 1200)

console.log(progetto1.riepilogoCompleto());
console.log(progetto2.riepilogoCompleto());
console.log(progetto3.riepilogoCompleto());

//ES 2
class Utente {
    constructor(username="Gigi12", email="gigi@email.it", ruolo="Grafico"){
        this.username = username;
        this.email = email;
        this.ruolo = ruolo;
    }
    cambiaruolo(nuovoRuolo){
        this.ruolo = nuovoRuolo
        return `Ruolo di ${this.username} aggiornato a ${nuovoRuolo}`;
    }
    verificaEmail(){
       if (this.email.includes("@")){
        return "Email valida";
       } else {
        return "Email non valida"
       }
    }
}
let utenteDefault = new Utente();
console.log(utenteDefault.cambiaruolo("fruttivendolo"));
let utente1 = new Utente("Alessia", "alessia@libero.it", "Admin")
console.log(utente1.cambiaruolo("Super-Admin"));
console.log(utente1.verificaEmail());

//ES 3
class Articolo {
    constructor(nome, prezzi, quantita){
        this.nome= nome;
        this.prezzi= prezzi;
        this.quantita=quantita;
    }
    //metodo
    vendi(unita){
        this.quantita = this.quantita - unita;
        if(this.quantita <= 0){
            console.log(`${this.nome} esaurito!`)
        }
        else{
            console.log(`vendute ${unita} unita di ${this.nome}. Rimasti: ${this.quantita}`)
        }
    }
}
//istanze
 let mioTelefono = new Articolo("Iphone", 1500, 27);
 mioTelefono.vendi(5);
 mioTelefono.vendi(30);

 //ES4
 class Prenotazione {
    constructor(cliente, ora, conferma= false){
    this.cliente = cliente;
    this.ora = ora; 
    this.conferma = conferma;
    }
    accetta(){
        this.conferma = true;
        console.log(`Appuntamento di ${this.cliente} confermato`)
    }
    stato(){
        if(this.conferma === true){
            console.log(`Prenotazione confermata per ${this.cliente} alle ${this.ora}`)
        }
        else{
            console.log(`In attesa di conferma per ${this.cliente}`)
        }
    }
 }
 let prenotazione1 = new Prenotazione("Gianni", "18.30");
 prenotazione1.stato();
 prenotazione1.accetta();
 prenotazione1.stato();

 //ES 5
class Spedizione{
    constructor(prodotto, prezzoArticolo, distanzaKm, stato = "In preparazione"){
        this.prodotto = prodotto;
        this.prezzoArticolo = prezzoArticolo;
        this.distanzaKm = distanzaKm;
        this.stato = stato
    }
    calcolaCosto(){
       return this.prezzoArticolo + (this.distanzaKm * 0.5);
    }
    inviato(){
     this.stato = "Spedito";

    }
    info(){
        console.log(`Pacco:${this.prodotto} | Stato:${this.stato} | Totale da pagare:${this.calcolaCosto()}€`)
    }
}

let spedizione1 = new Spedizione("Monitor", 200, 100)
spedizione1.info();
spedizione1.inviato();
spedizione1.info();

//ES 6

/* -------------------------------------------------------------------------- */
/* ESERCIZIO 6: CINEMA BOOKING (Gestione Sala)                                */
/* -------------------------------------------------------------------------- */

class Cinema {
    constructor(film, prezzoBiglietto, postiTotali, postiOccupati = 0) {
        this.film = film;
        this.prezzoBiglietto = prezzoBiglietto;
        this.postiTotali = postiTotali;
        this.postiOccupati = postiOccupati;
    }

    prenota(numeroPosti) {
        // Calcoliamo quanti ne rimangono
        let postiRimanenti = this.postiTotali - this.postiOccupati;

        if (numeroPosti <= postiRimanenti) {
            this.postiOccupati += numeroPosti; 
            console.log(`✅ Prenotazione effettuata per ${this.film}: ${numeroPosti} posti.`);
        } else {
            console.log(`❌ Posti insufficienti per ${this.film}. Rimasti: ${postiRimanenti}`);
        }
    }

    incassoTotale() {
        return this.prezzoBiglietto * this.postiOccupati;
    }

    statoSala() {
        let liberi = this.postiTotali - this.postiOccupati;
        console.log(`Film: ${this.film} | Liberi: ${liberi} | Incasso: ${this.incassoTotale()}€`);
    }
}

// --- TEST ---
let cinema1 = new Cinema("Inception", 10, 50);

cinema1.prenota(10); // Ne prende 10
cinema1.prenota(45);
cinema1.statoSala(); // Mostra il riepilogo finale


