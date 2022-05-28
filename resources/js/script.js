let mainNav = document.getElementById("mainNav");
let features = document.getElementById("features");
let navPosition = mainNav.getBoundingClientRect().top;


window.addEventListener("scroll", e => {
    let scrollPosition = window.scrollY;
    if(scrollPosition > navPosition) {
        mainNav.classList.add('sticky');
    } else {
        mainNav.classList.remove("sticky");
    }
});

