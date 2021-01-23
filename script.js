let container = document.querySelector('.container');
let resetBtn = document.querySelector('.resetBtn');
let newGrid = document.querySelector('.newGrid');

//create the divs and add event to them
let allGridItems = [];
for (i = 0; i < 256; i++) {
	let gridItem = document.createElement('div'); 
		gridItem.classList.add('gridItem');

	allGridItems.push(gridItem);
	container.appendChild(gridItem);

} 

// gridItem is an element fo allGridItems thats why the event is inside the forEach loop
allGridItems.forEach( function(gridItem) {
	gridItem.addEventListener('mouseover', () => {
		gridItem.classList.remove('resetSketchBoard');
		gridItem.classList.add('mouseover');
	});
});


function resetSketchBoard (){
	allGridItems.forEach( gridItem => {
		gridItem.classList.remove('mouseover');
		gridItem.classList.add('resetSketchBoard');
	});
}

resetBtn.addEventListener('click', resetSketchBoard)

