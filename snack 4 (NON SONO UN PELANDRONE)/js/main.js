// Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.

var myArray1 = ["elemento"];
var myArray2 = ["elemento", "elemento", "elemento"];

console.log("Array iniziale 1: " + myArray1);
console.log("Array iniziale 2: " + myArray2);

for (i = 0; i < myArray1.length; i++) {
  for (j = 0; j < myArray2.length; j++) {
    if (myArray1.length < myArray2.length) {
      myArray1.push("elemento");
    } else if (myArray2.length < myArray1.length) {
      myArray2.push("elemento");
    }
  }
}

console.log("Array finale 1: " + myArray1);
console.log("Array finale 2: " + myArray2);
