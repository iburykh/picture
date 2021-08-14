const upload = () => {
    
    const fileInputs = document.querySelectorAll('[name="upload"]');
	const fileBtn = document.querySelectorAll('.file__button');
	const fileName = document.querySelectorAll('.file__name');

    ['dragenter', 'dragleave', 'dragover', 'drop'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, preventDefaults, false);
        });
    });

    function preventDefaults(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    ['dragenter', 'dragover'].forEach(eventName => {
		for (let index = 0; index < fileInputs.length; index++) {
			let input = fileInputs[index];
			input.addEventListener(eventName, () => {
				fileBtn[index].classList.add('active');
			}, false);
		}
    });

    ['dragleave', 'drop'].forEach(eventName => {
		for (let index = 0; index < fileInputs.length; index++) {
			let input = fileInputs[index];
			input.addEventListener(eventName, () => {
				fileBtn[index].classList.remove('active');
			}, false);
		}
    });

	for (let index = 0; index < fileInputs.length; index++) {
		let input = fileInputs[index];
		input.addEventListener('drop', (e) => {
			input.files = e.dataTransfer.files;
			addFileName();
        });
		input.addEventListener('input', () => {
			addFileName();
        });

		function addFileName() {
			if (!['image/jpeg', 'image/png', 'image/gif'].includes(input.files[0].type)) {
				fileName[index].textContent = 'Разрешены только изображения';
			} else if (input.files[0].size > 2 * 1024 * 1024) {
				fileName[index].textContent = 'Файл должен быть менее 2 МБ';
			} else {
				let dots;
				const arr = input.files[0].name.split('.');
	
				arr[0].length > 6 ? dots = "..." : dots = '.';
				const name = arr[0].substring(0, 6) + dots + arr[1];
				fileName[index].textContent = name;
			}
		}
	}
};

export default upload;