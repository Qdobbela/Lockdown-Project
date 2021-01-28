const user = {
	email: 'sandra.vd@fintra.be',
	password: 'Lockdown123',
};

const logIn = function (credentials) {
	console.log(credentials, user);
	if (credentials.email == user.email && credentials.password == user.password) {
		sessionStorage.setItem('Auth1', true);
		location.replace('index.html');
		console.log('login successful');
	} else {
		document.querySelector('.c-input-error-message').style.display = 'block';
		console.log('bruh tf');
	}
};

const login_init = function () {
	loginSubmit = document.querySelector('.js-login-button');

	loginSubmit.addEventListener('click', function () {
		credentials = {
			email: document.getElementById('username').value,
			password: document.getElementById('password').value,
		};
		logIn(credentials);
	});
};

document.addEventListener('DOMContentLoaded', function () {
	login_init();
});
