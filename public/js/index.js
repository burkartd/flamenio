
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

    //zkontrolovat jestli roomka existuje

     if(document.getElementById('lang_select').value === "0") return;

     PatientData.language = document.getElementById('lang_select').value;
     PatientData.RoomID = input;
    Zviditelnit(2);
});
index2continue.addEventListener('click', ()=> {
    
    //jméno
    console.log("dvojka")
    let input = nameInput.value.trim();
    console.log(input);
    if(input.length < 1)
    {
        nameInput.value = "";
        nameInput.focus();
        return;
    }
    PatientData.Name = input;
    //příjmení
    input = surnameInput.value.trim();
    console.log(input);

    if(input.length < 1)
    {
        surnameInput.value = "";
        surnameInput.focus();
        return;
    }
    PatientData.Surname = input;
    //datum
    input = birthdayInput.value.trim();
    console.log(input);

    if(input.length < 1)
    {
        birthdayInput.value = "";
        birthdayInput.focus();
        return;
    }
    PatientData.Birthday = input;

    input = countryInput.value;
    console.log(input);

    if(input === "0")
    {
        countryInput.focus();
        return;
    }
    PatientData.Country = input;

    PatientData.HasInsurance = document.getElementById('default-radio-2').checked;
    
    console.log(PatientData.HasInsurance);

    VyplnIndex3()
    Zviditelnit(3)});


    function VyplnIndex3()
    {
        fieldNameSurname.innerHTML = PatientData.Name + " " + PatientData.Surname;
        fieldBirthday.innerHTML = PatientData.Birthday;
        fieldCountry.innerHTML = PatientData.Country;
    }

    chatIcon.addEventListener('click', ()=>{
        
        console.log('afdaewf')
        Zviditelnit(4);
    })

    closeButton.addEventListener('click', ()=>{
        Zviditelnit(3);
    })

    chatIcon.click();



loginToDashboard.addEventListener('click', ()=>{window.location.href = '/prihlaseni_nemocnice.html?'});