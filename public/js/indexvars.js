const socket = io();
const index1continue = document.getElementById('index1continue');
const index2continue = document.getElementById('index2continue');
const index3send = document.getElementById('index2send');
const index1 = document.getElementById('index1');
const index2 = document.getElementById('index2');
const index3 = document.getElementById('index3');
const index4 = document.getElementById('index4');
const indexList = [index1, index2, index3, index4];
const loginToDashboard = document.getElementById('login_to_dashboard');
const idInput = document.getElementById('id_input');

//index2
const nameInput = document.getElementById('input_name');
const surnameInput = document.getElementById('input_surname');
const birthdayInput = document.getElementById('input_birthday');
const countryInput = document.getElementById('input_country');

//index3
const fieldNameSurname = document.getElementById('field_name_surname');
const fieldBirthday = document.getElementById('field_birthday');
const fieldCountry = document.getElementById('field_country');
const chatIcon = document.getElementById('chat_icon');

const closeButton = document.getElementById('close_button');



var PatientData = 
{language: null,
RoomID: null,
Name: null,
Surname: null,
Birthday: null, 
Country: null,
HasInsurance: null,
Message: null
}