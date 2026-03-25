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

class Articolo {
    constructor(nome="Iphone", prezzi=500, quantita=26){
        this.nome= nome;
        this.prezzi= prezzi;
        this.quantita=quantita;
    }
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
 let mioTelefono = new Articolo();
 mioTelefono.vendi(5);
 mioTelefono.vendi(30);