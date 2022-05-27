//background color on navbar on scroll
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
    console.log(window.scrollY);
    if (window.scrollY >= 50) {
        nav.classList.add('navback');
    }
    else {
        nav.classList.remove('navback');
    }
})


//top page button
mybutton = document.getElementById("my-btn");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 175 || document.documentElement.scrollTop > 175) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}