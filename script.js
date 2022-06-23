//background color on navbar on scroll
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
    // console.log(window.scrollY);
    if (window.scrollY >= 50) {
        nav.classList.add('navback');
    }
    else {
        nav.classList.remove('navback');
    }
})

//nav link highlight on scroll
const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('nav ul li');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    })

    navLi.forEach(li => {
        li.classList.remove('active');
        if (li.classList.contains(current)) {
            li.classList.add('active')
        }
    })

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



//menu collapse on menu item click
const menulinks = document.getElementById("menu-link");
const input = document.getElementById("check");

menulinks.addEventListener("click", menu);

function menu(event) {
    if (event.target instanceof HTMLAnchorElement) {
        input.checked = false;
    }
}



//send email from contact form
function sendEmail() {
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "joeyatteen@gmail.com",
        Password: "DB01DA3B5556CEF9A59EF866E3998FCCDF52",
        To: "desby20@gmail.com",
        From: document.getElementById("email").value,
        Subject: "Message from " + document.getElementById("name").value + " via your website",
        Body: "Phone number: " + document.getElementById("phone").value + "<br>" + document.getElementById("message").value
    }).then(
        message => alert("Message sent successfully!")
    );
} 