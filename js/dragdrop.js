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
                line1.remove();
                this.firstElementChild.setAttribute("src", "../img/drag&drop/fullChart/answer3.png")
                this.firstElementChild.setAttribute("class", "answer")
                answer1 = true
                checkDone();
            } else {
                resetCharts()
            }
        }
        if (dragClass === "line-2") {
            if (this.id === dragId) {
                line2.remove();
                this.firstElementChild.setAttribute("src", "../img/drag&drop/fullChart/answer1.png")
                this.firstElementChild.setAttribute("class", "answer")
                answer2 = true
                checkDone();
            } else {
                resetCharts()
            }
        }
        if (dragClass === "line-3") {
            if (this.id === dragId) {
                checkDone();
            } else {
                resetCharts()
            }
        }
        if (dragClass === "line-4") {
            if (this.id === dragId) {
                checkDone();
            } else {
                resetCharts()
            }
        }
        if (dragClass === "line-5") {
            if (this.id === dragId) {
                line5.remove();
                this.firstElementChild.setAttribute("src", "../img/drag&drop/fullChart/answer2.png")
                this.firstElementChild.setAttribute("class", "answer")
                answer3 = true
                checkDone();
            } else {
                resetCharts()
            }
        }
        if (dragClass === "line-6") {
            if (this.id === dragId) {
                checkDone();
            } else {
                resetCharts()
            }
        }
    }

    const checkDone = () => {
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
        }
    }

    function resetCharts() {
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
}