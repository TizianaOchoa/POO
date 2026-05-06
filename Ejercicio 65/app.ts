let continuar: boolean = true;

while (continuar) {
    let input1 = prompt("Ingrese el primer número (o cancelar para salir):");
    let input2 = prompt("Ingrese el segundo número:");

    if (input1 === null || input2 === null) {
        continuar = false;
        break;
    }

    let num1: number = parseInt(input1);
    let num2: number = parseInt(input2);

    if (num2 === 0) {
        alert("No se puede dividir por cero");
    } else if (num1 % num2 === 0) {
        alert(num1 + " es múltiplo de " + num2);
    } else {
        alert(num1 + " no es múltiplo de " + num2);
    }
}

alert("Programa finalizado");