// const { data } = require("jquery");

//při připojení
socket.on('connect', ()=> {
    socket.emit('userConnect', PatientData, (data)=> {

    })
});

socket.on('messageToPatient', (data) => {
    console.log(data);
    MessageToPatient(data);
})

//odeslání zprávy
ChatSend.addEventListener('click', ()=>{
    let msg = ChatInput.value.trim();
    if(msg.length > 0) SendMessage(msg);
    //MessageToPatient(msg);
    ChatInput.value = '';
    ChatInput.focus();
})

function MessageToPatient(data)
{
    // var message = '';
    // if(data.lang === jazyk) message = data.msg;
    // else {
    //   const foo = await translate(data.msg, {from: data.lang, to: LocalLanguage }); // přeloží se z jazyka učitele do jazyka žáka
    //   message = foo;
    // } 

    let message = data;

    const div = document.createElement('div');
    //div.classList.add('flex justify-start pt-6');
    div.innerHTML = `<div class="flex justify-start pt-6"><!--Example hospital-->
    <div class="rounded-full mx-2 w-12 h-12 bg-whiteb stroke-rosen flex items-center justify-center"><!--Ikona-->
        <svg xmlns="http://www.w3.org/2000/svg" fill="rosen" viewBox="0 0 24 24" stroke-width="4" stroke="Current-color" class="w-12">
            <path stroke-linecap="none" stroke-linejoin="none" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>                  
    </div>
    <div class="w-64 scroll-auto bg-whiteb text-dark px-4 py-2 rounded-tr-xl rounded-b-xl"><!--Samotna zprava-->
       ${message}
    </div>
</div>`
    MainChat.appendChild(div);
    MainChat.scrollTop = MainChat.scrollHeight;
}

function SendMessage(message)
{

    const div = document.createElement('div');
    // div.classList.add('flex justify-start pt-6');
    div.classList.add('flex');
    div.classList.add('justify-start');
    div.classList.add('pt-6');

    div.innerHTML = `<div class="flex justify-end pt-6"><!--Example patient-->
    <div class="w-64 scroll-auto bg-whiteb text-dark rounded-tl-xl rounded-b-xl px-4 py-2"><!--Samotna zprava-->
    ${message}
</div>
<div class="rounded-full mx-2 w-12 h-12 bg-whiteb flex items-center justify-center"><!--Ikona-->
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
    </svg>
</div>
</div>`;

    MainChat.appendChild(div);
    MainChat.scrollTop = MainChat.scrollHeight;
}





function Zviditelnit(cislo)
{
    indexList.forEach(item => item.classList.add('hidden'));
    indexList[cislo-1].classList.remove('hidden');
    if(cislo === 4) return; //chat
    ActiveScreen = cislo;
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
    socket.emit('checkRoom', input, (data)=>{
        if(data.roomExists === false)
        {
            idInput.value = '';
            idInput.focus();
        }
    })

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
    Zviditelnit(3)}
    );


    function VyplnIndex3()
    {
        fieldNameSurname.innerHTML = PatientData.Name + " " + PatientData.Surname;
        fieldBirthday.innerHTML = PatientData.Birthday;
        fieldCountry.innerHTML = PatientData.Country;
    }

    chatIcon.addEventListener('click', ()=>{
        
        console.log('afdaewf')
        Zviditelnit(4);
        ChatInput.focus();
    })

    closeButton.addEventListener('click', ()=>{
        Zviditelnit(ActiveScreen);
    })

    //chatIcon.click();



loginToDashboard.addEventListener('click', ()=>{window.location.href = '/prihlaseni_nemocnice.html?'});