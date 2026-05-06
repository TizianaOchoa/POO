"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function clasificar() {
    let input = document.getElementById("caracter").value.toLowerCase();
    let resultado = document.getElementById("resultado");
    if (input === "a" || input === "e" || input === "i" || input === "o" || input === "u") {
        resultado.innerText = "Es una vocal";
    }
    else if (input >= "0" && input <= "9") {
        resultado.innerText = "Es una cifra numérica";
    }
    else {
        resultado.innerText = "Es una consonante";
    }
}
//# sourceMappingURL=app.js.map