window.onload = main;

function main() {
    console.log('loaded');
    addEventListeners();

}
function addEventListeners() {
    const menuBtn = document.getElementById('menuIcon');
    const closeMenu = document.getElementById('closeMenu');
    menuBtn.addEventListener('click', toggleDropdown);

}

function toggleDropdown() {
    console.log('HI');
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