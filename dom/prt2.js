var email = document.getElementById('email');
var password = document.getElementById('password');
var errorEmail = document.getElementById('errorEmail');
var errorPassword = document.getElementById('errorPassword');
var btnEnviar = document.getElementById('btnEnviar');

var regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validar() {
    var emailValido = regexEmail.test(email.value);
    var passValido = password.value.length >= 8 && password.value.length <= 10;
    
    btnEnviar.disabled = !(emailValido && passValido);
    btnEnviar.style.backgroundColor = btnEnviar.disabled ? 'gray' : '';
}

email.onblur = function() {
    if (!regexEmail.test(email.value)) {
        errorEmail.textContent = "Formato esperado: xxxx@yyyy.zzZZ";
        errorEmail.style.display = 'block';
    }
    validar();
};

email.onfocus = function() {
    errorEmail.style.display = 'none';
};

password.onblur = function() {
    if (password.value.length < 8 || password.value.length > 10) {
        errorPassword.textContent = "Debe tener entre 8 y 10 caracteres.";
        errorPassword.style.display = 'block';
    }
    validar();
};

password.onfocus = function() {
    errorPassword.style.display = 'none';
};