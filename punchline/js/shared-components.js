// Shared header and footer components for GitHub Pages
function createHeader(pageType = 'default') {
    // Determine path prefix based on page type
    let pathPrefix = '';
    let title = 'Punchline';
    let showHome = false;
    
    if (pageType === 'subdirectory') {
        pathPrefix = '../';
        showHome = true;
    }
    
    const headerHTML = `
        <nav class="navbar">
            <div class="nav-container">
                <div class="nav-logo">
                    <button class="mobile-menu-toggle" id="mobileMenuToggle" aria-label="Toggle menu">
                        <span class="hamburger-line"></span>
                        <span class="hamburger-line"></span>
                        <span class="hamburger-line"></span>
                    </button>
                    <a class="app-icon-link header" href="${pathPrefix}#download" aria-label="Download on the App Store">
                        <img src="${pathPrefix}images/app-icon-large.png" alt="Punchline app icon">
                    </a>
                    <h1>${title}</h1>
                </div>
                <div class="nav-links">
                    <a href="${pathPrefix}#features">Features</a>
                    <a href="${pathPrefix}#audio-units">AUv3</a>
                    <a href="${pathPrefix}#demo">Demos</a>
                    <a href="${pathPrefix}manual/">Manual</a>
                    <a href="${pathPrefix}kits/">Kits</a>
                    <a href="${pathPrefix}privacy/">Privacy</a>
                    <a class="cta-button" href="${pathPrefix}#download">Download</a>
                </div>
            </div>
            <div class="mobile-menu-dropdown" id="mobileMenuDropdown">
                ${showHome ? `<a href="${pathPrefix}" class="mobile-menu-item">Home</a>` : ''}
                <a href="${pathPrefix}#features" class="mobile-menu-item">Features</a>
                <a href="${pathPrefix}#audio-units" class="mobile-menu-item">AUv3</a>
                <a href="${pathPrefix}#demo" class="mobile-menu-item">Demos</a>
                <a href="${pathPrefix}manual/" class="mobile-menu-item">Manual</a>
                <a href="${pathPrefix}kits/" class="mobile-menu-item">Kits</a>
                <a href="${pathPrefix}privacy/" class="mobile-menu-item">Privacy</a>
                <a href="${pathPrefix}#download" class="mobile-menu-item cta">Download</a>
            </div>
        </nav>
    `;
    
    // Insert header at the beginning of body
    document.body.insertAdjacentHTML('afterbegin', headerHTML);
}

function createFooter(pageType = 'default') {
    // Determine path prefix based on page type
    let pathPrefix = '';
    
    if (pageType === 'subdirectory') {
        pathPrefix = '../';
    }
    
    const footerHTML = `
        <footer class="footer">
            <div class="footer-content">
                <div class="footer-brand">
                    <a class="app-icon-link footer" href="${pathPrefix}${pageType === 'manual' ? '/' : ''}#download" aria-label="Download on the App Store">
                        <img src="${pathPrefix}images/app-icon-large.png" alt="Punchline app icon">
                    </a>
                    <h3>Punchline</h3>
                    <p>Playful iOS drum machine and gate sequencer.</p>
                </div>
                <div class="footer-links">
                    <div class="footer-section">
                        <h4>Product</h4>
                        <a href="${pathPrefix}${pageType === 'manual' ? '/' : ''}#features">Features</a>
                        <a href="${pathPrefix}${pageType === 'manual' ? '/' : ''}#audio-units">AUv3</a>
                        <a href="${pathPrefix}${pageType === 'manual' ? '/' : ''}#demo">Demo</a>
                        <a href="${pathPrefix}manual/">Manual</a>
                        <a href="${pathPrefix}kits/">Kits</a>
                    </div>
                    <div class="footer-section">
                        <h4>Links</h4>
                        <a href="${pathPrefix}testflight/">TestFlight</a>
                        <a href="${pathPrefix}privacy/">Privacy</a>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2024 Punchline. All rights reserved.</p>
                <p style="margin-top: var(--space-sm); color: var(--text-secondary);">
                    Questions? Support? <a href="mailto:punchline@charles.pizza" style="color: #FF932f; text-decoration: underline;">Get in touch!</a>
                </p>
            </div>
        </footer>
    `;
    
    // Insert footer at the end of body
    document.body.insertAdjacentHTML('beforeend', footerHTML);
}

// Mobile menu functionality - shared across all pages
function initializeMobileMenu() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mobileMenuDropdown = document.getElementById('mobileMenuDropdown');
    const mobileMenuItems = document.querySelectorAll('.mobile-menu-item');
    
    console.log('Mobile menu elements:', { mobileMenuToggle, mobileMenuDropdown, itemCount: mobileMenuItems.length });
    
    if (!mobileMenuToggle || !mobileMenuDropdown) {
        console.warn('Mobile menu elements not found', { 
            toggle: !!mobileMenuToggle, 
            dropdown: !!mobileMenuDropdown 
        });
        return;
    }
    
    let isMenuOpen = false;
    
    // Toggle menu
    mobileMenuToggle.addEventListener('click', function(e) {
        console.log('Mobile menu toggle clicked');
        e.stopPropagation();
        isMenuOpen = !isMenuOpen;
        console.log('Menu open state:', isMenuOpen);
        
        if (isMenuOpen) {
            mobileMenuToggle.classList.add('active');
            mobileMenuDropdown.classList.add('active');
            console.log('Added active classes');
        } else {
            mobileMenuToggle.classList.remove('active');
            mobileMenuDropdown.classList.remove('active');
            console.log('Removed active classes');
        }
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (isMenuOpen && !mobileMenuDropdown.contains(e.target) && e.target !== mobileMenuToggle) {
            isMenuOpen = false;
            mobileMenuToggle.classList.remove('active');
            mobileMenuDropdown.classList.remove('active');
        }
    });
    
    // Close menu when clicking menu items
    mobileMenuItems.forEach(item => {
        item.addEventListener('click', function() {
            isMenuOpen = false;
            mobileMenuToggle.classList.remove('active');
            mobileMenuDropdown.classList.remove('active');
        });
    });
    
    // Close menu on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && isMenuOpen) {
            isMenuOpen = false;
            mobileMenuToggle.classList.remove('active');
            mobileMenuDropdown.classList.remove('active');
        }
    });
}

// Initialize components based on page type
function initializeSharedComponents(pageType = 'default') {
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            console.log('DOM loaded, creating components...');
            createHeader(pageType);
            createFooter(pageType);
            // Use setTimeout to ensure DOM elements are fully inserted and rendered
            setTimeout(() => {
                console.log('Initializing mobile menu...');
                initializeMobileMenu();
            }, 0);
        });
    } else {
        console.log('DOM already ready, creating components...');
        createHeader(pageType);
        createFooter(pageType);
        // Use setTimeout to ensure DOM elements are fully inserted and rendered
        setTimeout(() => {
            console.log('Initializing mobile menu...');
            initializeMobileMenu();
        }, 0);
    }
}