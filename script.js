const divContainerBoard = document.querySelector('.containerBoard');

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

function boxesCreate(width,height){
	for (let x = 1; x <= width; x++){
		const collumnBox = document.createElement('div');
		collumnBox.classList.add('collumnBox');
		divContainerBoard.appendChild(collumnBox)
		for (let y = 1; y <= height; y++){
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

boxesCreate(50, 50);
