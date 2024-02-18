//1.Create a temporary structure to store the structure created in the following step
//------------------------------------------------------------------------------------
let temporaryStructure = document.createDocumentFragment();

//2.Create a section with three children: a comment and two articles. Each one must have a paragraph and a link to www.duckduckgo.com
//------------------------------------------------------------------------------------------------------------------------------------
let section = document.createElement("section");

let comment = document.createComment("Esto es un comentario");

//primer articulo
let art1 = document.createElement("article");
let p1 = document.createElement("p");
let a1 = document.createElement("a");
a1.setAttribute("href", "https://duckduckgo.com/");

art1.appendChild(p1);
art1.appendChild(a1);

//segundo articulo
let art2 = document.createElement("article");
let p2 = document.createElement("p");
let a2 = document.createElement("a");
a2.setAttribute("href", "https://duckduckgo.com/");

art2.appendChild(p2);
art2.appendChild(a2);

section.appendChild(comment);
section.appendChild(art1);
section.appendChild(art2);

//3.Attach the temporary structure to the real DOM
//------------------------------------------------
temporaryStructure.appendChild(section);
document.body.appendChild(temporaryStructure);

//4.Clone the previous section to a new one
//------------------------------------------
let clonedSection = section.cloneNode(true);

//5.Remove the content inserted at step 3
//-----------------------------------------
section.remove();

//6.Check if the temporary structure exists and is connected to the DOM
//-----------------------------------------------------------------------
//no se como saber si existe (?) no sé a que se refiere
//si esta conectado:
console.log(document.body.isConnected); //true


//7.Connect the temporary structure to the DOM
//---------------------------------------------
//no entiendo a que se refiere con esto, si ya lo hice en el paso 3 (?)
document.body.appendChild(temporaryStructure);

//8.Remove all the elements on the list marked as vegetables
//-------------------------------------------------------------
//no sé si hay una forma de hacerlo más eficiente (buscar)
let veggies = document.getElementsByClassName("verdura")
for(veggie of veggies){
    veggie.remove();
}

//9.Replace the paragraph of the first article inserted on step 7 with the last paragraph of the document
//-------------------------------------------------------------------------------------------------------
let lastP = document.getElementsByTagName("p")[document.getElementsByTagName("p").length-1];
let firstArtP = document.querySelector("article p");
//para hacer la prueba le estoy añaadiendo un texto al final del parrafo
lastP.textContent += " (este es el ultimo parrafo)";
firstArtP.replaceWith(lastP);

//10.Insert a paragraph after any image with the name of the file
//---------------------------------------------------------------
let images = document.getElementsByTagName("img");

for(img of images){
    let fileRoute = img.src.split("/");
    let fileName = fileRoute[fileRoute.length-1];
    let p = document.createElement("p");
    p.textContent = fileName;
    img.after(p);
}

//11.Insert a comment before any image
//-------------------------------------
let imgComment = document.createComment("Comentario antes de la imagen");

for(img of images){ //ya tenia images declarado
    img.before(imgComment.cloneNode(true));
}

//12.Insert a paragraph before the first and after the last child
//---------------------------------------------------------------
let firstChild = document.body.firstElementChild;
let lastChild = document.body.lastElementChild;

let p3 = document.createElement("p");
p3.innerHTML = "Parrafo antes del primer hijo";

let p4 = document.createElement("p");
p4.innerHTML = "Parrafo despues del ultimo hijo";

firstChild.before(p3);
lastChild.after(p4);


//13.Replace the paragraph of the first article inserted on step 7 with the last paragraph of the document
//-------------------------------------------------------------------------------------------------------
let articleP = document.querySelector("article > p:first-child");
let lastPar = document.querySelector("body > p:last-child");
articleP.replaceWith(lastPar);
//no se por que me reemplaza el segundo y no el primero


//14.Repace, from the content of any article inserted at step 7, only paragraphs
//--------------------------------------------------------------------------------
let articles = document.getElementsByTagName("article");

for(article of articles){
    let paragraphs = article.getElementsByTagName("p");

    for(paragraph of paragraphs){
        paragraph.replaceWith(lastPar.cloneNode(true));
    }
}

//15.Insert a descriptive text before the article of the cat
//-----------------------------------------------------------
let catArticle = document.getElementById("gato");
let descriptiveText = document.createElement("p");
descriptiveText.textContent = "Articulo del gato";

catArticle.before(descriptiveText);

//16.Insert a nice message about cats after its section
//------------------------------------------------------
let message = document.createElement("p");
message.textContent = "Los gatitos son muy lindos";

catArticle.after(message);

//17.Replace the mixed shopping list with two lists: one for vegetables and one for fruits
//-----------------------------------------------------------------------------------------
let shoppingList = document.getElementById("lista_compra");

let vegElements = document.getElementsByClassName("verdura");
let fruitElements = document.getElementsByClassName("fruta");

let vegList = document.createElement("ul");
let fruitList = document.createElement("ul");

for(veg of vegElements){
    let li = document.createElement("li");
    li.innerText = veg.textContent;
    vegList.appendChild(li);
}

for(fruit of fruitElements){
    let li = document.createElement("li");
    li.innerText = fruit.textContent;
    fruitList.appendChild(li);
}

let vegSection = document.createElement("section");
vegSection.setAttribute("id", "lista-verduras");

let fruitSection = document.createElement("section");
fruitSection.setAttribute("id", "lista-frutas");


vegSection.appendChild(vegList);
fruitSection.appendChild(fruitList);

let newLists = document.createDocumentFragment();
newLists.appendChild(vegSection);
newLists.appendChild(fruitSection);

shoppingList.replaceWith(newLists);

