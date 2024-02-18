let letterForm = document.getElementById('letter-form');

letterForm.addEventListener('submit', (event) => {
    event.preventDefault();
    let letter = document.getElementById('letter').value;

    //le voy a hacer una peticion al fichero server-php para que me devuelva un array 
    //con las ciudades que empiezan por la letra que he introducido

    fetch('server.php?letter=' + letter).then((response) => {
        return response.json();
    }
    ).then((data) => {
        let cities = document.getElementById('cities');
        cities.innerHTML = '';
        data.forEach((city) => {
            let li = document.createElement('li');
            li.textContent = city;
            cities.appendChild(li);
        });
    });

});