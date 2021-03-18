{

    let i = 0;
    let text;
    let speed = 100; /* The speed/duration of the effect in milliseconds */

    const greenText = document.querySelector(".green-wrapper");
    const green = ` <p class="green">[user@localhost] # sending IP adress 192.168.1.2 to FBI</p>`

    const setTerminal = () => {
        setTimeout(() => {
            const terminal = document.querySelector(".terminal");
            terminal.style.display = "block";
            text = "You hacked the CEO succesfully..."
            typeWriter();
        }, 1000);
    }


    const typeWriter = () => {
        if (i < text.length) {
            document.querySelector(".terminal-title").innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }
    const init = () => {
        setTimeout(() => {
            const desktop = document.querySelector(".c-desktop");
            desktop.style.filter = "blur(8px)";
            setTerminal();
        }, 3000);

    }
    init();

}