"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let numero = 12345;
let contador = 0;
while (numero > 0) {
    numero = Math.floor(numero / 10);
    contador++;
}
console.log("Cantidad de cifras: " + contador);
//# sourceMappingURL=cifras.js.map