// Toggle Navigation
const navToggle = document.querySelector('.nav-toggle');
navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Theme Toggle
const themeToggle = document.querySelector('#theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light');
});

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-theme');
    }
});

// Lazy Loading Images
const lazyImages = document.querySelectorAll('.lazy');
const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            observer.unobserve(img);
        }
    });
});

lazyImages.forEach(image => imageObserver.observe(image));

// Back to Top Button
const backToTop = document.querySelector('#back-to-top');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
