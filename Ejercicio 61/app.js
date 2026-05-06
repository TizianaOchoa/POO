"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function clasificar() {
    let simbolo = document.getElementById("caracter").value;
    let resultado = document.getElementById("resultado");
    if (simbolo === "." || simbolo === "," || simbolo === ";" || simbolo === ":") {
        resultado.innerText = "Es un signo de puntuación";
    }
    else if (simbolo >= "0" && simbolo <= "9") {
        resultado.innerText = "Es una cifra numérica";
    }
    else {
        resultado.innerText = "Es otro tipo de carácter";
    }
}
//# sourceMappingURL=app.js.map