const user = {
	email: 'dirkers',
	password: 'woefke48',
};

const logIn = function (credentials) {
	// console.log(credentials, user);
	if (credentials.email.toLowerCase() == user.email && credentials.password.toLowerCase() == user.password) {
		localStorage.setItem('Auth1', true);
		localStorage.setItem('startTime', Date());
		// location.replace('pages-network/pcDirk.html');
		location.href = 'pages-network/pcDirk.html';
		console.log('login successful');
	} else {
		document.querySelector('.c-input-error-message').style.display = 'block';
	}
};

const login_init = function () {
	loginSubmit = document.querySelector('.js-login-button');
	document.getElementById('hint-icon').style.display = "block"

	loginSubmit.addEventListener('click', function () {
		credentials = {
			email: document.getElementById('username').value,
			password: document.getElementById('password').value,
		};
		logIn(credentials);
	});

	// window.open("/clock.html", '_blank');
};

login_init();