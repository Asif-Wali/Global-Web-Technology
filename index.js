document.querySelectorAll('.sliderx').forEach(function(slider) {
    slider.addEventListener('click', function() {
        const slides = this.querySelector('.slidesx');
        const currentSlide = this.querySelector('.slide1:first-child');
        const nextSlide = currentSlide.nextElementSibling || slides.firstElementChild;
        const slideWidth = currentSlide.offsetWidth;
        slides.style.transition = 'transform 0.5s ease';
        slides.style.transform = `translateX(-${slideWidth}px)`;
        setTimeout(function() {
            currentSlide.remove();
            slides.appendChild(nextSlide);
            slides.style.transition = 'none';
            slides.style.transform = 'translateX(0)';
            setTimeout(function() {
                slides.style.transition = '';
            });
        }, 500);
    });
});