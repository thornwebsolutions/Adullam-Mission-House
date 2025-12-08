// Site Header Web Component
// Reusable navigation with mobile hamburger menu

class SiteHeader extends HTMLElement {
    connectedCallback() {
        // Get current page path for active link highlighting
        const currentPath = window.location.pathname;
        const isHomePage = currentPath === '/' || currentPath === '/index.html';
        const isBlogPage = currentPath.includes('/blog');

        this.innerHTML = `
            <nav>
                <div class="nav-container">
                    <a href="/" class="nav-logo">Adullam Mission House</a>
                    <ul class="nav-links">
                        ${isHomePage ? `
                        <li><a href="#about">About</a></li>
                        <li><a href="#mission">Mission</a></li>
                        <li><a href="#values">Values</a></li>
                        <li><a href="#programs">Programs</a></li>
                        <li><a href="#blog">Blog</a></li>
                        <li><a href="#contact">Contact</a></li>
                        ` : `
                        <li><a href="/">Home</a></li>
                        <li><a href="/#about">About</a></li>
                        <li><a href="/#mission">Mission</a></li>
                        <li><a href="/blog"${isBlogPage ? ' class="active"' : ''}>Blog</a></li>
                        <li><a href="/#contact">Contact</a></li>
                        `}
                    </ul>
                    <div class="mobile-menu" aria-label="Toggle navigation menu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </nav>
        `;

        // Initialize mobile menu functionality
        this.initMobileMenu();
    }

    initMobileMenu() {
        const mobileMenu = this.querySelector('.mobile-menu');
        const navLinks = this.querySelector('.nav-links');

        if (mobileMenu && navLinks) {
            mobileMenu.addEventListener('click', () => {
                mobileMenu.classList.toggle('active');
                navLinks.classList.toggle('active');
            });

            // Close menu when a link is clicked
            navLinks.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    mobileMenu.classList.remove('active');
                    navLinks.classList.remove('active');
                });
            });
        }

        // Smooth scroll for anchor links on homepage
        if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
            this.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                });
            });
        }
    }
}

customElements.define('site-header', SiteHeader);
