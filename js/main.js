const button = document.querySelector('button');
const input = document.querySelector('input');
const form = document.querySelector('.form');

function checkEmail() {
    const email = input.value;

    if(!/@(\w+)/.test(email)) {
        form.classList.add('error');
    } else {
        form.classList.remove('error');
    }
}

button.addEventListener('click', checkEmail);