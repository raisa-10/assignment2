// Hamburger menu toggle
const hamburger = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('showing'); // overlay menu slides in/out
  hamburger.classList.toggle('active'); // animate bars into X
});

// Slider functionality
const sliderImages = document.getElementById('sliderImages');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let index = 0;
const totalImages = sliderImages.children.length;

function updateSlider() {
  sliderImages.style.transform = `translateX(${-index * 100}vw)`;
}

prevBtn.addEventListener('click', () => {
  index = index === 0 ? totalImages - 1 : index - 1;
  updateSlider();
});

nextBtn.addEventListener('click', () => {
  index = index === totalImages - 1 ? 0 : index + 1;
  updateSlider();
});
