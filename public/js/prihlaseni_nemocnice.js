//const { data } = require("jquery");

const socket = io();

const loginForm = document.getElementById("login_form");
const idInput = document.getElementById("id_input");
const passwordInput = document.getElementById("password_input");
const btnSubmit = document.getElementById("btn_submit");

console.log(isNumeric(5))
btnSubmit.addEventListener('click', () => {

    console.log('wdwd')
    let inputIDnum = idInput.value.trim();
    // var regExp = /[0-9]/;
    if (inputIDnum.length < 1 || isNumeric(inputIDnum) === false) {
        //špatný input jména
        console.log('nnnnnn')
        idInput.value = '';
        idInput.focus();
        // upJmeno2.classList.remove('hidden');
        // setTimeout(() => {
        //     upJmeno2.classList.add('hidden');
        // }, 2500);
        return;
    }

    socket.emit('checkRoom', inputIDnum, (data) =>{
        if(data.roomExists == true) //číslo je v seznamu -> roomka není volná
        {
            idInput.value = '';
            return;
        }
    })


    const params = new URLSearchParams({
        chatId: inputIDnum,
    });
    console.log('kokot')
    window.location.href = '/dashboard.html?' + params.toString();
    //window.location.href = '/dashboard.html';
})

function isNumeric(value) {
    return /^\d+$/.test(value);
}