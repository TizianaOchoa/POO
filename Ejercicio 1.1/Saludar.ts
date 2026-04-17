function saludar(): void {
    let input = document.getElementById("nombre") as HTMLInputElement;
    let resultado = document.getElementById("resultado") as HTMLElement;

    let nombre: string = input.value;

    resultado.innerText = "Hola, " + nombre;
}