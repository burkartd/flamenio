
function Zviditelnit(cislo)
{
    indexList.forEach(item => item.classList.add('hidden'));
    indexList[cislo-1].classList.remove('hidden');
}

function isNumeric(value) {
    return /^\d+$/.test(value);
}

//Zviditelnit(1);

index1continue.addEventListener('click', ()=> {

    let input = idInput.value.trim();
    console.log(input);
    if (input.length < 1 || isNumeric(input) == false) {
        //špatný input jména
        console.log('nnnnnn')
        idInput.value = '';
        idInput.focus();
        return;
    }
     if(document.getElementById('lang_select').value === "0") return;
    Zviditelnit(2);
});
index2continue.addEventListener('click', ()=> {Zviditelnit(3)});
loginToDashboard.addEventListener('click', ()=>{window.location.href = '/prihlaseni_nemocnice.html?'});