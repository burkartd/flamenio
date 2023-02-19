const socket = io();

var chatNum = -1; //číslo místnosti, získá se v cb fci
var chatName = '';
var id;

const { chatId} = Qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });