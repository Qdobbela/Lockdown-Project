const checkAuth = () => {
    if (sessionStorage.getItem('Auth1') === null) {
        auth = false
    } else {
        auth = !!sessionStorage.getItem('Auth1');
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
        if (sessionStorage.getItem(`pc${page}`) != 'true') {
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
            if (sessionStorage.getItem('help4') != 'true') {
                document.getElementById('help_text').innerHTML = "Alright, laat ons beginnen met het hacken van de Fintrabank! <br> Eerst moeten we binnengeraken in een computer op het netwerk.<br> We hebben de meeste kans om een username en wachtwoord te ontfutselen van één van de collega's.<br><br> Lets go phishing! Stuur al de medewerkers van Fintra een mail om hun wachtwoord te ontfutselen.<br><br> Stuur hen dit bericht door. \"Beste, wegens problemen met het netwerk moeten we jouw paswoord van de Fintrabank opnieuw instellen. Gelieve je huidige wachtwoord door te geven en wij zorgen voor de rest.\"";
                showText();
                hideText(30000)
                    .then(() => {
                        sessionStorage.setItem('help4', true);
                    }).then(() => {
                        document.getElementById('help_text').innerHTML = 'De username is een combinatie van de voornaam en enkele letters in de achternaam. Probeer het paswoord te bekomen via een onoplettende werknemer.';
                    });
            }
            break;

        case 'Bureaublad Dirk':
            if (sessionStorage.getItem('help1') != 'true') {
                document.getElementById('help_text').innerHTML = "Alright, laat ons beginnen met het hacken van de Fintrabank! <br> Eerst moeten we binnengeraken in een computer op het netwerk.<br> We hebben de meeste kans om een username en wachtwoord te ontfutselen van één van de collega's.<br><br> Lets go phishing! Stuur al de medewerkers van Fintra een mail om hun wachtwoord te ontfutselen.<br><br> Stuur hen dit bericht door. \"Beste, wegens problemen met het netwerk moeten we jouw paswoord van de Fintrabank opnieuw instellen. Gelieve je huidige wachtwoord door te geven en wij zorgen voor de rest.\"";
                showText();
                hideText();
                sessionStorage.setItem('help1', true);
            }
            break;

        case 'Bureaublad HR':
            showText();
            hideText();
            break;

        case 'Bureaublad Finance':
            showText();
            hideText();
            break;

        case 'Bureaublad CEO':
            if (sessionStorage.getItem('endTime') !== null) {
                time = sessionStorage.getItem('endTime');
            } else {
                now = Date.now();
                start = Date.parse(sessionStorage.getItem('startTime'));
                duration = now - start;
                hours = Math.floor(duration / 3600000);
                minutes = Math.floor(Math.floor(duration % 3600000) / 60000);
                seconds = Math.floor(Math.floor(Math.floor(duration % 3600000) % 60000) / 1000);
                if (hours == 0) {
                    time = `${minutes}:${seconds}`;
                } else {
                    time = `${hours}:${minutes}:${seconds}`;
                }
                sessionStorage.setItem('endTime', time);
            }

            document.getElementById('help_text').innerHTML = `Dank voor de hulp. Zelf had ik nooit zo ver geraakt. Maar ik moet je iets bekennen, dit was geen opdracht vanuit Fintrabank. Het spijt me om te melden, maar je hebt net een misdaad begaan. En jouw virtuele vingerafdrukken staan overal. Je hebt de CEO gehackt in ${time}. Veel succes om dit uit te leggen aan de authoriteiten. Adios!`;
            showText();
            break;

        case 'Bureaublad IT':
            break;

        case 'NetworkHack Pattern':
            // document.getElementById('help_text').innerHTML = "Volg de HR medewekers! De collega's van de personeelsdienst bezitten elk een deel van de oplossing. ";
            break;

        default:
            break;
    }
}

async function showText(delay = 3000) {
    await new Promise((r) => setTimeout(r, delay));
    document.getElementById('help_bubble').style.display = 'block'
}

async function hideText(delay = 20000) {
    await new Promise((r) => setTimeout(r, delay));
    document.getElementById('help_bubble').style.display = 'none'
}

const getNetworkProgress = () => {
    if (sessionStorage.getItem('pcCEO') === null) {
        sessionStorage.setItem('pcCEO', 3);
        sessionStorage.setItem('pcFinance', false);
        sessionStorage.setItem('pcHR', false);
        sessionStorage.setItem('pcIT', false);
        // sessionStorage.setItem('pcDirk', true);
    }

    try {
        ceo = sessionStorage.getItem('pcCEO')
        document.getElementById('pcCEO_icon').style.display = 'none';
        document.getElementById('pcCEO_icon_locked1').style.display = 'none';
        document.getElementById('pcCEO_icon_locked2').style.display = 'none';
        document.getElementById('pcCEO_icon_locked3').style.display = 'none';
        if (ceo == 'true') {
            document.getElementById('pcCEO_icon').style.display = 'block';
        } else if (ceo == '1') {
            document.getElementById('pcCEO_icon_locked1').style.display = 'block';
        } else if (ceo == '2') {
            document.getElementById('pcCEO_icon_locked2').style.display = 'block';
        } else if (ceo == '3') {
            document.getElementById('pcCEO_icon_locked3').style.display = 'block';
        }
    } catch (error) {
        console.log(error)
    }

    try {
        HR = sessionStorage.getItem('pcHR');
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
        IT = sessionStorage.getItem('pcIT');
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
        Finance = sessionStorage.getItem('pcFinance');
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
    if (path.toString() === ",A,G,E,N,D,A" || sessionStorage.getItem('agendaFound') === "true") {
        sessionStorage.setItem('agendaFound', true);
        setPathStructureFound();
    } else {
        sessionStorage.setItem('agendaFound', false);
    }
}

// Never delete this commented code, otherwise its broke, no idea why
const setPathStructureFound = () => {
    // if (sessionStorage.getItem('agendaFound') === "true") {
    //     console.log("Key found!, now store it")
    //     sessionStorage.setItem('agendaFound', true);
    //     toOpen = document.getElementById("-1");
    //     clicks++
    //     toOpen.style.display = 'block'
    //     toOpen.style.zIndex = clicks;
    // }
}


displaying = false;
const init = function () {
    try {
        document.getElementById('pcCEO_icon_locked3').addEventListener('mouseover', function () {
            if (sessionStorage.getItem('help3') != 'true') {
                document.getElementById('help_text').innerHTML = 'Hier moeten we zijn! Bereid je voor, dit gaat geen gemakkelijke opgave zijn. Waarschijnlijk moet je hier door meerdere lagen firewall breken. ';
                showText(0);
                hideText(10000);
                sessionStorage.setItem('help3', true);
            }
        })
    } catch (error) {
        console.log(error);
    }

    try {
        networkFolder = document.getElementById('network_folder')
        networkIcon = document.getElementById('network_icon')
        networkFolderClose = document.getElementById('network_folder_close')

        networkIcon.addEventListener('click', function () {
            if (sessionStorage.getItem('help2') != 'true') {
                document.getElementById('help_text').innerHTML = 'Lap, het ziet ernaar uit dat ze intern toch beveiliging hebben ingesteld. Ongetwijfeld een koud kunstje voor een hacker van jouw kaliber om die security te omzeilen!Laat ons focussen op de computer van het Human Resources departement. Daar gaan we wel wat meer info vinden die ons kan helpen bij de andere toestellen op het netwerk. ';
                showText();
                hideText();
                sessionStorage.setItem('help2', true);
            }

            if (sessionStorage.getItem('helpHR') != 'true') {
                document.getElementById('help_text').innerHTML = 'Lap, het ziet ernaar uit dat ze intern toch beveiliging hebben ingesteld. Ongetwijfeld een koud kunstje voor een hacker van jouw kaliber om die security te omzeilen!Laat ons focussen op de computer van het Human Resources departement. Daar gaan we wel wat meer info vinden die ons kan helpen bij de andere toestellen op het netwerk. ';
                showText();
                hideText();
                sessionStorage.setItem('helpHR', true);
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
        documentsFolderClose = document.getElementById('documents_folder_close');
        documentsIcon.addEventListener('click', function () {
            if (!displaying) {
                documentsFolder.style.display = 'block';
                displaying = true;
                setPathStructureFound()
            }
            if (sessionStorage.getItem('agendaFound') === "true") {
                toOpen = document.getElementById("-1");
                clicks++
                if (toOpen) {
                    toOpen.style.display = 'block'
                    toOpen.style.zIndex = clicks;
                    const div = document.createElement('div');

                    div.className = 'tree-structure-found';

                    div.innerHTML = `
                        <p class="tree-structure-text">A</p>
                        <p class="tree-structure-text">G</p>
                        <p class="tree-structure-text">E</p>
                        <p class="tree-structure-text">N</p>
                        <p class="tree-structure-text">D</p>
                        <p class="tree-structure-text">A</p>
                        `;

                    document.getElementById('tree-structure-found').appendChild(div);
                }
            }
        });
        documentsFolderClose.addEventListener('click', function () {
            documentsFolder.style.display = 'none';
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


document.addEventListener('DOMContentLoaded', function () {
    checkAuth();
    checkUnlocked();
    setBubbleText();
    init();
    getNetworkProgress();
    subfolderDoolhof();
    setPathStructure();
});