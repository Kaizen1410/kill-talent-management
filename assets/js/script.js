const collapse = () => {
    const navbarCollapse = document.querySelector('#navbar-collapse');
    const height = navbarCollapse.style.height;

    if(height === '0px') {
        navbarCollapse.style.height = 'fit-content'
    } else {
        navbarCollapse.style.height = 0
    }
}