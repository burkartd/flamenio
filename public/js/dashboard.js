



//při připojení
socket.on('connect', () =>
{
    socket.emit('hostConnect', chatId, data => {
        if(data == false)
        {
            console.log('chyba');
        }
        document.title = 'Galenio #' + chatId;
    });
    
});

ChatBtnSend.addEventListener('click', ()=>{
    
    const msg = ChatInput.value.trim();

    if(msg !== ""){
        socket.emit('messageFromHospital', msg);
        SendMessage(msg);
    }

    ChatInput.value = "";
    ChatInput.focus();

    
})




function SendMessage(message)
{

    const div = document.createElement('div');
    // div.classList.add('flex justify-start pt-6');
    div.classList.add('flex');
    div.classList.add('justify-start');
    div.classList.add('pt-6');

    div.innerHTML = `<div class="rounded-full mx-2 w-12 h-12 bg-whiteb flex items-center justify-center"><!--Ikona-->
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
    </svg>
</div>
<div class="w-64 scroll-auto bg-dark text-whiteb px-4 py-2 rounded-tr-xl rounded-b-xl"><!--Samotna zprava-->
    ${message}
   
</div>`;

    MainChat.appendChild(div);
    MainChat.scrollTop = MainChat.scrollHeight;
}

function ReciveMessage(message)
{

    const div = document.createElement('div');
    div.classList.add('flex justify-start pt-6');
    div.innerHTML = `<div class="w-64 scroll-auto bg-dark text-whiteb rounded-tl-xl rounded-b-xl px-4 py-2"><!--Samotna zprava-->
    ${message}
</div>
<div class="rounded-full mx-2 w-12 h-12 bg-whiteb stroke-rosen flex items-center justify-center"><!--Ikona-->
    <svg xmlns="http://www.w3.org/2000/svg" fill="rosen" viewBox="0 0 24 24" stroke-width="4" stroke="Current-color" class="w-12">
        <path stroke-linecap="none" stroke-linejoin="none" d="M12 4.5v15m7.5-7.5h-15" />
    </svg>                  
</div>`
    MainChat.appendChild(div);
    MainChat.scrollTop = MainChat.scrollHeight;
}