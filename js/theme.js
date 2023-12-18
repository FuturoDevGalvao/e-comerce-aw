const themeButton = document.querySelector(".theme-button");
const themeButtonIcon = document.querySelector(".theme-button img");
const logo = document.getElementById("logo");

themeButton.addEventListener("click", () => {
  const pathIcon = themeButtonIcon.getAttribute("src");
  const pathLogo = logo.getAttribute("src");

  themeButtonIcon.src = pathIcon.includes("../img/sun_icon.svg")
    ? "../img/eclipse_icon.svg"
    : "../img/sun_icon.svg";

  logo.src = pathLogo.includes("../img/logo-white-theme.png")
    ? "../img/logo-dark-theme.png"
    : "../img/logo-white-theme.png";

  document.querySelector("html").classList.toggle("dark");
});
