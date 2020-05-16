var myModal = document.querySelector(".popup");
var trigger = document.querySelector(".push");
var exit = document.querySelector(".exit");

function modalToggle() {
    myModal.classList.toggle("show-popup");
}

function windowOnClick(event) {
    if (event.target === myModal) {
        modalToggle();
    }
}

trigger.addEventListener("click", modalToggle);
exit.addEventListener("click", modalToggle);
window.addEventListener("click", windowOnClick);
