{

    // Selectors
    const hintBtn = document.getElementById('hint-icon');
    const helpBtn = document.getElementById('help-icon');
    const hintBubble = document.querySelector('.help-text-bubble-2');
    const helpBubble = document.querySelector('.help-text-bubble')


    const helper = () => {
        hintBtn.addEventListener('click', () => {
            if (hintBubble.style.display != 'flex') {
                hintBubble.style.display = 'flex';
                if (helpBubble) {
                    helpBubble.style.display = 'none'
                }

            } else {
                hintBubble.style.display = 'none';
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
        helpBubble.style.display = 'flex'

        // Close text 
        setTimeout(() => {
            helpBubble.style.display = 'none'
        }, 5000);
    }


    document.addEventListener('DOMContentLoaded', function () {
        helper();
        helpPopup();
    });

}