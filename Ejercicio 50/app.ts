function comparar(): void {
    let n1 = (document.getElementById("n1") as HTMLInputElement).value;
    let n2 = (document.getElementById("n2") as HTMLInputElement).value;

    let num1: number = parseInt(n1);
    let num2: number = parseInt(n2);

    let resultado = document.getElementById("resultado") as HTMLElement;

    if (num1 === num2) {
        resultado.innerText = "Los números son iguales";
    } else if (num1 > num2) {
        resultado.innerText = "El mayor es: " + num1;
    } else {
        resultado.innerText = "El mayor es: " + num2;
    }
}