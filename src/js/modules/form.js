const form = () => {
	const forms = document.querySelectorAll('.form');

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
		return await res.text();
	};
	//=========================================================
	const clearInputs = (inputs, file) => {
        inputs.forEach(item => {
            item.value = '';
        });

		if (file) {
			file.textContent = "Файл не выбран";
		}
    };

	if (forms.length > 0) {
		forms.forEach(item => {
			item.addEventListener('submit', (e) => {
				e.preventDefault();
				let target = e.target;
				let inputs = target.querySelectorAll('input');
				let fileName = target.querySelector('.file__name');
				let formReq = item.querySelectorAll('.req');
				formRemoveError(formReq);
				let error = formValidate(formReq);
				if (error === 0) {
					let textMessage = item.parentElement.querySelector('.form-message');
					if (textMessage) {
						textMessage.textContent = message.loading;
						textMessage.classList.add('sendmess');
					}
					//=========FormData=====================================
					const formData = new FormData(item);

					//! Убрать
					for(var pair of formData.entries()) {
						console.log(pair[0]+ ', '+ pair[1]);
					}
					//======================================================
					postData('../server.php', formData)
					.then(res => {
						if (textMessage) {
							textMessage.textContent = message.success;
							textMessage.classList.add('sendmess');
						}
					})
					.catch(() => {
						if (textMessage) {
							textMessage.textContent = message.failure;
							textMessage.classList.add('sendmess');
						}
					})
					.finally(() => {
						clearInputs(inputs, fileName);
						setTimeout(() => {
							textMessage.classList.remove('sendmess');
							textMessage.classList.remove('error');
						}, 5000);
					});
				}
			});
		});
	}

	// Валидация формы
		
	function formValidate(selector) {
		let error = 0;
		if (selector.length > 0) {
			for (let index = 0; index < selector.length; index++) {
				const input = selector[index];
				let placeholder = input.getAttribute('placeholder');
				if (input.classList.contains('email')) {
					if (emailTest(input) || input.value == placeholder) {
						formAddError(input);
						error++;
					}
				} else if (input.getAttribute("type") === "checkbox" && input.checked === false) {
					formAddError(input);
					error++;
				} else {
					if (input.value == '' || input.value == placeholder) {
						formAddError(input);
						error++;
					}
				}
			}
		}
		return error;
	}

	function formAddError(item) {
		item.parentElement.classList.add('error');
		item.classList.add('error');

		let formError = item.parentElement.querySelector('.form-message');
		formError.classList.add('error');
		formError.textContent = 'Пожалуйста, заполните все поля!';

	}

	function formRemoveError(selector) {
		if (selector.length > 0) {
			for (let index = 0; index < selector.length; index++) {
				const input = selector[index];
				input.parentElement.classList.remove('error');
				input.classList.remove('error');

				let formError = input.parentElement.querySelector('.form-message');
				formError.classList.remove('error');
			}
		}
	}

	function emailTest(input) {
		return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
	}
}
export default form;


