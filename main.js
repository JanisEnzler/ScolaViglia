 const title = document.querySelector('.title');
 const layer1 = document.querySelector('.layer1');

 document.addEventListener('scroll', function() {
    let value = window.scrollY;

    title.style.marginTop = value * 0.8 + 'px';

    layer1.style.marginBottom = -value * 0.5 + 'px';
 });