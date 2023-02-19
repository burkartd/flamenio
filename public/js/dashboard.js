



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