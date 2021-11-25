window.onload = main;

function main() {
    console.log('loaded');
    addEventListeners();

}
function addEventListeners() {
    const menuBtn = document.getElementById('menuIcon');
    menuBtn.addEventListener('click', showDropDown);
}
function showDropDown() {
    console.log('HI');
}