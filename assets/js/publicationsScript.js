const navbar = document.querySelector('.navbar');
const toggleButton = document.createElement('button');
toggleButton.textContent = 'Menu';

toggleButton.addEventListener('click', () => {
    navbar.classList.toggle('responsive');
});

navbar.insertBefore(toggleButton, navbar.firstChild);

window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navbar.classList.remove('responsive');
    }
});