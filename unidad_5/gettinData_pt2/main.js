const fetchPromise = fetch('http://gateway.marvel.com/v1/public/comics?ts=1&apikey=53c46bb8d7003f76724de4e8e6c75650&hash=ef4b2f0318d45b6ff9ebe15ab5d157d8');
fetchPromise.then(response => {
    if (!response.ok) throw new Error('Error al cargar el archivo');
    return response.json();
})
.then(data => {
    showSuperheros(data.data.results); // Call showSuperheros with the obtained data
})
.catch(error => {
    console.log(error);
});

function showSuperheros(superheroes) {
    const superherosElement = document.getElementById('superheros');
    superheroes.forEach(superhero => {
        let listItem = document.createElement('li'); // Changed 'ul' to 'li' for individual list items
        let buttonElement = document.createElement('button');

        buttonElement.innerHTML = superhero.title; // Adjust according to your data structure
        listItem.appendChild(buttonElement);

        superherosElement.appendChild(listItem);

        buttonElement.addEventListener('click', () => {
            console.log(superhero); // You can do what you need with the selected superhero here
        });

        
    });
}
