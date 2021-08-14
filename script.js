const BTN = document.querySelectorAll('input');
const RESULT = document.getElementById('calc-result');

BTN.forEach(btn =>  btn.addEventListener('click', clickHandler));

function clickHandler() {
    switch (this.name) {
        case 'C': RESULT.innerHTML = ''; break;
        case '=': RESULT.innerHTML = eval(RESULT.innerHTML); break;
        case 'backspace': RESULT.innerHTML = RESULT.innerHTML.slice(0, RESULT.innerHTML.length - 1); break;
        default: RESULT.innerHTML += this.value;
    }
}