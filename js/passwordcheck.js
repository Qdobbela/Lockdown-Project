

function checkPasswordIT(){

    if (document.getElementById('psw').value.toLowerCase() === "bonus") {
        document.getElementById('psw-fout').innerHTML = "psw juist";
        sessionStorage.setItem('pcIT', true);
		document.location.href = "/pages-network/pcIT.html";
    } else {
        document.getElementById('psw-fout').innerText = "Dat is een fout wachtwoord!";
    }
}

function checkPasswordCEO1(){

    if (document.getElementById('psw').value.toLowerCase() === "ceo1") {
        document.getElementById('psw-fout').innerHTML = "psw juist";
        sessionStorage.setItem('pcCEO', true);
		document.location.href = "/pages-network/pcIT.html";
    } else {
        document.getElementById('psw-fout').innerText = "Dat is een fout wachtwoord!";
    }
}

function checkPasswordCEO3(){

    if (document.getElementById('psw').value.toLowerCase() === "ceo3") {
        document.getElementById('psw-fout').innerHTML = "psw juist";
        sessionStorage.setItem('pcCEO', 2);
        history.back();
    } else {
        document.getElementById('psw-fout').innerText = "Dat is een fout wachtwoord!";
    }
}