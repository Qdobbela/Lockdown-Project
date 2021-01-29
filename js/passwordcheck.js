

function checkPasswordIT(){

    if (document.getElementById('psw').value.toLowerCase() === "bonus") {
        document.getElementById('psw-fout').innerHTML = "psw juist";
    } else {
        document.getElementById('psw-fout').innerText = "Dat is een fout wachtwoord!";
    }
}

function checkPasswordCEO(){

    if (document.getElementById('psw').value.toLowerCase() === "bonus") {
        document.getElementById('psw-fout').innerHTML = "psw juist";
    } else {
        document.getElementById('psw-fout').innerText = "Dat is een fout wachtwoord!";
    }
}
