
//1. Make a paragraph that change its appeareance if the mouse passes over it
//-----------------------------------------------------------------------
let mouseOverParagraph = document.getElementById("mouse-over-event");

mouseOverParagraph.addEventListener("mouseover", function(event) {
    mouseOverParagraph.classList.add("orange");
});

//2.Make a input that replicates what user inputs in another input
//-----------------------------------------------------------------------
let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");

input1.addEventListener("input", function(event) {
    input2.value = input1.value;
});


//3. Make a infinity scroll webpage.
//-----------------------------------------------------------------------

let html = document.documentElement;



//4.Create a paragraph you can write on when clicking on it
//-----------------------------------------------------------------------

let paragraph = document.getElementById("writeable-paragraph");

paragraph.addEventListener("click", function(event) {
    paragraph.contentEditable = true;
    paragraph.focus();
});

//he buscado y tambien he encontrado que se puede hacer con el atributo contentEditable directamente en el html

//5. Create a web page with a form to choose different geometric shapes: ...
let form = document.getElementById("choose-shape");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    let surface = 0;
    switch (form.elements["shape"].value) {
        case "circle":
            let radio = parseFloat(prompt("Radio of the circle"));
            surface = Math.PI * Math.pow(radio, 2);
            break;
        case "square":
            let side = parseFloat(prompt("Side length of the square"));
            surface = Math.pow(side, 2);
            break;
        case "triangle":
            let base = prompt("Base and height of the triangle");
            let height = prompt("Enter the height of the triangle");

            surface = (base * height) / 2;
            break;
        default:
            alert("Error");
    }

    alert("The surface is " + surface);

});


//6. Create a web page to simulate how much will a real state buyer will pay according to: the loan, the interest rate and the payback period. The solution must change at any user input, no matter if he hasn't finished entering data

let loan = document.getElementById("loan");
let interest = document.getElementById("interest");
let payback = document.getElementById("payback");
let result = document.getElementById("total");

loan.addEventListener("input", function(event) {
    calculate();
});

interest.addEventListener("input", function(event) {
    calculate();
});

payback.addEventListener("input", function(event) {
    calculate();
});

function calculate() {

    //aqui deberia ir cambiando el resultado segun el input del usuario
    //pero no entiendo realmente como calcular el resultado de esto
}