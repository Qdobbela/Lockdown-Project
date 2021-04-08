function checkPasswordIT() {

    if (document.getElementById('psw').value.toLowerCase() === "bonus") {
        document.getElementById('psw-fout').innerHTML = "psw juist";
        const lottie = document.querySelector(".lottie-container")
        lottie.style.display = "flex"
        setTimeout(() => {
            localStorage.setItem('pcIT', true);
            document.location.href = "/pages-network/pcIT.html";
        }, 2600);
    } else {
        document.getElementById('psw-fout').innerText = "Dat is een fout wachtwoord!";
    }
}

function checkPasswordCEO1() {

    if (document.getElementById('psw').value.toLowerCase() === "temsed") {
        document.getElementById('psw-fout').innerHTML = "psw juist";

        const lottie = document.querySelector(".lottie-container")
        lottie.style.display = "flex"
        setTimeout(() => {
            localStorage.setItem('pcCEO', true);
            localStorage.setItem('ceoSlot3', true);
            document.location.href = '/pages-network/pcCEO.html';
        }, 2600);
    } else {
        document.getElementById('psw-fout').innerText = "Dat is een fout wachtwoord!";
    }
}

function checkPasswordCEO3() {

    if (document.getElementById('psw').value.toLowerCase() === "10873") {
        document.getElementById('psw-fout').innerHTML = "psw juist";
        const lottie = document.querySelector(".lottie-container")
        lottie.style.display = "flex"
        setTimeout(() => {
            localStorage.setItem('pcCEO', 2);
            localStorage.setItem('ceoSlot1', true);
            history.back();
        }, 2600);
    } else {
        document.getElementById('psw-fout').innerText = "Dat is een fout wachtwoord!";
    }
}

function checkPasswordQR() {

    if (document.getElementById('psw').value.toLowerCase() === "code22") {
        // document.getElementById('psw-fout').innerHTML = "psw juist";
        const lottie = document.querySelector(".lottie-container")
        lottie.style.display = "flex"
        setTimeout(() => {
            localStorage.setItem('pcFinance', true);
            document.location.href = '/pages-network/pcFinance.html';
        }, 2600);
    } else {
        document.getElementById('psw-fout').innerText = "Dat is een fout wachtwoord!";
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const passwordInput = document.querySelector(".password-input");

    // const button = document.querySelector(".submit");
    // button.addEventListener('click', () => {
    //     console.log("test")
    //     checkPasswordQR()
    // })

    let inputArr = []

    passwordInput.addEventListener('input', (e) => {
        const inputValue = e.target.value
        // updateArr(inputValue);
    })

    // const updateArr = (inputValue) => {
    //     const inputvalue = inputValue
    //     switch ( inputvalue) {
    //         case inputvalue.length === 0:
    //             passwordInput.value = `*****`
    //             break;
    //         case `${inputvalue}****`:
    //             passwordInput.value = `${inputvalue}****`
    //             break;
    //         default:
    //             // code block
    //     }
    // }

});