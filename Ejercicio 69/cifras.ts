let numero: number = 12345;
let contador: number = 0;

while (numero > 0) {
    numero = Math.floor(numero / 10);
    contador++;
}

console.log("Cantidad de cifras: " + contador);