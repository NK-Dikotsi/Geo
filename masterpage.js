// Load navbar
document.getElementById('navbar-container').innerHTML = `
    <nav class="navbar">
        <div class="navbar-logo-container">
            <a href="#">
                <img src="images/logoblack.png" alt="GeoCarRental Logo" class="navbar-logo">
            </a>
        </div>
        
        <button class="menu-toggle" id="menuToggle">
            <i class="fas fa-bars"></i>
        </button>
        
        <div class="nav-links" id="navLinks">
            <a href="#" class="auth-button">Log In</a>
            <a href="#" class="auth-button">Sign Up</a>
            <a href="#" class="host-button">Become a Host</a>
        </div>
    </nav>
`;

// Load footer
document.getElementById('footer-container').innerHTML = `
    <footer class="footer">
        <div class="footer-container">
            <div class="footer-col">
                <div class="footer-logo-container">
                    <img src="images/logowhite.png" alt="GeoCarRental Logo" class="footer-logo">
                </div>
                <p style="color: #b0b0b0; font-size: 0.9rem; margin-bottom: 1.5rem;">
                    Rent unique vehicles from local hosts or earn money by sharing your car.
                </p>
                <div class="social-links">
                    <a href="#" class="social-link"><i class="fab fa-facebook-f"></i></a>
                    <a href="#" class="social-link"><i class="fab fa-instagram"></i></a>
                    <a href="#" class="social-link"><i class="fab fa-linkedin-in"></i></a>
                </div>
            </div>
            
            <div class="footer-col">
                <h3 class="footer-heading">Company</h3>
                <ul class="footer-links">
                    <li class="footer-link"><a href="#">About Us</a></li>
                    <li class="footer-link"><a href="#">How it Works</a></li>
                </ul>
            </div>
            
            <div class="footer-col">
                <h3 class="footer-heading">Hosting</h3>
                <ul class="footer-links">
                    <li class="footer-link"><a href="#">Why Host</a></li>
                    <li class="footer-link"><a href="#">Hosting Resources</a></li>
                    <li class="footer-link"><a href="#">Safety</a></li>
                    <li class="footer-link"><a href="#">Community</a></li>
                </ul>
            </div>
            
            <div class="footer-col">
                <h3 class="footer-heading">Support</h3>
                <ul class="footer-links">
                    <li class="footer-link"><a href="#">Help Center</a></li>
                    <li class="footer-link"><a href="#">Contact Us</a></li>
                    <li class="footer-link"><a href="#">Trust & Safety</a></li>
                    <li class="footer-link"><a href="#">FAQs</a></li>
                </ul>
            </div>
        </div>
        
        <div class="footer-bottom">
            <p class="copyright">Copyright © 2025 Geo . All rights reserved.</p>
            <div class="legal-links">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
            </div>
        </div>
    </footer>
`;

// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
                if (window.innerWidth <= 768) {
                    navLinks.classList.remove('active');
                }
            }
        });
    }
});