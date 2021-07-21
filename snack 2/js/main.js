// Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di invitati.

var listaNomi = ["Luca", "Alessio", "Filippo", "Dario"];
var listaCognomi = ["Rossi", "Verdi", "Bianchi", "Gialli"];
var listaRandom = [];

for (i = 0; i < 4; i++) {
  listaRandom.push(
    listaNomi[Math.floor(Math.random() * listaNomi.length)] +
      " " +
      listaCognomi[Math.floor(Math.random() * listaCognomi.length)]
  );
}
console.log(listaRandom);
