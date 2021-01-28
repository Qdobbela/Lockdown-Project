const checkAuth = () => { 
    if (sessionStorage.getItem('Auth1') === null) {
        auth = false
    } else {
        auth = !!sessionStorage.getItem('Auth1');
    }
    
    console.log(window.location.pathname, auth);
    if (window.location.pathname == '/login-page.html') {
        console.log("1")
        if (auth) {
            console.log('2');
            location.replace('/index.html');
        }
    } else {
        console.log('3');
        console.log(auth)
        if (!auth) {
            console.log('4');
			location.replace('/login-page.html');
		}
    }
}


const init = function () {
    
};


document.addEventListener('DOMContentLoaded', function () {
    checkAuth();
    init();
});



