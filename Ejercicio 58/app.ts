function clasificar(): void {
    let input = (document.getElementById("caracter") as HTMLInputElement).value;
    let resultado = document.getElementById("resultado") as HTMLElement;

    switch (input) {
        case ".":
        case ",":
        case ";":
        case ":":
            resultado.innerText = "Es un signo de puntuación";
            break;

        case "0":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
            resultado.innerText = "Es una cifra numérica";
            break;

        default:
            resultado.innerText = "Es otro tipo de carácter";
    }
}