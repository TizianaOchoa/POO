function clasificar(): void {
    let simbolo = (document.getElementById("caracter") as HTMLInputElement).value;
    let resultado = document.getElementById("resultado") as HTMLElement;

    if (simbolo === "." || simbolo === "," || simbolo === ";" || simbolo === ":") {
        resultado.innerText = "Es un signo de puntuación";
    } 
    else if (simbolo >= "0" && simbolo <= "9") {
        resultado.innerText = "Es una cifra numérica";
    } 
    else {
        resultado.innerText = "Es otro tipo de carácter";
    }
}