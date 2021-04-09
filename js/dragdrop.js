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

    function dragStart() {
        // this.className += ' hold';
        dragClass = this.className.split(' ')[1];
        dragId = this.id;
        console.log(this)
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
        const lines = document.querySelectorAll('.line');
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
            lines[0].innerHTML = `<div draggable="true"  id="1" class="fill line-1" >
                <img    src="../img/drag&drop/lines/line3.png" alt="">
              </div>`
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
            lines[1].innerHTML = `<div draggable="true" id="2" class="fill line-2">
                <img id="2" src="../img/drag&drop/lines/line1.png" alt="">
              </div>`
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
            lines[2].innerHTML = `<div draggable="true" id="3"  class="fill line-3" >
                <img id="3" src="../img/drag&drop/lines/line6.png" alt="">
              </div>`
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
            lines[3].innerHTML = `<div draggable="true" id="4"  class="fill line-4" >
            <img id="4" src="../img/drag&drop/lines/line5.png" alt="">
          </div>`
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
            lines[4].innerHTML = `<div draggable="true" id="5"  class="fill line-5" >
                <img id="5" src="../img/drag&drop/lines/line2.png" alt="">
              </div>`
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
            lines[5].innerHTML = `<div draggable="true" id="6"  class="fill line-6" >
            <img id="6" src="../img/drag&drop/lines/line4.png" alt="">
          </div>`
        }
        initListeners();
    }

    const checkAnswers = () => {
        // if (answers.length === 3) {
        //     if (answer1 && answer2 && answer3 === true) {
        //         // const restart = document.querySelector(".restart");
        //         // const restartText = document.querySelector(".restart-text");
        //         // restart.style.display = "flex"
        //         // restartText.innerHTML = "Je hebt alles correct"

        //         const lottie = document.querySelector(".lottie-container")
        //         lottie.style.display = "flex"
        //         setTimeout(() => {
        //             localStorage.setItem('pcIT', true);
        //             document.location.href = "/pages-network/pcIT.html";
        //         }, 2600);
        //     } else {
        //         resetCharts()
        //     }
        // }
        // console.log(document.querySelector(".bot2").firstElementChild.nextElementSibling.id)

        try {
            const bot1 = document.querySelector(".bot2").firstElementChild.nextElementSibling.id;
            const bot2 = document.querySelector(".bot5").firstElementChild.nextElementSibling.id;
            const bot3 = document.querySelector(".bot1").firstElementChild.nextElementSibling.id;

            console.log(bot1, bot2, bot3)

            if (bot1 === "2" && bot2 === "5" && bot3 === "1") {
                const lottie = document.querySelector(".lottie-container")
                lottie.style.display = "flex"
                setTimeout(() => {
                    localStorage.setItem('pcIT', true);
                    document.location.href = "/pages-network/pcIT.html";
                }, 2600);
            } else {
                resetCharts()
            }

        } catch {

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