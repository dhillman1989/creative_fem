const hamburger = document.querySelector("#hamburger");
const menu = document.querySelector("#menu");

let hamburgerActive = false; 
hamburger.addEventListener("click", () => {
    menu.classList.toggle("dd-visible");
    hamburgerActive = !hamburgerActive;
    if (hamburgerActive) {
        hamburger.src = "./assets/mobile/icon-cross.svg";
    } else {
        hamburger.src = "./assets/mobile/icon-hamburger.svg";
    }
    
});

