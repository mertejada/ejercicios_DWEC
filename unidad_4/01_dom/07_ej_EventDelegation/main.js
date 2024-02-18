//1. Create a unordered shopping list with three levels that collapse when pressing the parent node. Use only one event handler. Clue: use hidden attribute.
//--------------------------------------------------------------------------------------------------------------------------------------
document.getElementById('shopping-list').addEventListener('click', function(event) {
    event.preventDefault();
        if (event.target.classList.contains('item')) {
        let item = event.target;
        let sublist = item.querySelector('ul');
        sublist.hidden = !sublist.hidden; // toggle sublist
    }
});

//2. Create three boxes with a header, a text and a close button. Make the button work by using just one event listener on the container. Clue: use closest() method
//--------------------------------------------------------------------------------------------------------------------------------------
document.getElementById("container").addEventListener("click", function(event) {
    if (event.target.classList.contains("close-button")) {
        event.target.closest(".box").remove();
    }
});

//3.Create a code that shows a tooltip text over a button when mouse is over and dissapears when mouse is not over. It must appear on top y there is space enough or above it if not. Clues:
// - Use mouseenter and mouseleave events
// - Use getBoundingClientRect() method
// --------------------------------------------------------------------------------------------------------------------------------------

let button = document.getElementById('tool-button');
let tooltip = document.getElementById('tool-tip');

button.addEventListener('mouseover', showTooltip);
button.addEventListener('mouseout', hideTooltip);

function showTooltip(event) {
    let tooltipText = event.target.getAttribute('data-tooltip');
    tooltip.innerHTML = tooltipText;

    let buttonRect = button.getBoundingClientRect();

    tooltip.style.display = 'block';
}

function hideTooltip() {
    tooltip.style.display = 'none';
}

//4.Create a table with two columns: one for numbers and the other for text, and as many rows as you want. When clicking on the header of each column, table must be ordered. Your code must be able to work with huge tables. Clues:
//Use cellIndex to know where you have clicked
//Use dataset to store the kind of information each column has
//--------------------------------------------------------------------------------------------------------------------------------------
const table = document.getElementById('num-text-table');
const headers = table.querySelectorAll('th');

headers.forEach(header => {
    header.addEventListener('click', () => {
        let columnNum = header.cellIndex;
        let dataType = header.dataset.type;

        let rows = Array.from(table.rows).slice(1);

        //He tenido que buscar la manera de hacer este ultimo trozo porque no me salia
        rows.sort((rowA, rowB) => {
            let valueA = rowA.cells[columnNum].textContent.trim();
            let valueB = rowB.cells[columnNum].textContent.trim();

            if (dataType === 'number') {
                return Number(valueA) - Number(valueB);
            } else {
                return valueA.localeCompare(valueB);
            }
        });

        rows.forEach(row => table.appendChild(row));
    });
});

//5.Make the unordered shopping list created at point 1 selectable as you can do at file managers. Users should notice which elements are selected by their background color
let shoppingList = document.getElementById('shopping-list');
shoppingList.addEventListener('click', function(event) {
    if (event.target.tagName.toLowerCase() === "li") {
        event.target.classList.toggle('selected');
    }
});

//6.Using the event 'scroll', create a webpage(...)

let tempStruc = document.createDocumentFragment();

for (let i = 0; i < 50; i++) {
    let p = document.createElement('p');
    p.textContent = `Este es el párrafo nº${i}`;
    tempStruc.appendChild(p);
}

document.getElementById('scroll-container').appendChild(tempStruc);

let scrollButton = document.getElementById('scroll');

scrollButton.addEventListener('click', function() {
    window.scrollTo({ top: 0 });
});