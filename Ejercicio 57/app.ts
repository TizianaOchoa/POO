function convertir(): void {
    let input = (document.getElementById("numero") as HTMLInputElement).value;
    let numero: number = parseInt(input);

    let resultado = document.getElementById("resultado") as HTMLElement;

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