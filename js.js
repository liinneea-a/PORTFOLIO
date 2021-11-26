window.onload = main;


/*----ToggleLightMode-----*/
let lightMode = localStorage.getItem('lightMode');
const lightModeToggle = document.querySelector('#toggleLightMode');


//check if LM is enabled
// if yes = turn it off
// if disabled = turn it on

const enableLightMode = () => {
    // add class lightmode to wrapper
    document.querySelector('#wrapper').classList.add('lightmode');
    // update lightmode in localstorage
    localStorage.setItem('lightMode', 'enabled'); 
};

const disableLightMode = () => {
    // remove class lightmode to wrapper
    document.getElementById('wrapper').classList.remove('lightmode');
    // update lightmode in localstorage
    localStorage.setItem('lightMode', null);
};

if (lightMode === 'enabled') {
    enableLightMode();
}

lightModeToggle.addEventListener('click', () => {
    lightMode = localStorage.getItem('lightMode');
    if (lightMode !== 'enabled') {
        enableLightMode();
        console.log(lightMode);
    } else {
        disableLightMode();
    }
});

/*---------------------*/

function main() {
    addEventListeners();

}
function addEventListeners() {
    const menuBtn = document.getElementById('menuIcon');
    const closeMenu = document.getElementById('closeMenu');
  
    menuBtn.addEventListener('click', toggleDropdown);
} 

function toggleDropdown() {
    const toggleMenu = document.getElementById('toggleMenu');
    const openMenu = document.getElementById('openMenu');
    const closeMenu = document.getElementById('closeMenu');
    
    toggleMenu.style.display = 'unset';

    closeMenu.onclick = closeDropDown;
}
function closeDropDown() {
    const toggleMenu = document.getElementById('toggleMenu');
    toggleMenu.style.display = 'none';
}