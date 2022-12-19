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

app.use('/scripts', express.static(path.join(__dirname, '/node_modules/chart.js/dist/'))); //abysme měli přístup k frontendu

//nastavení static folder
app.use(express.static(path.join(__dirname, 'public'))); //abysme měli přístup k frontendu

process.on('uncaughtException', err => {
    console.error(err && err.stack)
  });