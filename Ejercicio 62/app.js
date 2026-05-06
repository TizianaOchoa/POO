"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function clasificar() {
    let simbolo = document.getElementById("caracter").value.toLowerCase();
    let resultado = document.getElementById("resultado");
    if (simbolo === "a" || simbolo === "e" || simbolo === "i" || simbolo === "o" || simbolo === "u") {
        resultado.innerText = "Es una vocal";
    }
    else if (simbolo >= "0" && simbolo <= "9") {
        resultado.innerText = "Es una cifra numérica";
    }
    else {
        resultado.innerText = "Es una consonante";
    }
}
//# sourceMappingURL=app.js.map