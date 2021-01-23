let container = document.querySelector('.container');
//create the divs and add event to them
for (i = 0; i < 256; i++) {
	let div = document.createElement('div'); 
	div.classList.add('gridItem');
	
	div.addEventListener('mouseover', function () {
		div.style = 'background: white';
	})

	container.appendChild(div);
}

