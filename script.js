let container = document.querySelector('.container');
let resetBtn = document.querySelector('.resetBtn');
let newGrid = document.querySelector('.newGrid'); 

function defaultGrid() {
	createGrid(16);
	gridItemSize(16)
}

function gridItemSize(itemSize) {
	container.style.gridTemplateColumns = `repeat(${itemSize}, 1fr)`;
}

let allGridItems;
function createGrid(gridSize) {
	 allGridItems = []; 
	for (i = 0; i < gridSize * gridSize; i++) {
		let gridItem = document.createElement('div'); 
		gridItem.classList.add('gridItem');
		allGridItems.push(gridItem); 
		container.appendChild(gridItem);

		gridItem.addEventListener('mouseover', () => {
			gridItem.classList.remove('resetSketchBoard');
			gridItem.classList.add('mouseover_color');
		});
	} 
}

function resetSketchBoard (){
	allGridItems.forEach( gridItem => {
		gridItem.classList.remove('mouseover_color');
		gridItem.classList.add('resetSketchBoard');
	});
}

function createNewGrid() {
	let newGridSize = prompt("Enter a number from 1-100");

	if (newGridSize !== null) {
		newGridSize = parseInt(newGridSize);
		removeOldGridItems();
		createGrid(newGridSize);
		gridItemSize(newGridSize);
	}
}

function removeOldGridItems() {
	let containerArray = Array.from(container.childNodes);
	containerArray.forEach((gridItem) => {
		container.removeChild(gridItem);
	});
}

window.addEventListener('load', defaultGrid);
resetBtn.addEventListener('click', resetSketchBoard);
newGrid.addEventListener('click', createNewGrid);


