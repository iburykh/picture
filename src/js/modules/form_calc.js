const formCalc = () => {
	const form = document.querySelector('.form-calc');
	const inputs = form.querySelectorAll('input');
	const formText = form.querySelector('.form-calc__price');
	const promocodeBlock = form.querySelector('.form-calc__promocode');
	const fileName = form.querySelector('.file__name');

	const select = document.querySelectorAll('.select');
	const selectHeader = document.querySelectorAll('.select__header');
    const selectItem = document.querySelectorAll('.select__option');
	const selectBody = document.querySelectorAll('.select__body');

	const sizeBlock = document.querySelector('[name="size"]');
	const materialBlock = document.querySelector('[name="material"]');
	const optionsBlock = document.querySelector('[name="options"]');
	
	//============== Select ===================================
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
			calcFunc();
		});
    });

	document.addEventListener('mouseup', (e) =>{
		select.forEach(item => {
			if (!item.contains(e.target)) {
				item.classList.remove('active');
			}
		});
	});
	//============== Расчет суммы =============================
	let sum = 0;

    const calcFunc = () => {
		formText.classList.remove('error');
        sum = Math.round((+sizeBlock.value) * (+materialBlock.value) + (+optionsBlock.value));
        if (sizeBlock.value == '' || materialBlock.value == '') {
            formText.textContent = "Пожалуйста, выберите размер и материал картины!";
        } else if (promocodeBlock.value === 'IWANTPOPART') {
			formText.textContent = `${Math.round(sum * 0.7)} руб.`;
        } else {
			formText.textContent = `${sum} руб.`;;
        }
    };
    promocodeBlock.addEventListener('input', calcFunc);

	//==============Сообщения о ходе отправки==================
	const message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся!',
        failure: 'Что-то пошло не так...'
    };
	//=========================================================
	//==============Настройка отправки формы===================
	const postData = async (url, data) => {
		let res = await fetch(url, {
			method: "POST",
			body: data
		});	
		return await res.text(); //возвращается результат в виде текста(для проверки) или res.json();
	};
	//=========================================================
	const clearInputs = () => {
        inputs.forEach(item => {
            item.value = '';
        });
		fileName.textContent = "Файл не выбран";
		selectHeader.forEach(item => {
			let value = item.getAttribute('data-value');
			item.textContent = value;
		});
    };

	form.addEventListener('submit', (e) => {
		let val = formText.textContent;
		let obj = {
			price: val
		};
		e.preventDefault();
		let error = formValidate();
		if (error === 0) {
			formText.textContent = message.loading;
			//=========FormData=====================================
			const formData = new FormData(form);
			for (let key in obj) {
				formData.append(key, obj[key]);
			}
			//======================================================
			postData('../server.php', formData)
			.then(res => {
				formText.textContent = message.success;
				formText.classList.add('success');
			})
			.catch(() => {
				formText.textContent = message.failure;
				formText.classList.add('error');
			})
			.finally(() => {
				clearInputs();
				setTimeout(() => {
					formText.textContent = 'Для расчета нужно выбрать размер и материал картины';
					formText.classList.remove('success');
					formText.classList.remove('error');
				}, 5000);
			});
		}
	});

	function formValidate() {
		let error = 0;
		if (sizeBlock.value == '' || materialBlock.value == '') {
			formAddError();
			error++;
		}
		return error;
	}

	function formAddError() {
		formText.classList.add('error');
		formText.textContent = 'Пожалуйста, выберите размер и материал картины!';
	}
}
export default formCalc;