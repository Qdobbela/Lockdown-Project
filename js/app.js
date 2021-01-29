const checkAuth = () => { 
    if (sessionStorage.getItem('Auth1') === null) {
        auth = false
    } else {
        auth = !!sessionStorage.getItem('Auth1');
    }
    
    console.log(window.location.pathname, auth);
    if (window.location.pathname == '/index.html') {
        console.log("1")
        if (auth) {
            console.log('2');
            location.replace('/pages-network/pcDirk.html');
        }
    } else {
        console.log('3');
        console.log(auth)
        if (!auth) {
            console.log('4');
			location.replace('/index.html');
		}
    }
}


const init = function () {
    networkFolder = document.getElementById('network_folder')
    networkIcon = document.getElementById('network_icon')
    networkFolderClose = document.getElementById('network_folder_close')

    networkIcon.addEventListener('click', function () {
        networkFolder.style.display = 'block'
    });
    networkFolderClose.addEventListener('click', function () {
		networkFolder.style.display = 'none';
	});
};


document.addEventListener('DOMContentLoaded', function () {
    checkAuth();
    init();
});



