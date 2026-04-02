//ES1 SPREAD
let prodottiDolci = ["Panettone", "Torrone"];
let prodottiSalati = ["Taralli", "Salame"];
let cestoCompleto = [...prodottiDolci, ...prodottiSalati];
console.log(cestoCompleto);

//ES2 REST
function aggiungiExtra(nomeCliente, ...prezziOmaggio){
  let totale = 0;
  for (let prezzo of prezziOmaggio){
    totale += prezzo;
    console.log(`Cliente: ${nomeCliente} | Omaggi: ${prezziOmaggio.length} | Valore: ${totale}€`);
}
  }

  aggiungiExtra("Anna", 5, 10,2);

let invitati = ["Luca", "Anna", "Marco", "Sara"];
let [organizzatore, ...ospiti] = invitati;

console.log(`L'organizzatore è:`,organizzatore);
console.log(`Gli ospiti sono:`,ospiti);

//ES 3 REST

let ordine = ["ID123", "Maglia Pro", "Taglia L", "Rosso", "Cotone"];
let [idOrdine, ...caratteristiche] = ordine;
console.log(`L'id dell'ordine è:`,idOrdine);
console.log(`Le caratteristiche dell'ordine sono:`,caratteristiche);