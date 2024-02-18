const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json');

        fetchPromise.then(response => {
            if (!response.ok) throw new Error({cod:2, mensaje:'Error al cargar el archivo'});
            return response.json(); // Cambiar a response.json() para obtener los datos como JSON
        })
        .then(data => {
            showSuperheroes(data); // Llamar a showSuperheroes con los datos obtenidos
        })
        .catch(error => {
            console.error('Error:', error);
        });

        function showSuperheroes(superheroes) {
            const superheroesElement = document.getElementById('superheros');
            superheroes.members.forEach(superhero => {

                let list = document.createElement('ul');
                let name = document.createElement('li');
                let age = document.createElement('li');
                let secretIdentity = document.createElement('li');
                let powers = document.createElement('li');
                
                name.innerHTML = superhero.name;
                age.innerHTML = superhero.age;
                secretIdentity.innerHTML = superhero.secretIdentity;
                powers.innerHTML = superhero.powers.join(", ");

                list.appendChild(name);
                list.appendChild(age);
                list.appendChild(secretIdentity);
                list.appendChild(powers);
                superheroesElement.appendChild(list);


              });
        }