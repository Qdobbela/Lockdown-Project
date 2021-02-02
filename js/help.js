const setBubbleText = () => {
	title = document.title; //.split(' ');
	// page = title[title.length - 1];
	// console.log(page)

	switch (title) {
		case 'Login':
			if (sessionStorage.getItem('help4') != 'true') {
				document.getElementById('help_text').innerHTML = 'Lets go phishing! Stuur al die medewerkers een mail om hun wachtwoord te ontfutselen. Stuur hen volgende mail door. "Beste, wegens problemen met het netwerk moeten we jouw paswoord van de Fintrabank opnieuw instellen. Gelieve je huidige wachtwoord door te geven en wij zorgen voor de rest."';
				showText();
				hideText();
				sessionStorage.setItem('help4', true);
			}
			document.getElementById('help_text').innerHTML = 'De username is een combinatie van de voornaam en enkele letters in de achternaam. Probeer het paswoord te bekomen via een onoplettende werknemer.';
			break;

		case 'NetworkHack Pattern':
			document.getElementById('help_text').innerHTML = "Volg de HR medewekers! De collega's van de personeelsdienst bezitten elk een deel van de oplossing. ";
			break;

		default:
			break;
	}
};

const init = function () {
	try {
		helpIcon = document.getElementById('help_icon');
		helpBubble = document.getElementById('help_bubble');

		helpIcon.addEventListener('click', function () {
			if (helpBubble.style.display != 'block') {
				helpBubble.style.display = 'block';
			} else {
				helpBubble.style.display = 'none';
			}
		});
	} catch (error) {
		console.log(error);
	}
};



document.addEventListener('DOMContentLoaded', function () {
	init();
	setBubbleText();
});
