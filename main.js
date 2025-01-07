const title = document.querySelector('.title');
const layer1 = document.querySelector('.layer1');
const car = document.querySelector('.car');
const carY = car.getBoundingClientRect().bottom;

document.addEventListener('scroll', function () {
   let value = window.scrollY;

   // Y position of the car relative to the top of the page
   title.style.marginTop = value * 0.8 + 'px';

   layer1.style.marginBottom = -value * 0.5 + 'px';
   car.style.marginLeft = -(value - carY) * 0.5 + 'px';
   car.style.marginBottom = -(value - carY) * 0.1 + 'px';
});