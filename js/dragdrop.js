{
    const top = document.querySelector('.top');
    const clonedTop = top.cloneNode(true);
    const bottom = document.querySelector(".bottom");
    const clonedBottom = bottom.cloneNode(true);


    let dragClass;
    let dragId;
    let answer1 = false;
    let answer2 = false;
    let answer3 = false;
    let answers = []

    // Lines
    const line1 = document.querySelector(".line-1")
    const line2 = document.querySelector(".line-2")
    const line3 = document.querySelector(".line-3")
    const line4 = document.querySelector(".line-4")
    const line5 = document.querySelector(".line-5")
    const line6 = document.querySelector(".line-6")

    const initListeners = () => {
        const lines = document.querySelectorAll('.fill');
        const charts = document.querySelectorAll('.empty');
        // add listeners
        for (const line of lines) {
            line.addEventListener('dragstart', dragStart);
            line.addEventListener('dragend', dragEnd);
        }

        // Loop through empty boxes and add listeners
        for (const chart of charts) {
            chart.addEventListener('dragover', dragOver);
            chart.addEventListener('dragenter', dragEnter);
            chart.addEventListener('dragleave', dragLeave);
            chart.addEventListener('drop', dragDrop);
        }
    }


    // Drag Functions

    function dragStart() {
        // this.className += ' hold';
        dragClass = this.className.split(' ')[1];
        dragId = this.id;
    }

    function dragEnd() {
        // this.className = 'fill';
    }

    function dragOver(e) {
        e.preventDefault();
    }

    function dragEnter(e) {
        e.preventDefault();
        // this.className += ' hovered';
    }

    function dragLeave() {
        // this.className = 'empty';
    }

    function dragDrop() {
        const checkSibling = this.firstElementChild.nextElementSibling
        if (dragClass === "line-1") {
            if (!checkSibling) {
                this.append(line1)
                answers.push("line")
                this.classList.add("relative")
                this.firstElementChild.classList.add("absolute")
                this.firstElementChild.nextElementSibling.classList.add("absolute")
                if (this.id === dragId) {
                    answer1 = true
                }
            } else {
                this.firstElementChild.nextElementSibling.remove()
                this.append(line1)
            }
        }
        if (dragClass === "line-2") {
            if (!checkSibling) {
                this.append(line2)
                answers.push("line")
                this.classList.add("relative")
                this.firstElementChild.classList.add("absolute")
                this.firstElementChild.nextElementSibling.classList.add("absolute")

                if (this.id === dragId) {
                    answer2 = true
                }
            } else {
                this.firstElementChild.nextElementSibling.remove()
                this.append(line2)
            }
        }
        if (dragClass === "line-3") {
            if (!checkSibling) {
                this.append(line3)
                answers.push("line")
                this.classList.add("relative")
                this.firstElementChild.classList.add("absolute")
                this.firstElementChild.nextElementSibling.classList.add("absolute")

            } else {
                this.firstElementChild.nextElementSibling.remove()
                this.append(line3)
            }
        }
        if (dragClass === "line-4") {
            if (!checkSibling) {
                this.append(line4)
                answers.push("line")
                this.classList.add("relative")
                this.firstElementChild.classList.add("absolute")
                this.firstElementChild.nextElementSibling.classList.add("absolute")

            } else {
                this.firstElementChild.nextElementSibling.remove()
                this.append(line4)
            }
        }
        if (dragClass === "line-5") {
            if (!checkSibling) {
                this.append(line5)
                answers.push("line")
                this.classList.add("relative")
                this.firstElementChild.classList.add("absolute")
                this.firstElementChild.nextElementSibling.classList.add("absolute")

                if (this.id === dragId) {
                    answer3 = true;
                }
            } else {
                this.firstElementChild.nextElementSibling.remove()
                this.append(line5)
            }
        }
        if (dragClass === "line-6") {
            if (!checkSibling) {
                this.append(line6)
                answers.push("line")
                this.classList.add("relative")
                this.firstElementChild.classList.add("absolute")
                this.firstElementChild.nextElementSibling.classList.add("absolute")

            } else {
                this.firstElementChild.nextElementSibling.remove()
                this.append(line6)
            }
        }
    }

    const checkAnswers = () => {
        if (answers.length === 3) {
            if (answer1 && answer2 && answer3 === true) {
                // const restart = document.querySelector(".restart");
                // const restartText = document.querySelector(".restart-text");
                // restart.style.display = "flex"
                // restartText.innerHTML = "Je hebt alles correct"

                const lottie = document.querySelector(".lottie-container")
                lottie.style.display = "flex"
                setTimeout(() => {
                    localStorage.setItem('pcIT', true);
                    document.location.href = "/pages-network/pcIT.html";
                }, 2600);
            } else {
                resetCharts()
            }
        }
    }

    function resetCharts() {
        answers = [];
        answer1 && answer2 && answer3 === false;
        const restart = document.querySelector(".restart");
        top.innerHTML = clonedTop.innerHTML;
        bottom.innerHTML = clonedBottom.innerHTML;

        restart.style.display = "flex"

        setTimeout(() => {
            // restart.style.display = "none";
            // initListeners();
            location.reload();
        }, 1500);

    }


    initListeners();
    setInterval(() => {
        checkAnswers()
    }, 500);
}