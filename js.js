/** Starts function main when page is loaded */
window.addEventListener("load", main);

/** creates variable for local storage and light toggle button */
let lightMode = localStorage.getItem("lightMode");
const lightModeToggle = document.querySelector("#toggleLightMode");

/**  */
function main() {
  /** Checks if lightmode is enabled when page loads */
  if (lightMode === "enabled") {
    enableLightMode();
  }
}

/**  adds onclick for dropdown menu */
function addEventListeners() {
  const menuBtn = document.getElementById("menuIcon");
  menuBtn.addEventListener("click", toggleDropdown);
  const desktopMenu = document.querySelector("header");
  document.body.addEventListener("wheel", () => {
    desktopMenu.classList.add("scroll");
    const aboutPage = document.getElementById("about");
    if (aboutPage.scrollIntoView) {
      document.body.classList.add("clr-scroll-change");
    }
  });
  document.getElementById("musical-span").addEventListener("mouseenter", () => {
    showMusicalsDiv();
  });
}

/** if menu button is clicked (on small screen) menu drop down is shown */
function toggleDropdown() {
  const toggleMenu = document.getElementById("toggleMenu");
  const openMenu = document.getElementById("openMenu");
  const closeMenu = document.getElementById("closeMenu");

  toggleMenu.style.display = "unset";

  closeMenu.onclick = closeDropDown;
}
/** closes menu drop down */
function closeDropDown() {
  const closeMenu = document.getElementById("closeMenu");
  const toggleMenu = document.getElementById("toggleMenu");
  toggleMenu.style.display = "none";
}

/** changes lightmode by checking in local storage if lightmode is enabled
 * to trigger right function
 */
lightModeToggle.addEventListener("click", () => {
  lightMode = localStorage.getItem("lightMode");
  if (lightMode !== "enabled") {
    enableLightMode();
  } else {
    disableLightMode();
  }
});

/** Changes page to lightmode by adding class .lightmode on elements */
const enableLightMode = () => {
  document.body.classList.add("lightmode");
  document.querySelector("#wrapper").classList.add("lightmode");
  document.querySelector("div.first-page").classList.add("lightmode");
  document.querySelector("#about").classList.add("lightmode");
  document.querySelector("#portfolio").classList.add("lightmode");
  document.querySelector("#contact").classList.add("lightmode");
  document.getElementById("wave-bg-s").classList.add("waves-lightmode");
  document.getElementById("wave-s").classList.add("waves-lightmode");

  /**Updating lightmode to enabled in LS */
  localStorage.setItem("lightMode", "enabled");
};

/** Enables lightmode by removing class .lightmode on elements */
const disableLightMode = () => {
  document.body.classList.remove("lightmode");
  document.getElementById("wrapper").classList.remove("lightmode");
  document.querySelector("div.first-page").classList.remove("lightmode");
  document.querySelector("#about").classList.remove("lightmode");
  document.querySelector("#portfolio").classList.remove("lightmode");
  document.querySelector("#contact").classList.remove("lightmode");
  document.getElementById("wave-bg-s").classList.remove("waves-lightmode");
  document.getElementById("wave-s").classList.remove("waves-lightmode");

  /** Updates lightmode to null in LS */
  localStorage.setItem("lightMode", null);
};
