{

    const helper = () => {
        const hintBtn = document.getElementById('hint-icon');
        const helpBtn = document.getElementById('help-icon');
        const hintBubble = document.querySelector('.help-text-bubble');
        const helpBubble = document.querySelector('.help-text-bubble-2')

        hintBtn.addEventListener('click', () => {
            if (hintBubble.style.display != "none") {
                hintBubble.style.display = "flex"
                if (helpBubble.style.display = "flex") {
                    hintBubble.style.display = "none"
                }
            } else {
                hintBubble.style.display = "none"
            }
        })

        helpBtn.addEventListener('click', () => {
            if (helpBubble.style.display != "none") {
                helpBubble.style.display = "flex"
                if (hintBubble.style.display = "flex") {
                    helpBubble.style.display = "none"
                }
            } else {
                helpBubble.style.display = "none"
            }
        })

    }




    const init = () => {
        helper();
    }


    document.addEventListener('DOMContentLoaded', function () {
        init();

    });

}