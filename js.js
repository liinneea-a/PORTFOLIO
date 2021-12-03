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
    document.querySelector('#about').classList.add('lightmode');
    document.querySelector('#portfolio').classList.add('lightmode');
    document.querySelector('#contact').classList.add('lightmode');
    document.getElementById('wave-bg-s').classList.add('waves-lightmode');
    document.getElementById('wave-s').classList.add('waves-lightmode');


    // update lightmode in localstorage
    localStorage.setItem('lightMode', 'enabled');

    

};

const disableLightMode = () => {
    // remove class lightmode to wrapper
    document.getElementById('wrapper').classList.remove('lightmode');
    document.querySelector('#about').classList.remove('lightmode');
    document.querySelector('#portfolio').classList.remove('lightmode');
    document.querySelector('#contact').classList.remove('lightmode');
    document.getElementById('wave-bg-s').classList.remove('waves-lightmode');
    document.getElementById('wave-s').classList.remove('waves-lightmode');
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
        // console.log(lightMode);
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
    // toggleMenu.classList.add('hidedropdownmenu');
    toggleMenu.addEventListener('click', hide());

    // toggleMenu.style.display = 'none';
}
function screenLarge() {
    console.log('Large');
}


// function changeBackgroundColorOnScroll() {
    /** Creating an observer */
    // const observer = new IntersectionObserver(entries => {
    //     entries.forEach(entry => {
    //         if (entry.isIntersecting) {
    //             document.body.classList.add('bg-clr-gradientgreen');
    //             console.log(document.body.style.background);
    //         }
    //     });
    // });
    /** Telling observer to track the about-section */
    // observer.observe(document.getElementById('about'));
// }