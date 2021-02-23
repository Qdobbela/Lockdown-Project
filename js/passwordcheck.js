function checkPasswordIT() {

    if (document.getElementById('psw').value.toLowerCase() === "bonus") {
        document.getElementById('psw-fout').innerHTML = "psw juist";
        sessionStorage.setItem('pcIT', true);
        document.location.href = "/pages-network/pcIT.html"; // window.location.replace('url')
    } else {
        document.getElementById('psw-fout').innerText = "Dat is een fout wachtwoord!";
    }
}

function checkPasswordCEO1() {

    if (document.getElementById('psw').value.toLowerCase() === "temsed") {
        document.getElementById('psw-fout').innerHTML = "psw juist";
        sessionStorage.setItem('pcCEO', true);
        document.location.href = '/pages-network/pcCEO.html';
    } else {
        document.getElementById('psw-fout').innerText = "Dat is een fout wachtwoord!";
    }
}

function checkPasswordCEO3() {

    if (document.getElementById('psw').value.toLowerCase() === "10873") {
        document.getElementById('psw-fout').innerHTML = "psw juist";
        sessionStorage.setItem('pcCEO', 2);
        history.back();
    } else {
        document.getElementById('psw-fout').innerText = "Dat is een fout wachtwoord!";
    }
}

function checkPasswordQR() {

    if (document.getElementById('psw').value.toLowerCase() === "code22") {
        document.getElementById('psw-fout').innerHTML = "psw juist";
        sessionStorage.setItem('pcFinance', true);
        document.location.href = '/pages-network/pcFinance.html';
    } else {
        document.getElementById('psw-fout').innerText = "Dat is een fout wachtwoord!";
    }
}