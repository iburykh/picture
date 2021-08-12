const select = () => {
	let select = document.querySelectorAll('.select');
	let selectHeader = document.querySelectorAll('.select__header');
    let selectItem = document.querySelectorAll('.select__option');
	let selectBody = document.querySelectorAll('.select__body');

	for (let index = 0; index < selectHeader.length; index++) {
		let item = selectHeader[index];
		item.addEventListener('click', function() {
			select[index].classList.toggle('active');
			setTimeout(() => {
				selectBody[index].focus();
			}, 300);
		});
	}

	selectItem.forEach(item => {
        item.addEventListener('click', (e) => {
			let target = e.target;
			let value = target.getAttribute('data-value');
			let text = target.textContent;
			let selectActive = target.closest('.select');
			let header = selectActive.querySelector('.select__header');
			let input = selectActive.querySelector('.select__input');

			selectItem.forEach(item => {
				item.parentNode.classList.remove('active');
			});
			item.parentNode.classList.add('active');
			selectActive.classList.remove('active');
			header.textContent = text;
			input.value = value;
		});
    });

	document.addEventListener('mouseup', (e) =>{
		select.forEach(item => {
			if (!item.contains(e.target)) {
				item.classList.remove('active');
			}
		});
	});
};
export default select;