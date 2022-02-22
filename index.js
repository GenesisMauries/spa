// https://drive.google.com/file/d/1QAOd2m6EhMmPd8C6FkVNjQ5CzkIb0wed/view

const rootMain = document.querySelector('#root');

const linkContent= {
    '#home': '<h1>Home</h1>',
    '#about': '<h1>About</h1>',
    '#contact': '<h1>Contact</h1>',
    '/': '<h1>Home</h1>',
    '/about': '<h1>About</h1>',
    '/contact': '<h1>Contact</h1>',

}
// Llave -> valor

if(window.location.pathname === '/'){
    rootMain.innerHTML = linkContent['/'];
}
else if(window.location.pathname === '/about'){
    rootMain.innerHTML = linkContent['/about'];
}
else if(window.location.pathname === '/contact'){
    rootMain.innerHTML = linkContent['/contact'];
}
// console.log(window.location.pathname);
const changeRoute = (hash) => {
    // Cambia la URl para no usar el '#'
    if(hash === '#home'){
        window.history.replaceState({}, 'home', '/');
    }
    if(hash === '#about'){
        window.history.replaceState({}, 'about', '/about');
    }
    if(hash === '#contact'){
        window.history.replaceState({}, 'contact', '/contact');
    }

}

window.addEventListener('hashchange', () => {
    // Location hash cambia el valor de la url de la pag
    if(window.location.hash ==='#about'){
        rootMain.innerHTML = linkContent['#about'];
        changeRoute(window.location.hash)
    }
    else if(window.location.hash ==='#home'){
        rootMain.innerHTML = linkContent['#home'];
        changeRoute(window.location.hash)
    }
    else if(window.location.hash ==='#contact'){
        rootMain.innerHTML = linkContent['#contact'];
        changeRoute(window.location.hash)
    }
})
window.onpopstate=()=>{
    if(window.location.pathname === '/'){
        rootMain.innerHTML = linkContent['/'];
    }else if(window.location.pathname === '/about'){
        rootMain.innerHTML = linkContent['/about'];
    }else if(window.location.pathname === '/contact'){
        rootMain.innerHTML = linkContent['/contact'];
    }
}