    let ventana;


document.getElementById('window-form').addEventListener('click', (event) => {
    event.preventDefault();

    let delay = 4000;

    switch (event.target.id) {
        case 'open':
            let url = prompt('Enter the URL');
            let destination = '_blank';

            setTimeout(() => {
                ventana = window.open(url, destination);
            },delay);

            break;

        case 'resize':
            let width = parseInt(prompt('Enter the width'));
            let height = parseInt(prompt('Enter the height'));

            ventana.resizeTo(width, height); //DOMException: An attempt was made to break through the security policy of the user agent.
            
            break;

        case 'close':
            setTimeout(() => {  
                ventana.resizeTo(800, 600); //DOMException: An attempt was made to break through the security policy of the user agent.
            }, delay); 

            break;

            case 'open-2': 
            //Open a new window again and 
            //create a function that asks the user for a time in seconds. Show the descendant count and when it gets to 0, close the last opened window.
            
            ventana = window.open('https://www.google.com', '_blank');
            secondsBeforeClosure();
            

            function secondsBeforeClosure() {
                let seconds = parseInt(prompt('Enter the number of seconds'));
                let interval = setInterval(() => {
                    seconds--;
                    console.log(seconds);
                    if (seconds === 0) {
                        clearInterval(interval);
                        ventana.close(); // no la cierra, supongo que por lo mismo que en resizeTo (aunque no me da error como antes)
                    }
                }, 1000);
            }

    }
});