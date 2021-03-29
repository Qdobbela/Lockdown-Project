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
        this.className += ' hold';

        dragClass = this.className.split(' ')[1];
        dragId = this.id;
    }

    function dragEnd() {
        this.className = 'fill';
    }

    function dragOver(e) {
        e.preventDefault();
    }

    function dragEnter(e) {
        e.preventDefault();
        this.className += ' hovered';
    }

    function dragLeave() {
        this.className = 'empty';
    }

    function dragDrop() {
        if (dragClass === "line-1") {
            if (this.id === dragId) {
                answers.push("line")
                this.append(line1)
                this.classList.add("relative")
                this.firstElementChild.classList.add("absolute")
                this.firstElementChild.nextElementSibling.classList.add("absolute")
                answer1 = true
            } else {
                answers.push("line")
                this.append(line1)
                this.classList.add("relative")
                this.firstElementChild.classList.add("absolute")
                this.firstElementChild.nextElementSibling.classList.add("absolute")
            }
        }
        if (dragClass === "line-2") {
            if (this.id === dragId) {
                answers.push("line")
                this.append(line2)
                this.classList.add("relative")
                this.firstElementChild.classList.add("absolute")
                this.firstElementChild.nextElementSibling.classList.add("absolute")
                answer2 = true
            } else {
                answers.push("line")
                this.append(line2)
                this.classList.add("relative")
                this.firstElementChild.classList.add("absolute")
                this.firstElementChild.nextElementSibling.classList.add("absolute")
            }
        }
        if (dragClass === "line-3") {
            if (this.id === dragId) {
                answers.push("line")
                this.append(line3)
                this.classList.add("relative")
                this.firstElementChild.classList.add("absolute")
                this.firstElementChild.nextElementSibling.classList.add("absolute")
            } else {
                answers.push("line")
                this.append(line3)
                this.classList.add("relative")
                this.firstElementChild.classList.add("absolute")
                this.firstElementChild.nextElementSibling.classList.add("absolute")
            }
        }
        if (dragClass === "line-4") {
            if (this.id === dragId) {
                answers.push("line")
                this.append(line4)
                this.classList.add("relative")
                this.firstElementChild.classList.add("absolute")
                this.firstElementChild.nextElementSibling.classList.add("absolute")
            } else {
                answers.push("line")
                this.append(line4)
                this.classList.add("relative")
                this.firstElementChild.classList.add("absolute")
                this.firstElementChild.nextElementSibling.classList.add("absolute")
            }
        }
        if (dragClass === "line-5") {
            if (this.id === dragId) {
                answers.push("line")
                this.append(line5)
                this.classList.add("relative")
                this.firstElementChild.classList.add("absolute")
                this.firstElementChild.nextElementSibling.classList.add("absolute")
                answer3 = true;
            } else {
                answers.push("line")
                this.append(line5)
                this.classList.add("relative")
                this.firstElementChild.classList.add("absolute")
                this.firstElementChild.nextElementSibling.classList.add("absolute")
            }
        }
        if (dragClass === "line-6") {
            if (this.id === dragId) {
                answers.push("line")
                answers.push("line")
                this.append(line6)
                this.classList.add("relative")
                this.firstElementChild.classList.add("absolute")
                this.firstElementChild.nextElementSibling.classList.add("absolute")
            } else {
                answers.push("line")
                this.append(line6)
                this.classList.add("relative")
                this.firstElementChild.classList.add("absolute")
                this.firstElementChild.nextElementSibling.classList.add("absolute")
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
                    sessionStorage.setItem('pcIT', true);
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
            restart.style.display = "none"
        }, 1500);

        initListeners();
    }


    initListeners();
    setInterval(() => {
        checkAnswers()
    }, 500);
}