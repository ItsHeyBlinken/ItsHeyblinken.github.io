// Example athlete recruiting profile — Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
    try {
        initNavigation();
        initScrollEffects();
        initAnimations();
        initSmoothScrolling();
    } catch (error) {
        console.error('Error initializing main functionality:', error);
    }
});

function initNavigation() {
    const hamburger = document.getElementById('hamburger');
    const mobileNav = document.getElementById('mobile-nav');
    const backdrop = document.getElementById('mobile-nav-backdrop');
    const navbar = document.getElementById('navbar');

    if (!hamburger || !mobileNav) return;

    function setMenuOpen(isOpen) {
        hamburger.classList.toggle('is-open', isOpen);
        hamburger.setAttribute('aria-expanded', String(isOpen));
        hamburger.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');

        mobileNav.classList.toggle('hidden', !isOpen);
        if (isOpen) {
            mobileNav.removeAttribute('hidden');
        } else {
            mobileNav.setAttribute('hidden', '');
        }

        if (backdrop) {
            backdrop.classList.toggle('hidden', !isOpen);
            if (isOpen) {
                backdrop.removeAttribute('hidden');
            } else {
                backdrop.setAttribute('hidden', '');
            }
        }

        document.body.classList.toggle('overflow-hidden', isOpen);
    }

    function closeMenu() {
        setMenuOpen(false);
    }

    function toggleMenu() {
        const willOpen = hamburger.getAttribute('aria-expanded') !== 'true';
        setMenuOpen(willOpen);
    }

    hamburger.addEventListener('click', function(event) {
        event.stopPropagation();
        toggleMenu();
    });

    if (backdrop) {
        backdrop.addEventListener('click', closeMenu);
    }

    mobileNav.querySelectorAll('a[href^="#"]').forEach(function(link) {
        link.addEventListener('click', closeMenu);
    });

    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeMenu();
        }
    });

    window.addEventListener('resize', function() {
        if (window.matchMedia('(min-width: 768px)').matches) {
            closeMenu();
        }
    });

    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.classList.add('shadow-lg', 'bg-white/95');
                navbar.classList.remove('bg-white/90');
            } else {
                navbar.classList.remove('shadow-lg', 'bg-white/95');
                navbar.classList.add('bg-white/90');
            }
        }, { passive: true });
    }
}

function initScrollEffects() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    if (!('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);

    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
}

function initAnimations() {
    const animatedElements = document.querySelectorAll('.hero-text, .hero-image, .about-text, .about-image, .athletics-info, .athletics-images, .academic-stats, .academic-details, .video-gallery, .stats-display, .contact-info, .contact-actions');

    animatedElements.forEach((element) => {
        if (element) {
            element.classList.add('fade-in-up');
        }
    });
}

function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (!targetId || targetId === '#') return;

            const targetSection = document.querySelector(targetId);
            if (!targetSection) return;

            e.preventDefault();
            const navbar = document.getElementById('navbar');
            const offset = navbar ? navbar.offsetHeight : 70;
            const offsetTop = targetSection.getBoundingClientRect().top + window.scrollY - offset;

            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        });
    });
}

function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    if (!images.length || !('IntersectionObserver' in window)) return;

    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

document.addEventListener('DOMContentLoaded', function() {
    initLazyLoading();
});

window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e.error);
});
