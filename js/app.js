const checkAuth = () => { 
    if (sessionStorage.getItem('Auth1') === null) {
        auth = false
    } else {
        auth = !!sessionStorage.getItem('Auth1');
    }
    
    if (window.location.pathname == '/index.html') {
        if (auth) {
            location.replace('/pages-network/pcDirk.html');
        }
    } else {
        if (!auth) {
			location.replace('/index.html');
		}
    }
}

const getNetworkProgress = () => {
    if (sessionStorage.getItem('pcCEO') === null) {
        console.log('initiate progress')
		sessionStorage.setItem('pcCEO', 3);
		sessionStorage.setItem('pcFinance', false);
		sessionStorage.setItem('pcHR', false);
		sessionStorage.setItem('pcIT', false);
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
    } catch(error) {
        console.log(error)
    }

    try {
        HR = sessionStorage.getItem('pcHR');
        console.log(HR)
        document.getElementById('pcHR_icon').style.display = 'none';
        document.getElementById('pcHR_icon_locked').style.display = 'none';
        if (HR == 'true') {
            document.getElementById('pcHR_icon').style.display = 'block';
        } else {
            document.getElementById('pcHR_icon_locked').style.display = 'block';
        }
    } catch(error) {
        console.log(error)
    }
    
    try {
        IT = sessionStorage.getItem('pcIT');
        console.log(IT);
        document.getElementById('pcIT_icon').style.display = 'none';
        document.getElementById('pcIT_icon_locked').style.display = 'none';
        if (IT == 'true') {
            document.getElementById('pcIT_icon').style.display = 'block';
        } else {
            document.getElementById('pcIT_icon_locked').style.display = 'block';
        }
    } catch(error) {
        console.log(error)
    }
    
    try {
        Finance = sessionStorage.getItem('pcFinance');
        console.log(Finance);
        document.getElementById('pcFinance_icon').style.display = 'none';
        document.getElementById('pcFinance_icon_locked').style.display = 'none';
        if (Finance == 'true') {
            document.getElementById('pcFinance_icon').style.display = 'block';
        } else {
            document.getElementById('pcFinance_icon_locked').style.display = 'block';
        }
    } catch(error) {
        console.log(error)
    }
}


var clicks = 1
const subfolderDoolhof = () => { 
    folders = document.querySelectorAll('.js-subfolder');
    folders.forEach((icon) => {
        icon.addEventListener('click', function () {
            console.log(clicks, icon.name)
            clicks ++
            toOpen = document.getElementById(icon.name);
            toOpen.style.display = 'block'
            toOpen.style.zIndex = clicks
        })
    })
    foldersClose = document.querySelectorAll('.js-close');
    foldersClose.forEach((icon) => { 
        icon.addEventListener('click', function () {
			toClose = document.getElementById(icon.name);
			toClose.style.zIndex = 1;
			toClose.style.display = 'none';
		});
    })
}



const init = function () {
    try {
        networkFolder = document.getElementById('network_folder')
        networkIcon = document.getElementById('network_icon')
        networkFolderClose = document.getElementById('network_folder_close')

        networkIcon.addEventListener('click', function () {
            networkFolder.style.display = 'block';
        });
        networkFolderClose.addEventListener('click', function () {
            networkFolder.style.display = 'none';
        });
    } catch (error) {
        console.log(error)
    }

    try {
        documentsFolder = document.getElementById('documents_folder');
        documentsIcon = document.getElementById('documents_icon');
        documentsFolderClose = document.getElementById('documents_folder_close');

        documentsIcon.addEventListener('click', function () {
            documentsFolder.style.display = 'block';
        });
        documentsFolderClose.addEventListener('click', function () {
            documentsFolder.style.display = 'none';
        });
    } catch (error) {
        console.log(error)
    }

    try {
        mailboxFolder = document.getElementById('mailbox_folder');
        mailboxIcon = document.getElementById('mailbox_icon');
        mailboxFolderClose = document.getElementById('mailbox_folder_close');

        mailboxIcon.addEventListener('click', function () {
            mailboxFolder.style.display = 'block';
        });
        mailboxFolderClose.addEventListener('click', function () {
            mailboxFolder.style.display = 'none';
        });
    } catch (error) {
        console.log(error);
    }
};


document.addEventListener('DOMContentLoaded', function () {
    checkAuth();
    init();
    getNetworkProgress();
    subfolderDoolhof();
});



