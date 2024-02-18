//1.Include a new class at the parent of the image of the cat
//-----------------------------------------------------------
let catImg = document.getElementById("gato").getElementsByTagName("img")[0];
let catParent = catImg.parentElement;

catParent.classList.add("info-gatito");

//2.Include a new class at any child of the section with ID "animales"
//---------------------------------------------------------------------

let animals = document.getElementById("animales");
let dog = animals.getElementsByTagName("article")[1];
dog.classList.add("info-perrito");

//3.List all children of the form
//--------------------------------

let children = document.getElementById("formulario-contacto").children;
let childrenList = document.createElement("ul");

for (let child of children) {
    let childEl = document.createElement("li");
    childEl.innerHTML = child.tagName; //he buscado esto pero no se si es lo que se pide
    //childEl.innerHTML = child.outerHTML; //iba a hacer esto 
    childrenList.appendChild(childEl);
}

document.body.appendChild(childrenList);


//4.Change the text of the first and the last element of the shopping list
//-------------------------------------------------------------------------
let shoppingList = document.getElementById("listaCompra");
let firstElement = shoppingList.firstElementChild;
let lastElement = shoppingList.lastElementChild;

firstElement.innerHTML = "Azúcar";
lastElement.innerHTML = "Canela";

//5.Change the text of the first label of the form
//------------------------------------------------
let form = document.getElementById("formulario-contacto");
let firstLabel = form.querySelector("label");
firstLabel.innerHTML = "Usuario: ";

//6.Console out the type of the parent node of the image of the dog
//-----------------------------------------------------------------
let dogImg = document.getElementById("perro").getElementsByTagName("img")[0];
let dogParent = dogImg.parentElement;

console.log(dogParent.nodeType);

//7.Console out the type of the previous sibling of the article where is the cat
//-------------------------------------------------------------------------------
let catArticle = document.getElementById("gato");
let catPreSibling = catArticle.previousElementSibling;
//console.log(catPreviousSibling.nodeType);
//esto da null porque no tiene hermano anterior, asi que lo hago con el perro

let dogArticle = document.getElementById("perro");
let dogPreSibling = dogArticle.previousElementSibling;


console.log(dogPreSibling.nodeType);