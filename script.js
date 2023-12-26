const divContainerBoard = document.querySelector('.containerBoard');

function boxesCreate(){
	for (let x = 1; x <= 16; x++){
		const collumnBox = document.createElement('div');
		collumnBox.classList.add('collumnBox');
		divContainerBoard.appendChild(collumnBox)
		for (let y = 1; y <= 16; y++){
			const box = document.createElement('div');
			box.classList.add('box');
			collumnBox.appendChild(box);
			box.addEventListener('click', function (e) {
				e.target.style.background = 'black';
			});
		}
	}
}

boxesCreate();
