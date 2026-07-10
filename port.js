// Scroll Reveal Animation
const reveals = document.querySelectorAll('.reveal');

window.addEventListener('scroll', () => {
    reveals.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight - 100) {
            section.classList.add('active');
        }
    });
});

// Contact form alert
document.querySelector('.contact-form')
.addEventListener('submit', e => {
    e.preventDefault();
    alert("Thank you! Your message has been sent.");
});

// Typing animation
const text = "B.E CST Student | Frontend Web Developer";
let index = 0;

function typeEffect() {
    if (index < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 80);
    }
}
typeEffect();
