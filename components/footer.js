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
                }
            </style>
            <footer>
                <div class="footer-logo">Adullam Mission House</div>
                <p>A Safe Haven for the Broken to Be Restored and Launched</p>
                <p style="margin-top: 1.5rem;">&copy; 2025 Adullam Mission House. All rights reserved.</p>
            </footer>
        `;
    }
}

customElements.define('site-footer', SiteFooter);
