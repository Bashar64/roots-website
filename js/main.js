// Main Application Logic
document.addEventListener('DOMContentLoaded', () => {
    // Initialize mobile menu bindings
    initMobileMenu();

    // Bind language toggler and apply translations
    if (window.initLanguageToggler) {
        window.initLanguageToggler();
    }
    if (window.applyTranslations) {
        window.applyTranslations();
    }

    // Initialize scroll animations
    initScrollAnimations();

    // Contact Form is handled natively via FormSubmit.co
});

// Binds the mobile menu toggler behavior on the injected elements
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.getElementById('nav-links');

    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenuBtn.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close menu when any anchor link is clicked
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuBtn.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }
}

// Initializes scroll animations using Intersection Observer
function initScrollAnimations() {
    const fadeElements = document.querySelectorAll('.fade-animate');
    
    if ('IntersectionObserver' in window) {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    // Optional: stop observing once faded in if you only want it to animate once
                    // observer.unobserve(entry.target);
                } else {
                    // Remove this if you only want to fade in once and stay visible
                    entry.target.classList.remove('visible');
                }
            });
        }, observerOptions);

        fadeElements.forEach(el => observer.observe(el));
    } else {
        // Fallback for older browsers
        fadeElements.forEach(el => el.classList.add('visible'));
    }
}
