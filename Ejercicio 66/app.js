"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let continuar = true;
while (continuar) {
    let input1 = prompt("Ingrese el primer número (o cancelar para salir):");
    let input2 = prompt("Ingrese el segundo número:");
    if (input1 === null || input2 === null) {
        continuar = false;
        break;
    }
    let num1 = parseInt(input1);
    let num2 = parseInt(input2);
    if (num1 === 0 || num2 === 0) {
        alert("No se puede evaluar múltiplos con cero");
    }
    else if (num1 % num2 === 0) {
        alert(num1 + " es múltiplo de " + num2);
    }
    else if (num2 % num1 === 0) {
        alert(num2 + " es múltiplo de " + num1);
    }
    else {
        alert("Ninguno es múltiplo del otro");
    }
}
alert("Programa finalizado");
//# sourceMappingURL=app.js.map