(function() {
    function injectNavbar() {
        const mainNav = document.getElementById('main-nav');
        if (mainNav) {
            mainNav.innerHTML = `
    <div class="nav-left">
        <button class="mobile-menu-btn" id="mobile-menu-btn" aria-label="Toggle Menu">
            <span></span>
            <span></span>
            <span></span>
        </button>
        <a href="index.html" class="logo-link">
            <img src="../img/logo.png" alt="roots Logo" class="nav-logo" id="nav-logo">
        </a>
    </div>
    <div class="nav-middle" id="nav-links">
        <a href="index.html#about" data-i18n="about">About us</a>
        <a href="index.html#services" data-i18n="services">Services</a>
        <a href="index.html#technology" data-i18n="why_roots">Technology</a>
        <a href="index.html#contact" data-i18n="contact">Contact us</a>
    </div>
    <div class="nav-right">
        <button id="lang-toggle" class="lang-btn">English</button>
    </div>
            `;
            
            // Highlight active page link if on subpages
            const currentPath = window.location.pathname;
            const links = mainNav.querySelectorAll('.nav-middle a');
            links.forEach(link => {
                const href = link.getAttribute('href');
                if (href && currentPath.endsWith(href)) {
                    link.classList.add('active');
                }
            });
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', injectNavbar);
    } else {
        injectNavbar();
    }
})();
