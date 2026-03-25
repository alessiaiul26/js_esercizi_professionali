/* ==========================================================================
   PROGETTO: WEB AGENCY PROJECT MANAGER (Programmazione a Oggetti - OOP)
   Descrizione: Automazione preventivi tramite Classi e Metodi d'Istanza.
   Concetti: Class, Constructor, This, Method Chaining.
   ========================================================================== */
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