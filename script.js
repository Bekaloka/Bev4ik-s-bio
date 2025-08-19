document.addEventListener('DOMContentLoaded', function() {
    const slideInElements = document.querySelectorAll('.slide-in-left, .slide-in-right');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    slideInElements.forEach(element => {
        observer.observe(element);
    });
});
