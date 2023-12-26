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

function boxesCreate(){
	for (let x = 1; x <= 16; x++){
		const collumnBox = document.createElement('div');
		collumnBox.classList.add('collumnBox');
		divContainerBoard.appendChild(collumnBox)
		for (let y = 1; y <= 16; y++){
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

boxesCreate();
