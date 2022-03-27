const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const myForm = document.querySelector('#myForm');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');


myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    if (nameInput.value === '' || emailInput.value === '') {
        alert('error, please feel the blank spaces');
    } else {
        const li = document.createElement('li')
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`))
        userList.appendChild(li)

        nameInput.value = '';
        emailInput.value = ''
    }

    ;
}