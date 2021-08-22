const upload = () => {
    
    const fileInputs = document.querySelectorAll('[name="upload"]');
	const fileName = document.querySelectorAll('.file__name');


	for (let index = 0; index < fileInputs.length; index++) {
		let input = fileInputs[index];
		input.addEventListener('change', () => {
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