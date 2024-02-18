//1.second paragraph
let paragraphsSelection = document.getElementsByTagName("p");
console.log(paragraphsSelection[1]);

//2.title
let titleSelection = document.getElementsByTagName("h1");
console.log(titleSelection);

//3.first section
let firstSectionSelection = document.getElementsByTagName("section");
console.log(firstSectionSelection[0]);

//4.all paragraphs with class=parrafo_cuerpo
let classParagraphSelection = document.getElementsByClassName("parrafo_cuerpo");
console.log(classParagraphSelection);

//5."apellido" input field
let inputSelection = document.getElementsByName("apellido");
console.log(inputSelection);

//6.first section - ya hecha en el ejercicio 3, asi que la repito pero con query
let firstSectionSelection2 = document.querySelector("section");
console.log(firstSectionSelection2);

//7.last section
let lastSectionSelection = document.getElementsByTagName("section");
console.log(lastSectionSelection[lastSectionSelection.length - 1]);

//8.all paragraphs
//ya he hecho la seleccion en el ejercicio 1
console.log(paragraphsSelection); //todos los parrafos

