"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function convertir() {
    let input = document.getElementById("numero").value;
    let numero = parseInt(input);
    let resultado = document.getElementById("resultado");
    switch (numero) {
        case 1:
            resultado.innerText = "uno";
            break;
        case 2:
            resultado.innerText = "dos";
            break;
        case 3:
            resultado.innerText = "tres";
            break;
        case 4:
            resultado.innerText = "cuatro";
            break;
        case 5:
            resultado.innerText = "cinco";
            break;
        default:
            resultado.innerText = "Número inválido";
    }
}
//# sourceMappingURL=app.js.map