function clasificar(): void {
    let input = (document.getElementById("caracter") as HTMLInputElement).value.toLowerCase();
    let resultado = document.getElementById("resultado") as HTMLElement;

    switch (input) {

        // Vocales
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
            resultado.innerText = "Es una vocal";
            break;

        // Números
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

        // Consonantes (todo lo demás)
        default:
            resultado.innerText = "Es una consonante";
    }
}