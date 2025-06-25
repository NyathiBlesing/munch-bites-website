const slides = document.querySelectorAll('.slide');
const dotsContainer = document.querySelector('.dots');

let index = 0;

// Generate dots dynamically
slides.forEach((_, i) => {
    const dot = document.createElement('span');
    dot.addEventListener('click', () => showSlide(i));
    dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.dots span');

function showSlide(i) {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    slides[i].classList.add('active');
    dots[i].classList.add('active');
    index = i;
}

function nextSlide() {
    index = (index + 1) % slides.length;
    showSlide(index);
}

setInterval(nextSlide, 5000);

showSlide(index); // Show the first slide


