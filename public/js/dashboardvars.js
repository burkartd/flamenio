const socket = io();

var chatNum = -1; //číslo místnosti, získá se v cb fci
var chatName = '';
var id;
const MainChat = document.getElementById('main_chat');

const ChatInput = document.getElementById('chat_input');
const ChatBtnSend = document.getElementById('chat_btn_send');

const { chatId} = Qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });