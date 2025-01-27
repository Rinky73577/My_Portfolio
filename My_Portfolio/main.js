var typed = new Typed(".text", {
    strings: ["UI/UX Designer","Frontend Developer"],
    typeSpeed: 100,
    backSpeed:100,
    backDelay: 1000,
    loop: true
})


let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                // document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
                document.querySelector(`header nav a[href*="${id}"]`).classList.add('active');
            });
        }
    });
};


// // Get the toggle button and navbar
// const menuIcon = document.getElementById("menu-icon");
// const navbar = document.querySelector(".navbar");

// // Add event listener to toggle the navbar visibility
// menuIcon.addEventListener("click", () => {
//     console.log('hh')
//     navbar.classList.toggle("show");
// });
function toggleMenu() {
    const navbar = document.querySelector(".navbar");
    navbar.classList.toggle("show");
}



