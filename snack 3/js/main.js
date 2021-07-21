// Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari

var arrayInteri = [0, 1, 2, 3, 4, 5];
var sommaDispari = 0;
console.log(arrayInteri);

for (i = 0; i < arrayInteri.length; i++) {
  if (arrayInteri[i] % 2 != 0) {
    sommaDispari += arrayInteri[i];
  }
}

console.log(sommaDispari);
