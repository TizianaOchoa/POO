function clasificar(): void {
    let simbolo = (document.getElementById("caracter") as HTMLInputElement).value.toLowerCase();
    let resultado = document.getElementById("resultado") as HTMLElement;

    if (simbolo === "a" || simbolo === "e" || simbolo === "i" || simbolo === "o" || simbolo === "u") {
        resultado.innerText = "Es una vocal";
    } 
    else if (simbolo >= "0" && simbolo <= "9") {
        resultado.innerText = "Es una cifra numérica";
    } 
    else {
        resultado.innerText = "Es una consonante";
    }
}