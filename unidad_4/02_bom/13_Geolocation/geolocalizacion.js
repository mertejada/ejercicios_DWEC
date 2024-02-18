

let seccion = document.querySelector('section');
let caja_mensajes = document.querySelector('#caja-mensajes');

seccion.addEventListener('click', function(evento) {
    if(evento.target.id == "geolocalizar"){
        const opciones = {
            enableHighAccuracy: true, //Precisión alta
            maximumAge: 0 //Tiempo máximo de caché de la posición
        };
    
    
        if(evento.target.id == "geolocalizar"){
            if(navigator.geolocation){
                navigator.geolocation.getCurrentPosition(muestraPosicion, muestraError);
                //mapa = navigator.geolocation.watchPosition(muestraPosicion, muestraError, opciones); //Muestra la posición actual y la va actualizando
                
            }else{
                caja_mensajes.innerHTML = "Geolocalización no es soportada por tu navegador";
            }
        }

    }else if (evento.target.id == "medir-distancia"){
    }
    
});

function muestraPosicion(posicion){
caja_mensajes.innerHTML = "Latitud: " + posicion.coords.latitude + "<br>Longitud: " + posicion.coords.longitude
    + "<br>Altitud: " + posicion.coords.altitude + "<br>Velocidad: " + posicion.coords.speed + "<br>Precisión: " + posicion.coords.accuracy + "<br>Exactitud: " + posicion.coords.altitudeAccuracy;
    inicializar_mapa();
    mostrarMapa(posicion);
    
}

function muestraError(error){
    switch(error.code){
        case error.PERMISSION_DENIED:
            caja_mensajes.innerHTML = "El usuario no ha permitido la geolocalización";
            break;
        case error.POSITION_UNAVAILABLE:
            caja_mensajes.innerHTML = "Información de geolocalización no disponible";
            break;
        case error.TIMEOUT:
            caja_mensajes.innerHTML = "La solicitud ha caducado";
            break;
        default:
            caja_mensajes.innerHTML = "Error desconocido";
            break;
    }
}

function mostrarMapa(posicion){
    var map = L.map('map', {
        center: [posicion.coords.latitude, posicion.coords.longitude],
        zoom: 13
    });

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    var marker = L.marker([posicion.coords.latitude, posicion.coords.longitude]).addTo(map);
    marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();


}

//FUNCION PARA MEDIR DISTANCIA RECORRIDA SI CAMINAMOS
let distancia = 0;

function inicializar_mapa(){
    const mapwrapper = document.getElementById('map_wrapper');
    const map = document.getElementById('map');

    const newmap = document.createElement('div');
    newmap.id = 'map'; //la biblioteca de mapas necesita un div con id map


    mapwrapper.removeChild(map);
    mapwrapper.append(newmap);

    mapwrapper.style.display = 'block';

}