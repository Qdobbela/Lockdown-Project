{

    let clicks = 1;

    // Selectors
    const hintBtn = document.getElementById('hint-icon');
    const helpBtn = document.getElementById('help-icon');
    const hintBubble = document.querySelector('.help-text-bubble-2');
    const helpBubble = document.querySelector('.help-text-bubble')
    const hintText = document.querySelector('.hint-text')



    const helper = () => {
        hintBtn.addEventListener('click', (e) => {
            const id = e.target.className;
            console.log(id)
            if (hintBubble.style.display != 'flex') {
                clicks++
                console.log(clicks)
                hintBubble.style.display = 'flex';
                if (helpBubble) {
                    helpBubble.style.display = 'none'
                }
            } else {
                hintBubble.style.display = 'none';
            }

            switch (hintText) {
                case id === 1 && clicks === 1:
                    hintText.innerHTML = "1"
                    clicks++
                    hintText.setAttribute('id') = 2
                    console.log(clicks)
                    break;
                case id === 2 && clicks === 2:
                    hintText.innerHTML = "2"
                    clicks++
                    console.log(clicks)
                    break;
                default:
                    // code block
            }


        })

        helpBtn.addEventListener('click', () => {
            if (helpBubble.style.display != 'flex') {
                helpBubble.style.display = 'flex';
                if (hintBubble) {
                    hintBubble.style.display = 'none'
                }

            } else {
                helpBubble.style.display = 'none';
            }
        })

    }

    const helpPopup = () => {
        setTimeout(() => {
            if (helpBubble) {
                helpBubble.style.display = 'flex'
            }

        }, 1000);

        // Close text 
        setTimeout(() => {
            if (helpBubble) {
                helpBubble.style.display = 'none'
            }

        }, 20000);
    }

    const init = () => {
        helper();
        helpPopup();
    }

    init();

}