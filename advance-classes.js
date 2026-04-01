class Prodotto {
    constructor(nome, prezzo){
        this.nome = nome;
        this.prezzo = prezzo;
    }
    mostraDettagli() {
        return `Prodotto: ${this.nome} | Prezzo: ${this.prezzo}€`
    }
}

class ProdottoScontato extends Prodotto {
    constructor(nome, prezzo, percentualeSconto){
        super(nome,prezzo);
        this.percentualeSconto = percentualeSconto;
    }
    prezzoFinale(){
        let sconto = (this.prezzo * this.percentualeSconto)/100;
        return this.prezzo - sconto;
    }
    mostraDettagli() {
        return `${super.mostraDettagli()} | SCONTO: ${this.percentualeSconto}% | FINALE: ${this.prezzoFinale()}€`
    }
}
let prodotto1 = new ProdottoScontato("Cover", 20, 10);
console.log(prodotto1.mostraDettagli());

class Membro {
    constructor(name, spesaTotale){
        this.name = name;
        this.spesaTotale = spesaTotale;
    }
    mostraProfilo() {
        return `Membro: ${this.name} | Spesa: ${this.spesaTotale}€`
    }
}

class MembroPremium extends Membro{
    constructor(name, spesaTotale, livelloBonus){
       super(name, spesaTotale);
       this.livelloBonus = livelloBonus
    }
    calcolaSconto() {
        let risparmio = (this.spesaTotale * this.livelloBonus)/100;
        return risparmio;
    }
    mostraProfilo(){
        return `${super.mostraProfilo()} | Sconto Riservato: ${this.calcolaSconto()}€`;
    }
}

let membro1 = new MembroPremium("Luca", 1500, 10);
console.log(membro1.mostraProfilo());

class Articolo {
    constructor(nome, prezzoEuro){
        this.nome = nome;
        this.prezzoEuro = prezzoEuro;
    }
    dettagli(){
        return `Articolo: ${this.nome} | Prezzo: ${this.prezzoEuro}€`
    }
    static convertiInDollari(valoreEuro){
       return valoreEuro * 1.10
    }
    prezzoUsa(){
        return Articolo.convertiInDollari(this.prezzoEuro)
    }
}
let articolo1 = new Articolo("zaino", 50)
console.log(articolo1.dettagli());
console.log(`prezzo in the USA ${articolo1.prezzoUsa()}$`)