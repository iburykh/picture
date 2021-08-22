const checkTextInputs = () => {
    const textInputs = document.querySelectorAll('.check');    
    textInputs.forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (e.key.match(/[^а-яё 0-9]/ig)) {
                e.preventDefault();
            }
        });
        input.addEventListener('keyup', function() {
            this.value=this.value.replace(/[^\а-яё 0-9]/ig,"");
        });
    });
};
export default checkTextInputs;