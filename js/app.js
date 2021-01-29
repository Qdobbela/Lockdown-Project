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
        if (!!ceo == 'true') {
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


const init = function () {
    networkFolder = document.getElementById('network_folder')
    networkIcon = document.getElementById('network_icon')
    networkFolderClose = document.getElementById('network_folder_close')

    documentsFolder = document.getElementById('documents_folder');
    documentsIcon = document.getElementById('documents_icon');
    documentsFolderClose = document.getElementById('documents_folder_close');

    mailboxFolder = document.getElementById('mailbox_folder');
    mailboxIcon = document.getElementById('mailbox_icon');
    mailboxFolderClose = document.getElementById('mailbox_folder_close');

    networkIcon.addEventListener('click', function () {
        networkFolder.style.display = 'block'
    });
    networkFolderClose.addEventListener('click', function () {
		networkFolder.style.display = 'none';
    });
    
    documentsIcon.addEventListener('click', function () {
        documentsFolder.style.display = 'block'
    });
    documentsFolderClose.addEventListener('click', function () {
		documentsFolder.style.display = 'none';
    });
    
    mailboxIcon.addEventListener('click', function () {
		mailboxFolder.style.display = 'block';
	});
	mailboxFolderClose.addEventListener('click', function () {
		mailboxFolder.style.display = 'none';
    });
};


document.addEventListener('DOMContentLoaded', function () {
    checkAuth();
    getNetworkProgress();
    init();
});



