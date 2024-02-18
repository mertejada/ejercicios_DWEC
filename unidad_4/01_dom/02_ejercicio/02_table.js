//1.the table with id=age_table
let ageTable = document.getElementById("age-table");
console.log(ageTable);

//2.all labels inside that table
let ageLabels = ageTable.querySelectorAll("label")
console.log(ageLabels);

//3.the first element in that table (with the word "Age")
let ageElement = ageTable.querySelector("[name='age']"); //lo he buscado porque no sabia como hacerlo
//let ageElement = ageTable.getElementsByName("Age"); 
//asi lo habia hecho yo pero no funcionaba porque ese metodo es para el documento entero
console.log(ageElement); 

//4.the form with name="search-person"
let searchForm = document.getElementsByName("search-person");
console.log(searchForm);

//5.first input in that form
//6.the last input in that form
let searchFirstInput = searchForm[0].querySelector("input");
console.log(searchFirstInput);


let searchLastInputSelection = searchForm[0].querySelectorAll("input");
let lastInputSelection = searchLastInputSelection[searchLastInputSelection.length - 1];
console.log(lastInputSelection);
//let searchLastInputSelection = searchFormSelection.querySelector("input:last-of-type"); //vi que se podia hacer asi en internet*/