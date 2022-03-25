let login = document.querySelector('.login'),
	password = document.querySelector('.pass'),
	btn = document.querySelector('.btn'),
	msg = document.querySelector('#msg');

let getLogin, 
	getPass,
	timerId;

login.addEventListener('keydown', (e) => {
	if(e.key.match(/[0-9,!,@,#,$,%,^,&,*,_,-,+,=,),(,/]/)) {
		return e.preventDefault(); 
	}
});

btn.addEventListener("click", (event) => {
	event.preventDefault();

	getLogin = login.value;   

	getPass = password.value;

	if(getLogin.length === 0 || getPass.length === 0) {
		alert("Заполните поля!");
	} else if(getPass.length < 8) {
		msg.textContent = "Введите не меньше 8 символов!";
		timerId = setTimeout(timeText, 3000);
	} else {
		alert( "Login: "  + getLogin +  "\n" +  "Password: "  +  getPass);
	}	
});

function timeText() {
	msg.textContent = "";
}