{
    let deadline;
    let timeinterval;



    const getTimeRemaining = () => {
        const t = Date.parse(deadline) - Date.parse(new Date());
        // console.log(t)
        const seconds = Math.floor((t / 1000) % 60);
        const minutes = Math.floor((t / 1000 / 60) % 60);
        const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
        return {
            'total': t,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    const updateClock = () => {

        // const clock = document.getElementById(id);

        const hoursSpan = document.querySelector('.hours');
        const minutesSpan = document.querySelector('.minutes');
        const secondsSpan = document.querySelector('.seconds');


        const t = getTimeRemaining();
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
        document.title = `Time left: ${hoursSpan.innerHTML}:${ minutes = minutesSpan.innerHTML}:${ seconds = secondsSpan.innerHTML} `;

        // Set time inlocalStorage
       localStorage.setItem("hours", hoursSpan.innerHTML);
       localStorage.setItem("minutes", minutesSpan.innerHTML)
       localStorage.setItem("seconds", secondsSpan.innerHTML)
        // console.log(sessionStorage.getItem('hours'),localStorage.getItem('minutes'),localStorage.getItem('seconds'))

        if (t.total <= 0) {
            clearInterval(timeinterval);
        }

    }

    const init = () => {
        deadline = new Date(Date.parse(new Date()) + 1 * 60 * 60 * 1000)
        // console.log(deadline)
        setInterval(updateClock, 1000);


    }
    init();


}