//kód serveru, backend
const path = require('path');
const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const { disconnect } = require('process');
const fs = require('fs');
const { data } = require('jquery');

// let rawdata = fs.readFileSync('student.json');
//let InfoRoomObject = JSON.parse(fs.readFileSync('infoPage.json'));

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`Servr frci na portu ${PORT}`));

var roomsCount = 0;

let rooms = [];




//app.use('/scripts', express.static(path.join(__dirname, '/node_modules/chart.js/dist/'))); //abysme měli přístup k frontendu

//nastavení static folder
app.use(express.static(path.join(__dirname, 'public'))); //abysme měli přístup k frontendu

process.on('uncaughtException', err => {
    console.error(err && err.stack)
});

io.on('connection', socket => {
    console.log('nové připjení');

    socket.on('checkRoom', (num, cb) => {
        const roomtest = 'room' + num;        
        const roomExists = io.sockets.adapter.rooms.has(roomtest);
        // var jmenook = true;
        // if(roomExists)
        // {
        //     const roomi = rooms.findIndex(tmp => tmp.roomName === roomtest);
        //     console.log(rooms[roomi]);
        //     const zaki = rooms[roomi].userList.findIndex(zak => zak.userName === jmeno);
        //     if(zaki !== -1) jmenook = false;
        // }
        cb(
            {
                roomExists: roomExists
            }
        );
    });


    socket.on('hostConnect', (chatId, cb) => {
        
        socket.join(chatId);
        const user = { //novy
            username: 'host',
            role: 'host',
            id: socket.id,
            roomNumber: chatId
        };

        const roomObj = { //nová roomka
            host: user,
            userList: [],
            roomNumber: chatId,
            usersCount: 0
        };

        rooms.push(roomObj);
        roomsCount++;

        cb(true);

    });

    socket.on('userConnect', (roomId, cb) => {

        let canJoin = io.sockets.adapter.rooms.has(roomId);

        if(canJoin === false)
        {
            cb(false);
            return;
        }

        socket.join(roomka);
        const user = {
            userName: 'patient',
            role: 'patient',
            id: socket.id,
            roomnNumber: roomId
        };
        const index = rooms.findIndex(room => room.roomNumber === roomId);
        if(index !== -1)
        {
            rooms[index].userList.push(user);
            rooms[index].usersCount++;
            console.log(rooms[index]);
        }

    });

    socket.on('messageFromHospital', (data) => {
        console.log(data);
        
        const tmp = io.sockets.sockets.get(data.zakid);
        
        let zprava = {typ: data.typ, msg: data.msg, lang: data.lang, typ: data.typ};

        if(tmp) tmp.emit('zpravaZakovi', zprava);

        //io.sockets.sockets.get(data.zakid).emit('zpravaZakovi', data.msg);
        
    })
})