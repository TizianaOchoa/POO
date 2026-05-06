let numero: number = -1;

while (numero !== 0) {
    let input = prompt("Ingrese un número (0 para salir):");
    numero = parseInt(input || "0");

    if (numero !== 0) {
        let cuadrado: number = numero * numero;
        alert("El cuadrado es: " + cuadrado);
    }
}

alert("Programa finalizado");