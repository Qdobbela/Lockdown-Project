{
    let i = 0;
    let text;
    let speed = 75; /* The speed/duration of the effect in milliseconds */
    let countUp = 0

    const setTerminal = () => {
        setTimeout(() => {
            const terminal = document.querySelector(".terminal");
            terminal.style.display = "block";
            text = "Dank voor de hulp. Zelf had ik nooit zo ver geraakt. Maar ik moet je iets bekennen, dit was geen opdracht vanuit Fintrabank.  Het spijt me om te melden, maar je hebt net een misdaad begaan. En jouw virtuele vingerafdrukken staan overal... Veel succes om dit uit te leggen aan de authoriteiten. Adios! "
            typeWriter();
        }, 1000);
        const interval = setInterval(setGreen, 3500)

        setTimeout(() => {
            clearInterval(interval)
        }, 30000);
    }

    const setGreen = () => {
        const greenText = document.querySelector(".green-wrapper");
        countUp++;

        const p = document.createElement("div")
        p.innerHTML = '<p class="green">[user@fintrabank] % sending IP adress 192.168.1.2 to FBI</p>'
        p.style.display = "block";
        greenText.appendChild(p)
    }

    const typeWriter = () => {
        if (i < text.length) {
            document.querySelector(".terminal-title").innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }

    const getTime = () => {
        const time = sessionStorage.getItem('endTime');
        console.log(time)
    }

    const init = () => {
        getTime()
        setTimeout(() => {
            const desktop = document.querySelector(".c-desktop");
            desktop.style.filter = "blur(8px)";
            setTerminal();
        }, 2500);

    }
    init();
}