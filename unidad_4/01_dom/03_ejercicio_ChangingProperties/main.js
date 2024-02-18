//1.Downgrade the h1 tag to an h2 one
//------------------------------------

let h1 = document.body.querySelector("h1");
let h2 = document.createElement("h2");
h2.innerHTML = h1.innerHTML;
h1.replaceWith(h2);

/*let h1s = document.body.getElementsByTagName("h1");
let h2;

for (h1 of h1s) {
    h2 = document.createElement("h2");
    h2.innerHTML = h1.innerHTML; //para que h2 tenga el mismo contenido que el h1
    h1.replaceWith(h2);
}*/ //Lo había hecho como si hubiera más de un h1, pero solo hay uno


//2. Replace only h2 content with a new text
//-------------------------------------------

let h2s = document.body.getElementsByTagName("h2");

for (h2 of h2s) {
    h2.innerHTML = "Esto es un título de tipo h2";
}


//3.Modify the first image source and alt properties
//---------------------------------------------------

let firstImage = document.body.querySelector("img"); //selecciona la primera imagen
firstImage.setAttribute("src", "https://picsum.photos/200/300"); 
// tambien podria haber hecho img.src = "https://picsum.photos/200/300";
firstImage.setAttribute("alt", "Imagen aleatoria");


//4. Replace the text of any p tag with "Hello, I'm a paragraph"
//----------------------------------------------------------------
let pGroup = document.body.getElementsByTagName("p");

for(p of pGroup){
    p.innerHTML = "Hello, I'm a paragraph";
}


//5.Modify the second image text
//------------------------------
let secondImg = document.body.getElementsByTagName("img")[1];
secondImg.setAttribute("alt", "Imagen aleatoria 2");

//6.Assign a non-standard property to body called info-fecha and assign today's date
//----------------------------------------------------------------------------------
let today = new Date();
document.body.setAttribute("info-fecha", today);

//7.Modify first image alt text
//------------------------------
//ya la habia modificado antes, asi que ya la habia seleccionado
firstImage.setAttribute("alt", "Imagen aleatoria 1 (modificada)");


//8.Console out all first image attributes
//-----------------------------------------
console.log(firstImage.attributes);

//9.Change last image property "size" (after checking that exists)
//-----------------------------------------------------------------
//se que la ultima imagen es la 2da, pero aun asi voy a hacerlo como si no lo supiera
let lastImage = document.body.getElementsByTagName("img")[document.body.getElementsByTagName("img").length - 1];

if(!lastImage.hasAttribute("size")){
    lastImage.setAttribute("size", "200x300");
} 
//habia pensado en hacerlo con toggle porque yo sé que el atributo no existe, pero no creo que sea correcto


//10.Add an id="ultima_imagen" to the last image
//-----------------------------------------------
lastImage.setAttribute("id", "ultima_imagen");


//11.Add an attribute tipo="parrafo" to all p
//-------------------------------------------- 
for(p of pGroup){ //ya lo habia seleccionado antes
    p.setAttribute("tipo", "parrafo");
}

//12.Add a text to each element in the list (must be scalable)
//-------------------------------------------------------------
let listElements = document.querySelectorAll("ul > *");  //IMPORTANTE QUE SE ME VA A OLVIDAR!

for(let element of listElements){
    element.innerHTML += " (Estoy en la lista!)";
}


//13.Add a paragraph after the last element with a text counting the number of items in the list
//-----------------------------------------------------------------------------------------------
let lastElement = listElements[listElements.length - 1];
//let lastElement = document.querySelector("ul > *:last-child"); //tambien se puede hacer asi. IMPORTATE!!!
let p2 = document.createElement("p");

//textContent parece que es el mas correcto en este caso
p2.textContent = `El número de elementos total es: ${listElements.length}`;

lastElement.after(p2);


//14.Add a paragraph, at the end of the document, containing how many classes has the last paragraph of the first article and their names
//---------------------------------------------------------------------------------------------------------------------------------------
let lastParagraph = document.querySelector("article:first-of-type > p:last-of-type");
let classNumber = lastParagraph.classList.length; //IMPORTANTE QUE SE ME VA A OLVIDAR!
let classNames = lastParagraph.classList.value; //IMPORTANTE QUE SE ME VA A OLVIDAR!
let p3 = document.createElement("p");
p3.textContent = `El número de clases del último párrafo del primer artículo es: ${classNumber}. Sus nombres son: ${classNames}`;
document.body.appendChild(p3);

//15.Add two classes to the previous paragraph: "clase1" and "clase2"
//--------------------------------------------------------------------
lastParagraph.classList.add("clase1", "clase2");

//16.Remove the last created class
//---------------------------------
lastElement.classList.remove("clase2");

//17.Add a boolean attribute to the first image
//----------------------------------------------
firstImage.setAttribute("disabled", ""); //no se si esta bien
