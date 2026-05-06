"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let password = 0;
while (password !== 1111) {
    let input = prompt("Ingrese la contraseña:");
    password = parseInt(input || "0");
    if (password !== 1111) {
        alert("Contraseña incorrecta");
    }
}
alert("Acceso concedido");
//# sourceMappingURL=app.js.map