const titulo = document.getElementById("titulo")

let estadoinicial = true;

titulo.addEventListener("click", () => {
    if (estadoinicial === true) {
    titulo.innertext = "Bienvenidxs";
}else{
    titulo.innertext = "Hola, soy emilio el adivinador";
}
estadoinicial = !estadoinicial;
})
