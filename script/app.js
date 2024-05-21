document.getElementById("headerIconToggle").addEventListener("click", myFunction);
function myFunction() {
    var element = document.getElementById("headerAll");
    var overlay = document.getElementById("labOverlay");
    element.classList.toggle("header-show");
    overlay.classList.toggle("lab-overlay-show");
}