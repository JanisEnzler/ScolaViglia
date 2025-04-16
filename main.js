const title = document.querySelector('.title');
const layer1 = document.querySelector('.layer1');
const sections = document.querySelectorAll('section');



function parallax() {
    const scroll = window.scrollY;
    title.style.transform = `translateY(calc(${scroll * 0.7}px - 32%))`;
    layer1.style.transform = `translateY(${scroll * 0.5}px)`;
}

window.addEventListener('scroll', () => {
    requestAnimationFrame(parallax);
});


const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

sections.forEach(section => {
    observer.observe(section);
});

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.padding = '10px 0';
    } else {
        header.style.padding = '15px 0';
    }
});