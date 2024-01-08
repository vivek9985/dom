const menuDisplay = () => {
    let mainMenu = document.getElementById('main-menu');
    let mainIcon = document.getElementById('menu-icon');
    if (mainMenu.style.display == "block" && mainIcon.style.filter == 'invert(1)') {
        mainMenu.style.display = "none";
        mainIcon.style.filter = 'invert(0)';
    } else {
        mainMenu.style.display = "block";
        mainIcon.style.filter = 'invert(1)';
    }
};


