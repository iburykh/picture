const checkTextInputs = () => {
    const textInputs = document.querySelectorAll('.check');    
    textInputs.forEach(input => {
        // если значение клавиши(e.key) не соответствует(match) кириллице, поле не заполняется
        input.addEventListener('keypress', function(e) {
            if (e.key.match(/[^а-яё 0-9]/ig)) {
                e.preventDefault();
            }
        });
        // если при автозаполнении выбрано слово не кириллицей, строка очистится
        input.addEventListener('keyup', function() {
            this.value=this.value.replace(/[^\а-яё 0-9]/ig,"");
        });
    });
};
export default checkTextInputs;