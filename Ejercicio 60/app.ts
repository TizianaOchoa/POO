function clasificar(): void {
    let input = (document.getElementById("caracter") as HTMLInputElement).value.toLowerCase();
    let resultado = document.getElementById("resultado") as HTMLElement;

    if (input === "a" || input === "e" || input === "i" || input === "o" || input === "u") {
        resultado.innerText = "Es una vocal";
    } 
    else if (input >= "0" && input <= "9") {
        resultado.innerText = "Es una cifra numérica";
    } 
    else {
        resultado.innerText = "Es una consonante";
    }
}