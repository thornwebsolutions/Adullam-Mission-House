// Site Footer Web Component
// Reusable footer with pebble texture pattern

class SiteFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <style>
                /* Footer Styles */
                footer {
                    background: #5C4033;
                    color: #E8DDD4;
                    padding: 3rem 2rem;
                    text-align: center;
                    position: relative;
                }

                footer::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3C!-- Pebble pattern --%3E%3Cellipse cx='15' cy='12' rx='8' ry='6' fill='%234A3528' opacity='0.6'/%3E%3Cellipse cx='14' cy='11' rx='6' ry='4' fill='%235C4033' opacity='0.4'/%3E%3Cellipse cx='45' cy='8' rx='10' ry='7' fill='%234A3528' opacity='0.5'/%3E%3Cellipse cx='44' cy='7' rx='7' ry='5' fill='%236B5D52' opacity='0.3'/%3E%3Cellipse cx='78' cy='15' rx='12' ry='8' fill='%234A3528' opacity='0.6'/%3E%3Cellipse cx='77' cy='14' rx='9' ry='6' fill='%235C4033' opacity='0.4'/%3E%3Cellipse cx='8' cy='35' rx='7' ry='5' fill='%234A3528' opacity='0.5'/%3E%3Cellipse cx='32' cy='28' rx='9' ry='6' fill='%234A3528' opacity='0.6'/%3E%3Cellipse cx='31' cy='27' rx='6' ry='4' fill='%236B5D52' opacity='0.3'/%3E%3Cellipse cx='60' cy='32' rx='11' ry='7' fill='%234A3528' opacity='0.5'/%3E%3Cellipse cx='59' cy='31' rx='8' ry='5' fill='%235C4033' opacity='0.4'/%3E%3Cellipse cx='88' cy='38' rx='8' ry='6' fill='%234A3528' opacity='0.6'/%3E%3Cellipse cx='20' cy='55' rx='10' ry='7' fill='%234A3528' opacity='0.5'/%3E%3Cellipse cx='19' cy='54' rx='7' ry='5' fill='%235C4033' opacity='0.4'/%3E%3Cellipse cx='48' cy='52' rx='8' ry='5' fill='%234A3528' opacity='0.6'/%3E%3Cellipse cx='75' cy='58' rx='9' ry='6' fill='%234A3528' opacity='0.5'/%3E%3Cellipse cx='74' cy='57' rx='6' ry='4' fill='%236B5D52' opacity='0.3'/%3E%3Cellipse cx='95' cy='55' rx='7' ry='5' fill='%234A3528' opacity='0.5'/%3E%3Cellipse cx='12' cy='78' rx='9' ry='6' fill='%234A3528' opacity='0.6'/%3E%3Cellipse cx='11' cy='77' rx='6' ry='4' fill='%235C4033' opacity='0.4'/%3E%3Cellipse cx='38' cy='75' rx='11' ry='8' fill='%234A3528' opacity='0.5'/%3E%3Cellipse cx='37' cy='74' rx='8' ry='6' fill='%236B5D52' opacity='0.3'/%3E%3Cellipse cx='65' cy='80' rx='8' ry='5' fill='%234A3528' opacity='0.6'/%3E%3Cellipse cx='90' cy='78' rx='10' ry='7' fill='%234A3528' opacity='0.5'/%3E%3Cellipse cx='89' cy='77' rx='7' ry='5' fill='%235C4033' opacity='0.4'/%3E%3Cellipse cx='5' cy='95' rx='6' ry='4' fill='%234A3528' opacity='0.5'/%3E%3Cellipse cx='55' cy='92' rx='7' ry='5' fill='%234A3528' opacity='0.6'/%3E%3Cellipse cx='82' cy='95' rx='9' ry='6' fill='%234A3528' opacity='0.5'/%3E%3C/svg%3E");
                    background-repeat: repeat;
                    background-size: 150px 150px;
                    opacity: 0.8;
                    pointer-events: none;
                    z-index: 0;
                }

                footer > * {
                    position: relative;
                    z-index: 1;
                }

                .footer-logo {
                    font-family: 'Cormorant Garamond', serif;
                    font-size: 1.5rem;
                    color: #FFFFFF;
                    margin-bottom: 1rem;
                    text-shadow: 0 1px 3px rgba(0,0,0,0.3);
                }

                footer p {
                    font-size: 0.9rem;
                    color: #F5F0EB;
                    opacity: 1;
                    text-shadow: 0 1px 2px rgba(0,0,0,0.2);
                    margin: 0;
                }

                footer a {
                    color: #7A9A6B;
                    text-decoration: none;
                    transition: color 0.3s ease;
                }

                footer a:hover {
                    color: #A8C4A2;
                }

                .footer-credit {
                    margin-top: 1rem;
                    font-size: 0.85rem;
                }

                .footer-credit a {
                    color: #F5F0EB;
                }

                .footer-credit a:hover {
                    color: #7A9A6B;
                }

                .footer-social {
                    display: flex;
                    justify-content: center;
                    gap: 1.5rem;
                    margin: 1.5rem 0;
                }

                .footer-social a {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 40px;
                    height: 40px;
                    color: #7A9A6B;
                    transition: color 0.3s ease, transform 0.3s ease;
                }

                .footer-social a:hover {
                    color: #A8C4A2;
                    transform: translateY(-2px);
                }

                .footer-social svg {
                    width: 24px;
                    height: 24px;
                }
            </style>
            <footer>
                <div class="footer-logo">Adullam Mission House</div>
                <p>A Safe Haven for the Broken to Be Restored and Launched</p>
                <div class="footer-social">
                    <a href="https://www.youtube.com/@amissionhouse" target="_blank" rel="noopener" aria-label="YouTube">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                        </svg>
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=61584625065551&sk=about" target="_blank" rel="noopener" aria-label="Facebook">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                    </a>
                    <a href="https://www.instagram.com/amhcolumbia/" target="_blank" rel="noopener" aria-label="Instagram">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                        </svg>
                    </a>
                    <a href="https://www.tiktok.com/@amhcolumbia" target="_blank" rel="noopener" aria-label="TikTok">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                        </svg>
                    </a>
                </div>
                <p class="footer-credit" style="margin-top: 1.5rem;">
                    &copy; 2025 Adullam Mission House. All rights reserved. | <a href="https://thornwebsolutions.com" target="_blank" rel="noopener">Website by Thorn Web Solutions</a>
                </p>
            </footer>

            <!-- Calendly Modal -->
            <div id="calendlyModal" class="modal-overlay">
                <div class="modal-content">
                    <button class="modal-close" aria-label="Close">&times;</button>
                    <div class="calendly-inline-widget"
                         data-url="https://calendly.com/amissionhouse/emotional-wellness-ready-set-go?primary_color=8dcfa5&hide_landing_page_details=1"
                         style="min-width:320px;height:700px;">
                    </div>
                </div>
            </div>
        `;

        // Load Calendly widget script if not already loaded
        if (!document.querySelector('script[src*="calendly.com"]')) {
            const script = document.createElement('script');
            script.src = 'https://assets.calendly.com/assets/external/widget.js';
            script.async = true;
            document.head.appendChild(script);
        }
    }
}

customElements.define('site-footer', SiteFooter);
