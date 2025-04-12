const title = document.querySelector('.title');
const layer1 = document.querySelector('.layer1');




function parallax() {
    const scroll = window.scrollY;
    title.style.transform = `translateY(calc(${scroll * 0.7}px - 20%))`;
    layer1.style.transform = `translateY(${scroll * 0.5}px)`;
}

window.addEventListener('scroll', () => {
    requestAnimationFrame(parallax);
});