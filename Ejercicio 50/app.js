"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function comparar() {
    let n1 = document.getElementById("n1").value;
    let n2 = document.getElementById("n2").value;
    let num1 = parseInt(n1);
    let num2 = parseInt(n2);
    let resultado = document.getElementById("resultado");
    if (num1 === num2) {
        resultado.innerText = "Los números son iguales";
    }
    else if (num1 > num2) {
        resultado.innerText = "El mayor es: " + num1;
    }
    else {
        resultado.innerText = "El mayor es: " + num2;
    }
}
//# sourceMappingURL=app.js.map