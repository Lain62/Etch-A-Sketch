const divContainerBoard = document.querySelector('.containerBoard');
const btnSizeChange = document.querySelector('#sizeChange')

function boxesHoverOver (box){
	if (box.target.style.background !== 'black'){
		box.target.style.background = 'grey';
		}
	}

function boxesHoverLeave (box){
	if (box.target.style.background !== 'black'){
		box.target.style.background = 'white';
	}
}

function boxesClickToggle (box){
	if (box.target.style.background == 'black') {
		box.target.style.background = 'white';
	} else {
		box.target.style.background = 'black';
	}
}

function changeSize(size){
	const collumnBox = document.querySelectorAll('.collumnBox')
	if (collumnBox !== null) {
		while (divContainerBoard.firstElementChild){
			divContainerBoard.firstElementChild.remove()
		}
	}
	boxesCreate(size);
}

function boxesCreate(size){
	for (let x = 1; x <= size; x++){
		const collumnBox = document.createElement('div');
		collumnBox.classList.add('collumnBox');
		divContainerBoard.appendChild(collumnBox)
		for (let y = 1; y <= size; y++){
			const box = document.createElement('div');
			box.classList.add('box');
			collumnBox.appendChild(box);

			box.addEventListener('click', function (box) {
				boxesClickToggle(box);
			});
			box.addEventListener('mouseover', function (box) {
				boxesHoverOver(box);
			});
			box.addEventListener('mouseout', function (box) {
				boxesHoverLeave(box);
			});
		}
	}
}

btnSizeChange.addEventListener('click', () => {
	let size = prompt("Enter new size", "1-100")
	changeSize(size)
})
