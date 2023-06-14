const board = document.querySelector('#board');
const SQUARES_NUMBER = 450;
const colors = ['#ff38af', '#761ed0', '#f65360', '#37a072']

for (let i = 0; i < SQUARES_NUMBER; i++) {
	const square = document.createElement('div');
	square.classList.add('square');

	square.addEventListener('mouseover', () => setColor(square));
	square.addEventListener('mouseleave', () => removeColor(square));


	board.append(square);
}

function setColor(elem) {
	const color = getColor();
	elem.style.backgroundColor = color;
	elem.style.boxShadow = `0 0 2px ${color}, 0 0 5px ${color}`
}

function removeColor(elem) {
	elem.style.backgroundColor = '#1d1d1d';
	elem.style.boxShadow = `0 0 2px #1d1d1d`
}

function getColor() {
	const index = Math.floor(Math.random() * colors.length);
	return colors[index];
}