const checkAuth = () => {
    if (localStorage.getItem('Auth1') === null) {
        auth = false
    } else {
        auth = !!localStorage.getItem('Auth1');
    }

    if (window.location.pathname == '/index.html') {
        if (auth) {
            location.replace('pages-network/pcDirk.html');
            // location.href = '/pages-network/pcDirk.html';
        }
    } else {
        if (!auth) {
            location.replace('/index.html');
            // location.href = '/index.html';
        }
    }
}

const checkUnlocked = () => {
    if (document.title != 'Login' && document.title != 'Bureaublad Dirk') {
        title = document.title.split(' ')
        page = title[title.length - 1]
        console.log(`pc${page}`);
        if (localStorage.getItem(`pc${page}`) != 'true') {
            history.back();
        }
    }
}

const setBubbleText = () => {
    title = document.title //.split(' ');
    // page = title[title.length - 1];
    // console.log(page)

    switch (title) {

        case 'Login':
            let clicks = 0;
            if (localStorage.getItem('help4') != 'true') {
                showText();
                hideText(30000)
                localStorage.setItem('help4', true);
            }
            const hintTxt = document.querySelector(".hint-text")
            const hintBtn = document.getElementById("hint-icon")

            hintBtn.addEventListener('click', () => {
                console.log("click")
                clicks++
                if (clicks === 2) {
                    hintTxt.innerHTML = "HINT 2"
                }
                if (clicks === 4) {
                    hintTxt.innerHTML = "HINT 3"
                }
            })

            break;

        case 'Bureaublad Dirk':
            localStorage.setItem("dirk", true);
            setNetworkIcons();
            if (localStorage.getItem('help1') != 'true') {
                showText();
                hideText();
                localStorage.setItem('help1', true);
            }
            break;

        case 'Bureaublad HR':
            localStorage.setItem('helpHRNetwork', false)
            localStorage.setItem('hr', true)
            setNetworkIcons();
            if (localStorage.getItem('helpHR') != 'true') {
                showText();
                hideText();
                localStorage.setItem('helpHR', true);
            }
            break;

        case 'Bureaublad Finance':
            localStorage.setItem('finance', true)
            localStorage.setItem('helpFinanceNetwork', false)
            if (localStorage.getItem('helpFinance') != 'true') {
                showText();
                hideText();
                localStorage.setItem('helpFinance', true);
            }
            break;

        case 'Bureaublad CEO':
            if (localStorage.getItem('endTime') !== null) {
                time = localStorage.getItem('endTime');
            } else {
                now = Date.now();
                start = Date.parse(localStorage.getItem('startTime'));
                duration = now - start;
                hours = Math.floor(duration / 3600000);
                minutes = Math.floor(Math.floor(duration % 3600000) / 60000);
                seconds = Math.floor(Math.floor(Math.floor(duration % 3600000) % 60000) / 1000);
                if (hours == 0) {
                    time = `${minutes} minuten en ${seconds} seconden`;
                } else {
                    time = `${hours} uur ${minutes} minuten en ${seconds} seconden`;
                }
                localStorage.setItem('endTime', time);
            }

            // document.getElementById('help_text').innerHTML = `Dank voor de hulp. Zelf had ik nooit zo ver geraakt. Maar ik moet je iets bekennen, dit was geen opdracht vanuit Fintrabank. Het spijt me om te melden, maar je hebt net een misdaad begaan. En jouw virtuele vingerafdrukken staan overal. Je hebt de CEO gehackt in ${time}. Veel succes om dit uit te leggen aan de authoriteiten. Adios!`;
            // showText();
            break;

        case 'Bureaublad IT':
            localStorage.setItem('it', true)
            setNetworkIcons();
            break;

        case 'NetworkHack Pattern':
            // document.getElementById('help_text').innerHTML = "Volg de HR medewekers! De collega's van de personeelsdienst bezitten elk een deel van de oplossing. ";
            break;

        default:
            break;
    }
}

const showText = (delay = 1000) => {
    setTimeout(() => {
        document.getElementById('help_bubble').style.display = 'block'
    }, delay);
}

const hideText = (delay = 20000) => {
    setTimeout(() => {
        document.getElementById('help_bubble').style.display = 'none'
    }, delay);

}

const getNetworkProgress = () => {
    if (localStorage.getItem('pcCEO') === null) {
        localStorage.setItem('pcCEO', 3);
        localStorage.setItem('pcFinance', false);
        localStorage.setItem('pcHR', false);
        localStorage.setItem('pcIT', false);
        localStorage.setItem('ceoSlot1', false);
        localStorage.setItem('ceoSlot2', false);
        localStorage.setItem('ceoSlot3', false);
    }

    // try {
    //     ceo = localStorage.getItem('pcCEO')
    //     const ceoSlot1 = localStorage.getItem('ceoSlot1')
    //     const ceoSlot2 = localStorage.getItem('ceoSlot2')
    //     const ceoSlot3 = localStorage.getItem('ceoSlot3')

    //     if (ceoSlot1 === "true") {
    //         console.log("CEO OPGELOST")
    //         document.querySelector('.pcCEO_icon_locked3').style.display = "none"

    //     }
    //     if (ceoSlot1 && ceoSlot2 === true) {

    //     }
    //     if (ceoSlot1 && ceoSlot2 && ceoSlot3 === true) {

    //     }

    //     // document.getElementById('pcCEO_icon').style.display = 'none';
    //     // // document.getElementById('pcCEO_icon_locked1').style.display = 'none';
    //     // // document.getElementById('pcCEO_icon_locked2').style.display = 'none';
    //     // // document.getElementById('pcCEO_icon_locked3').style.display = 'none';
    //     // if (ceo == 'true') {
    //     //     // document.getElementById('pcCEO_icon').style.display = 'block';
    //     // } else if (ceo == '1') {
    //     //     document.getElementById('pcCEO_icon_locked2').style.display = 'none';
    //     // } else if (ceo == '2') {
    //     //     document.getElementById('pcCEO_icon_locked3').style.display = 'none';
    //     // } else if (ceo == '3') {
    //     //     // document.getElementById('pcCEO_icon_locked3').style.display = 'block';
    //     // }
    // } catch (error) {
    //     console.log(error)
    // }

    try {
        HR = localStorage.getItem('pcHR');
        document.getElementById('pcHR_icon').style.display = 'none';
        document.getElementById('pcHR_icon_locked').style.display = 'none';
        if (HR == 'true') {
            document.getElementById('pcHR_icon').style.display = 'block';
        } else {
            document.getElementById('pcHR_icon_locked').style.display = 'block';
        }
    } catch (error) {
        console.log(error)
    }

    try {
        IT = localStorage.getItem('pcIT');
        document.getElementById('pcIT_icon').style.display = 'none';
        document.getElementById('pcIT_icon_locked').style.display = 'none';
        if (IT == 'true') {
            document.getElementById('pcIT_icon').style.display = 'block';
        } else {
            document.getElementById('pcIT_icon_locked').style.display = 'block';
        }
    } catch (error) {
        console.log(error)
    }

    try {
        Finance = localStorage.getItem('pcFinance');
        document.getElementById('pcFinance_icon').style.display = 'none';
        document.getElementById('pcFinance_icon_locked').style.display = 'none';
        if (Finance == 'true') {
            document.getElementById('pcFinance_icon').style.display = 'block';
        } else {
            document.getElementById('pcFinance_icon_locked').style.display = 'block';
        }
    } catch (error) {
        console.log(error)
    }
}

const setNetworkIcons = () => {
    if (localStorage.getItem("finance") === "true") {
        console.log("finance completed")
        const finance = document.getElementById("pcFinance_icon");
        const it = document.getElementById("pcIT_icon");
        if (finance) {
            finance.classList.remove("disabled")
            finance.firstElementChild.src = "../img/desktop_mac-24px.svg";
        }
        if (it) {
            it.firstElementChild.src = "../img/https-24px.svg";
        }

    }
    if (localStorage.getItem("it") === "true") {
        console.log("it completed");
        const it = document.getElementById("pcIT_icon");
        if (it) {
            it.classList.remove("disabled")
            it.firstElementChild.src = "../img/desktop_mac-24px.svg";
        }
    }

}


const checkCeoSlots = () => {
    const ceoSlot1 = localStorage.getItem('ceoSlot1')
    const ceoSlot2 = localStorage.getItem('ceoSlot2')
    const ceoSlot3 = localStorage.getItem('ceoSlot3')

    if (ceoSlot1 === "false") {
        document.getElementById('pcCEO_icon_locked3').style.display = "block"
        document.getElementById('pcCEO_icon_locked2').style.display = "block"
        document.getElementById('pcCEO_icon_locked1').style.display = "block"
        document.getElementById('pcCEO_icon_locked2').classList.add("disabled");

        // document.getElementById('pcCEO_icon_locked3').classList.remove("disabled")
        // document.getElementById('pcCEO_icon_locked3').firstElementChild.src = "../img/https-24px.svg"

    }
    if (ceoSlot1 && ceoSlot2 === "false") {
        document.getElementById('pcCEO_icon_locked2').style.display = "block"
        document.getElementById('pcCEO_icon_locked1').style.display = "block"

        // Set lock colors
        document.getElementById('pcCEO_icon_locked2').firstElementChild.src = "../img/https-24px3.svg"
        document.getElementById('pcCEO_icon_locked1').firstElementChild.src = "../img/https-24px3.svg"

    }
    if (ceoSlot1 && ceoSlot2 && ceoSlot3 === "false") {
        document.getElementById('pcCEO_icon_locked1').style.display = "block"

        document.getElementById('pcCEO_icon_locked1').classList.add("disabled");


        // // Set lock colors
        // document.getElementById('pcCEO_icon_locked2').firstElementChild.src = "../img/https-24px.svg"

    }

    if (ceoSlot1 === "false" && localStorage.getItem("hr") === "true") {
        document.getElementById('pcCEO_icon_locked3').style.display = "block"
        document.getElementById('pcCEO_icon_locked3').firstElementChild.src = "../img/https-24px.svg";
        document.getElementById('pcCEO_icon_locked3').classList.remove("disabled");
        document.getElementById('pcCEO_icon_locked3').classList.remove("disabled")
    }

    if (ceoSlot3 === "false" && localStorage.getItem("it") != "true") {
        console.log(false)
        document.getElementById('pcCEO_icon_locked1').style.display = "block"
        document.getElementById('pcCEO_icon_locked1').firstElementChild.src = "../img/https-24px3.svg"
        document.getElementById('pcCEO_icon_locked1').classList.add("disabled");
    }

    if (ceoSlot1 === "true") {
        document.getElementById('pcCEO_icon_locked3').style.display = "none";
        document.getElementById('pcCEO_icon_locked2').classList.remove("disabled")
        document.getElementById('pcCEO_icon_locked2').firstElementChild.src = "../img/https-24px.svg"

    }
    if (ceoSlot1 && ceoSlot2 === "true") {
        console.log("open")
        document.getElementById('pcCEO_icon_locked3').style.display = "none"
        document.getElementById('pcCEO_icon_locked2').style.display = "none"

        document.getElementById('pcCEO_icon_locked1').classList.remove("disabled");
        document.getElementById('pcCEO_icon_locked1').firstElementChild.src = "../img/https-24px.svg"

        // if (ceoSlot1 && ceoSlot2 === "true" && window.location.pathname === "/pages-network/pcFinance.html") {
        //     document.getElementById('pcCEO_icon_locked1').classList.add("disabled");
        // }


    }
    if (ceoSlot1 && ceoSlot2 && ceoSlot3 === "true") {
        document.getElementById('pcCEO_icon_locked3').style.display = "none"
        document.getElementById('pcCEO_icon_locked2').style.display = "none"
        document.getElementById('pcCEO_icon_locked1').style.display = "none"

    }
}

let path = [];
var clicks = 1
const subfolderDoolhof = () => {
    folders = document.querySelectorAll('.js-folder');
    subfolders = document.querySelectorAll('.js-subfolder');
    subfolders.forEach((icon) => {
        icon.addEventListener('click', function (e) {
            clicks++
            toOpen = document.getElementById(icon.name);
            toOpen.style.display = 'block'
            toOpen.style.zIndex = clicks;

            const pathName = e.path[1].innerText;
            setPathStructure(pathName);
        })
    })
    document.addEventListener('play', function (e) {
        const allAudios = document.getElementsByTagName('audio');
        for (var i = 0; i < allAudios.length; i++) {
            if (allAudios[i] != e.target) {
                allAudios[i].pause();
            }
        }
    }, true);
    foldersClose = document.querySelectorAll('.js-close');
    foldersClose.forEach((icon) => {
        icon.addEventListener('click', function () {
            folders.forEach((folder) => {
                folder.style.zIndex = 0;
                folder.style.display = 'none'
                displaying = false;
                // Refresh the paths
                path = [];
                deletePathStructure();
                const audios = document.getElementsByTagName('audio');
                for (var i = 0, len = audios.length; i < len; i++) {
                    audios[i].pause();
                }
            })
            // toClose = document.getElementById(icon.name);
            // toClose.style.zIndex = 1;
            // toClose.style.display = 'none';
        });
    })
}

const setPathStructure = (pathName) => {
    const pathDiv = document.querySelectorAll('.tree-structure');
    path.push(pathName);

    checkPathStructure();

    if (path.length > 1) {
        pathDiv.forEach(text => {
            const pathText = document.createElement("p");
            pathText.classList.add("tree-structure-text");
            text.appendChild(pathText);
            pathText.textContent = pathName
        });
    }
}

const deletePathStructure = () => {
    const pathText = document.querySelectorAll('.tree-structure-text');
    pathText.forEach(text => {
        text.remove();
    });
    // Reset the structure
    setPathStructure();
}

const checkPathStructure = () => {
    if (path.toString() === ",A,G,E,N,D,A" || localStorage.getItem('agendaFound') === "true") {
        localStorage.setItem('agendaFound', true);
        localStorage.setItem('agendaCount', 1);
        setPathStructureFound();
    } else {
        localStorage.setItem('agendaFound', false);
    }
}

// Never delete this commented code, otherwise its broke, no idea why
const setPathStructureFound = () => {
    // if (localStorage.getItem('agendaFound') === "true") {
    //     console.log("Key found!, now store it")
    //     localStorage.setItem('agendaFound', true);
    //     toOpen = document.getElementById("-1");
    //     clicks++
    //     toOpen.style.display = 'block'
    //     toOpen.style.zIndex = clicks;
    // }
}


displaying = false;
const init = function () {
    // try {
    //     document.getElementById('pcCEO_icon_locked3').addEventListener('mouseover', function () {
    //         if (localStorage.getItem('help3') != 'true') {
    //             document.getElementById('help_text').innerHTML = 'Hier moeten we zijn! Bereid je voor, dit gaat geen gemakkelijke opgave zijn. Waarschijnlijk moet je hier door meerdere lagen firewall breken. ';
    //             showText(0);
    //             hideText(10000);
    //             localStorage.setItem('help3', true);
    //         }
    //     })
    // } catch (error) {
    //     console.log(error);
    // }


    try {
        networkFolder = document.getElementById('network_folder')
        networkIcon = document.getElementById('network_icon')
        networkFolderClose = document.getElementById('network_folder_close')

        networkIcon.addEventListener('click', function () {
            if (localStorage.getItem('helpDirk') != 'true' && document.title === "Bureaublad Dirk") {
                document.getElementById('help_text').innerHTML = 'Lap, het ziet ernaar uit dat ze intern toch beveiliging hebben ingesteld. Ongetwijfeld een koud kunstje voor een hacker van jouw kaliber om die security te omzeilen!Laat ons focussen op de computer van het Human Resources departement. Daar gaan we wel wat meer info vinden die ons kan helpen bij de andere toestellen op het netwerk. ';
                showText();
                hideText();
                localStorage.setItem('helpDirk', true);
            }

            if (localStorage.getItem('helpHRNetwork') != 'true' && document.title === "Bureaublad HR") {
                document.getElementById('help_text').innerHTML = 'Het ziet er naar uit dat we alle informatie voor handen hebben om  de eerste beveiliging van de CEO computer te kraken.  We kunnen ook machtiging krijgen over de computer van de finance afdeling. Genoeg te doen lijkt me, aan het werk!';
                showText();
                hideText();
                localStorage.setItem('helpHRNetwork', true);
            }

            if (localStorage.getItem('helpFinanceNetwork') != 'true' && document.title === "Bureaublad Finance") {
                document.getElementById('help_text').innerHTML = 'We kunnen nu ook de computer van IT proberen te kraken alsook de tweede beveiliging van de computer van de CEO. Doe waar je goed in bent. Zorg dat we toegang krijgen tot die computers. De tijd begint te dringen. ';
                showText();
                hideText();
                localStorage.setItem('helpFinanceNetwork', true);
            }
            if (!displaying) {
                networkFolder.style.display = 'block';
                displaying = true;
            }
        });
        networkFolderClose.addEventListener('click', function () {
            networkFolder.style.display = 'none';
            displaying = false;
        });
    } catch (error) {
        console.log(error)
    }

    try {
        documentsFolder = document.getElementById('documents_folder');
        documentsIcon = document.getElementById('documents_icon');
        staffIcon = document.getElementById('staff_icon');
        staffFolder = document.getElementById('staff_folder');
        documentsFolderClose = document.getElementById('documents_folder_close');
        staffFolderClose = document.getElementById('staff_folder_close');


        documentsIcon.addEventListener('click', function () {
            console.log("documents clicked")
            if (!displaying) {
                documentsFolder.style.display = 'block';
                displaying = true;
                setPathStructureFound()
            }
            if (localStorage.getItem('agendaFound') === "true") {
                toOpen = document.getElementById("-1");
                clicks++
                if (toOpen) {
                    toOpen.style.display = 'block'
                    toOpen.style.zIndex = clicks;
                    const div = document.getElementById('tree-structure-found')

                    div.innerHTML = `
                        <p class="tree-structure-text">A</p>
                        <p class="tree-structure-text">G</p>
                        <p class="tree-structure-text">E</p>
                        <p class="tree-structure-text">N</p>
                        <p class="tree-structure-text">D</p>
                        <p class="tree-structure-text">A</p>
                        `;

                    // document.getElementById('tree-structure-found').appendChild(div);
                }
            }
        });
        documentsFolderClose.addEventListener('click', function () {
            documentsFolder.style.display = 'none';
            displaying = false;
        });

        staffIcon.addEventListener('click', () => {

            if (!displaying) {
                staffFolder.style.display = 'block';
                displaying = true;
            }
        })
        staffFolderClose.addEventListener('click', function () {
            staffFolder.style.display = 'none';
            displaying = false;
        });
    } catch (error) {
        console.log(error)
    }

    try {
        mailboxFolder = document.getElementById('mailbox_folder');
        mailboxIcon = document.getElementById('mailbox_icon');
        mailboxFolderClose = document.getElementById('mailbox_folder_close');

        mailboxIcon.addEventListener('click', function () {
            if (!displaying) {
                mailboxFolder.style.display = 'block';
                displaying = true;
            }
        });
        mailboxFolderClose.addEventListener('click', function () {
            mailboxFolder.style.display = 'none';
            displaying = false;
        });
    } catch (error) {
        console.log(error);
    }

    try {
        trashFolder = document.getElementById('trash_folder');
        trashIcon = document.getElementById('trash_icon');
        trashFolderClose = document.getElementById('trash_folder_close');

        trashIcon.addEventListener('click', function () {
            if (!displaying) {
                trashFolder.style.display = 'block';
                displaying = true;
            }
        });
        trashFolderClose.addEventListener('click', function () {
            trashFolder.style.display = 'none';
            displaying = false;
        });
    } catch (error) {
        console.log(error);
    }

    try {
        hintIcon = document.getElementById('hint-icon');
        helpIcon = document.getElementById('help-icon');
        helpBubble = document.getElementById('help_bubble');
        helpBubbleHint = document.getElementById('help_bubble-hint');

        helpIcon.addEventListener('click', function () {
            if (helpBubble.style.display != 'block') {
                helpBubble.style.display = 'block';
                if (helpBubbleHint) {
                    helpBubbleHint.style.display = 'none'
                }

            } else {
                helpBubble.style.display = 'none';
            }
        });

        hintIcon.addEventListener('click', function () {
            if (helpBubbleHint.style.display != 'block') {
                helpBubbleHint.style.display = 'block';
                helpBubble.style.display = 'none';
            } else {
                if (helpBubbleHint) {
                    helpBubbleHint.style.display = 'none'
                }
            }
        });
    } catch (error) {
        console.log(error);
    }
};

// Close hints & tips on folder click
const closeOnClick = () => {
    const helpBubble = document.getElementById('help_bubble');
    const helpBubbleHint = document.getElementById('help_bubble-hint');
    const folders = document.querySelectorAll('.c-desktop-icon');

    folders.forEach(folder => {
        folder.addEventListener('click', () => {
            if (helpBubble) {
                if (helpBubble.style.display != "none") {
                    helpBubble.style.display = "none";
                }
            }
            if (helpBubbleHint) {
                if (helpBubbleHint.style.display != "none") {
                    helpBubbleHint.style.display = "none";
                }
            }
        })
    });


}

document.addEventListener('DOMContentLoaded', function () {
    checkAuth();
    checkUnlocked();
    setBubbleText();
    init();
    getNetworkProgress();
    subfolderDoolhof();
    setPathStructure();
    closeOnClick();
    checkCeoSlots();
});