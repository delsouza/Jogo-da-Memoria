const input = document.querySelector('.login_input');
const button = document.querySelector('.login_button');
const form = document.querySelector('.login_form');

//Checkar se o nome digitado é maior que 0

function validarinput({target}) {
    if(target.value.length > 0) {
        button.removeAttribute('disabled');
    } else {
        button.setAttribute('disabled', '');
    }
}

//Previnir o comportamento de atualizar a pagina de envio de formulario e salvar o que digitou no navegador (Local storage)

function handleSubmit(event) {
    event.preventDefault();
    localStorage.setItem('jogador', input.value);
    window.location = 'paginas/jogo.html';
}

input.addEventListener('input', validarinput);
form.addEventListener('submit', handleSubmit);
