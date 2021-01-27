var Persoon = {
    naam:'Sandra',
    wachtwoord:'Lockdown123'
}

function logIn() {
    let vulInNaam = document.getElementById('Name').value;
    let vulInWachtwoord = document.getElementById('password').value;

    if(vulInNaam == Persoon.naam & vulInWachtwoord == Persoon.wachtwoord){
        window.location.href="index.html";
    } else {
        document.getElementById('demo').innerHTML = "Wachtwoord of gebruikersnaam onjuist";
    }
}