let boton = document.getElementById("boton");
boton.addEventListener("click", () => {
    boton.style.display = "none";
});

let botones = document.getElementById("botones");
botones.addEventListener("click", (evento) => {
    switch(evento.target.id){
        case "boton-2":
            let text = document.getElementById("texto-1");
            text.style.display = (text.style.display == "none") ? "block" : "none";
            break;
        case "boton-3":
            alert("Has pulsado el botón 3");
            break;
        case "boton-4":
            console.log("Este es un texto aleatorio");
            break;
        default:
    }
    
});

let botonCerrarCaja = document.getElementById("boton-cerrarCaja");
botonCerrarCaja.addEventListener("click", () => {
    let caja = document.getElementById("box");
    let texto = box.querySelector("p");

    if(texto.style.display == "none"){
        texto.style.display = "block";
        botonCerrarCaja.innerHTML = "Cerrar caja";

    }else{
        texto.style.display = "none";
        botonCerrarCaja.innerHTML = "Abrir caja";
    }

    
});

