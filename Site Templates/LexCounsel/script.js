/*
LexCounsel - Professional Law Firm Template
JavaScript functionality
*/

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
            document.body.classList.toggle('menu-open');
            
            // Toggle hamburger icon appearance
            const hamburger = this.querySelector('.hamburger');
            if (hamburger) {
                hamburger.classList.toggle('active');
            }
        });
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (mainNav && mainNav.classList.contains('active')) {
            if (!event.target.closest('.main-nav') && !event.target.closest('.mobile-menu-toggle')) {
                mainNav.classList.remove('active');
                document.body.classList.remove('menu-open');
                
                if (mobileMenuToggle) {
                    const hamburger = mobileMenuToggle.querySelector('.hamburger');
                    if (hamburger) {
                        hamburger.classList.remove('active');
                    }
                }
            }
        }
    });
    
    // Header Scroll Behavior
    const header = document.querySelector('.site-header');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (header) {
            // Add shadow and reduce height on scroll
            if (scrollTop > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
            
            // Hide header on scroll down, show on scroll up
            if (scrollTop > lastScrollTop && scrollTop > 200) {
                header.style.transform = 'translateY(-100%)';
            } else {
                header.style.transform = 'translateY(0)';
            }
            
            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
        }
    });
    
    // Testimonial Slider
    let currentTestimonial = 0;
    const testimonials = document.querySelectorAll('.testimonial-card');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.testimonial-prev');
    const nextBtn = document.querySelector('.testimonial-next');
    
    // Hide all testimonials except the first one
    if (testimonials.length > 0) {
        testimonials.forEach((testimonial, index) => {
            if (index !== 0) {
                testimonial.style.display = 'none';
            }
        });
        
        if (dots.length > 0) {
            dots[0].classList.add('active');
        }
    }
    
    // Function to show testimonial by index
    function showTestimonial(index) {
        testimonials.forEach(testimonial => {
            testimonial.style.display = 'none';
        });
        
        dots.forEach(dot => {
            dot.classList.remove('active');
        });
        
        testimonials[index].style.display = 'block';
        dots[index].classList.add('active');
        currentTestimonial = index;
    }
    
    // Event listeners for dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showTestimonial(index);
        });
    });
    
    // Event listeners for next/prev buttons
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
            showTestimonial(currentTestimonial);
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
            showTestimonial(currentTestimonial);
        });
    }
    
    // Auto rotate testimonials
    let testimonialInterval = setInterval(() => {
        if (testimonials.length > 1) {
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
            showTestimonial(currentTestimonial);
        }
    }, 5000);
    
    // Pause auto rotation on hover
    const testimonialSlider = document.querySelector('.testimonials-slider');
    if (testimonialSlider) {
        testimonialSlider.addEventListener('mouseenter', () => {
            clearInterval(testimonialInterval);
        });
        
        testimonialSlider.addEventListener('mouseleave', () => {
            testimonialInterval = setInterval(() => {
                if (testimonials.length > 1) {
                    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
                    showTestimonial(currentTestimonial);
                }
            }, 5000);
        });
    }
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Close mobile menu if open
                if (mainNav && mainNav.classList.contains('active')) {
                    mainNav.classList.remove('active');
                    document.body.classList.remove('menu-open');
                    
                    if (mobileMenuToggle) {
                        const hamburger = mobileMenuToggle.querySelector('.hamburger');
                        if (hamburger) {
                            hamburger.classList.remove('active');
                        }
                    }
                }
                
                // Calculate header height for offset
                const headerHeight = header ? header.offsetHeight : 0;
                const yOffset = -headerHeight;
                const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
                
                window.scrollTo({ top: y, behavior: 'smooth' });
            }
        });
    });
    
    // Scroll animations
    const animatedElements = document.querySelectorAll('.fade-in, .slide-in-up');
    
    // Initial check for elements in viewport
    checkAnimations();
    
    // Check for elements in viewport on scroll
    window.addEventListener('scroll', checkAnimations);
    
    function checkAnimations() {
        const triggerBottom = window.innerHeight * 0.8;
        
        animatedElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            
            if (elementTop < triggerBottom) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Form validation
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic validation
            let isValid = true;
            const requiredFields = contactForm.querySelectorAll('[required]');
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.classList.add('error');
                } else {
                    field.classList.remove('error');
                }
            });
            
            // Email validation
            const emailField = contactForm.querySelector('input[type="email"]');
            if (emailField && emailField.value.trim()) {
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailPattern.test(emailField.value.trim())) {
                    isValid = false;
                    emailField.classList.add('error');
                }
            }
            
            if (isValid) {
                // In a real implementation, you would send the form data to a server
                // For this template, just show a success message
                const formWrapper = contactForm.closest('.contact-form-container');
                if (formWrapper) {
                    formWrapper.innerHTML = `
                        <div class="form-success">
                            <i class="fas fa-check-circle"></i>
                            <h3>Thank You!</h3>
                            <p>Your message has been sent successfully. We'll get back to you shortly.</p>
                        </div>
                    `;
                }
            }
        });
        
        // Remove error class on input
        contactForm.querySelectorAll('input, textarea, select').forEach(field => {
            field.addEventListener('input', function() {
                this.classList.remove('error');
            });
        });
    }
    
    // Counter animation for stats
    const stats = document.querySelectorAll('.stat-number');
    let statsAnimated = false;
    
    function animateStats() {
        if (statsAnimated) return;
        
        stats.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-target'), 10);
            const duration = 2000; // 2 seconds
            const increment = target / (duration / 16); // Update every 16ms (60fps)
            let current = 0;
            
            const updateCounter = () => {
                current += increment;
                if (current < target) {
                    stat.textContent = Math.ceil(current);
                    requestAnimationFrame(updateCounter);
                } else {
                    stat.textContent = target;
                }
            };
            
            updateCounter();
        });
        
        statsAnimated = true;
    }
    
    // Check if stats are in viewport
    function checkStats() {
        const statsSection = document.querySelector('.about-stats');
        if (!statsSection) return;
        
        const sectionTop = statsSection.getBoundingClientRect().top;
        const triggerBottom = window.innerHeight * 0.8;
        
        if (sectionTop < triggerBottom) {
            animateStats();
            window.removeEventListener('scroll', checkStats);
        }
    }
    
    // Initial check and add scroll listener
    checkStats();
    window.addEventListener('scroll', checkStats);
}); 