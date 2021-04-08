{
    let i = 0;
    let a = 0;
    let text;
    let speed = 75; /* The speed/duration of the effect in milliseconds */
    let countUp = 0
    let time;
    let timeText;

    const setTerminal = () => {
        setTimeout(() => {
            const terminal = document.querySelector(".terminal");
            terminal.style.display = "block";
            text = "Dank voor de hulp. Zelf had ik nooit zo ver geraakt. Maar ik moet je iets bekennen, dit was geen opdracht vanuit Fintrabank.  Het spijt me om te melden, maar je hebt net een misdaad begaan. En jouw virtuele vingerafdrukken staan overal... Veel succes om dit uit te leggen aan de authoriteiten. Adios! "
            typeWriter();
            move()
        }, 1000);
        // const interval = setInterval(setGreen, 3500)

        setTimeout(() => {
            clearInterval(interval)
        }, 30000);
    }

    // const setGreen = () => {
    //     const greenText = document.querySelector(".green-wrapper");
    //     countUp++;

    //     const p = document.createElement("div")
    //     p.innerHTML = '<p class="green">[user@fintrabank] % sending IP adress 192.168.1.2 to FBI</p>'
    //     p.style.display = "block";
    //     greenText.appendChild(p)
    // }

    const typeWriter = () => {
        if (i < text.length) {
            document.querySelector(".terminal-title").innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }

    const typeWriterSubtitle = () => {
        if (a < timeText.length) {
            document.querySelector(".terminal-subtitle").innerHTML += timeText.charAt(a);
            a++;
            setTimeout(typeWriterSubtitle, speed);
        }
    }

    setTimeout(() => {
        typeWriterSubtitle();
    }, 29000);

    const getTime = () => {
        time = localStorage.getItem('endTime');
        timeText = `Je hebt dit volbracht in ${time}`
        console.log(timeText)
    }

    let j = 0;

    const move = () => {
        if (j == 0) {
            ij = 1;
            let elem = document.getElementById("myBar");
            let width = 10;
            let id = setInterval(frame, 255);

            function frame() {
                if (width >= 100) {
                    clearInterval(id);
                    j = 0;
                } else {
                    width++;
                    elem.style.width = width + "%";
                    elem.innerHTML = width + "%";
                }
            }
        }
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