
//een object persoon met naam en wachtwoord om te kunnen inloggen.
var Persoon = {
    naam:'Sandra',
    wachtwoord:'Lockdown123'
}


// functie die nakijkt of naam en wachtwoord juist zijn.
function logIn() {
    let vulInNaam = document.getElementById('Name').value;
    let vulInWachtwoord = document.getElementById('password').value;

    if(vulInNaam == Persoon.naam & vulInWachtwoord == Persoon.wachtwoord){
        window.location.href="index.html";
    } else {
        document.getElementById('demo').innerHTML = "Wachtwoord of gebruikersnaam onjuist";
    }
}