var faBars = document.querySelector("header nav span i");
var navToggle = document.querySelector(".nav-toggle");

faBars.addEventListener("click", buttonClick);

for (i = 0; i < 5; i++) {
    document.querySelectorAll("#nav a")[i].addEventListener("click", buttonClick);
}

function buttonClick() {

    if (faBars.classList.contains("fa-bars")) {
        faBars.classList.remove("fa-bars");
        faBars.classList.add("fa-xmark");
        navToggle.style.setProperty("left", "0");
    }
    else {
        faBars.classList.remove("fa-xmark");
        faBars.classList.add("fa-bars");
        navToggle.style.setProperty("left", "-100%");
    }
}