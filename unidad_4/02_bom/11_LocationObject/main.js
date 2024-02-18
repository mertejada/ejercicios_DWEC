let button = document.getElementById('open');
let ventana;
let url = 'https://github.com/mertejada';

button.addEventListener('click', (event) => {
    event.preventDefault();
    ventana = window.open('https://github.com/mertejada/clinicaSerentis', '_blank');
    setTimeout(() => {
        ventana.location.assign(url); //ERROR: DOMException: Failed to read a named property 'assign' from 'Location': Blocked a frame with origin
    }, 500); 

    setTimeout(() => {
        location.reload(); //ERROR: Refused to load the font '<URL>' because it violates the following Content Security Policy directive: "font-src github.githubassets.com".
    }, 10000);

    console.log(location.hostname);
    console.log(location.protocol);
    console.log(location.port);
});



