// ShopSmart Template JavaScript

document.addEventListener('DOMContentLoaded', () => {
    // --- Mobile Menu Toggle ---
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const body = document.body;

    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', () => {
            body.classList.toggle('menu-open');
            // Prevent scrolling when menu is open
            if (body.classList.contains('menu-open')) {
                document.documentElement.style.overflow = 'hidden';
            } else {
                document.documentElement.style.overflow = '';
            }
        });
    }

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (body.classList.contains('menu-open') &&
            !e.target.closest('.nav-container') &&
            !e.target.closest('.mobile-menu-toggle')) {
            body.classList.remove('menu-open');
            document.documentElement.style.overflow = '';
        }
    });

    // Mobile Dropdown Toggle
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            // Only handle click for mobile view
            if (window.innerWidth <= 768) {
                e.preventDefault();
                const dropdown = toggle.closest('.dropdown');
                dropdown.classList.toggle('open');
            }
        });
    });

    // --- Theme Toggle ---
    const themeToggleButton = document.getElementById('theme-toggle-button');
    const currentTheme = localStorage.getItem('shopsmart-theme');

    // Apply saved theme on load
    if (currentTheme === 'dark') {
        body.classList.add('dark-theme');
    } else {
        // Default is light, ensure dark class is not present
        body.classList.remove('dark-theme');
    }

    // Toggle theme on button click
    if (themeToggleButton) {
        themeToggleButton.addEventListener('click', () => {
            body.classList.toggle('dark-theme');

            // Save preference
            if (body.classList.contains('dark-theme')) {
                localStorage.setItem('shopsmart-theme', 'dark');
            } else {
                localStorage.setItem('shopsmart-theme', 'light');
            }
        });
    }

    // --- Hero Carousel Functionality ---
    const carousel = document.querySelector('.hero-carousel');
    if (carousel) {
        const slides = carousel.querySelectorAll('.carousel-slide');
        const prevButton = carousel.querySelector('.prev');
        const nextButton = carousel.querySelector('.next');
        const indicators = carousel.querySelectorAll('.indicator');
        let currentSlide = 0;
        let slideInterval;
        const intervalTime = 5000; // Time between auto-slides (5 seconds)

        // Function to show a specific slide
        const showSlide = (index) => {
            // Hide all slides
            slides.forEach(slide => slide.classList.remove('active'));
            indicators.forEach(indicator => indicator.classList.remove('active'));

            // Show the selected slide
            slides[index].classList.add('active');
            indicators[index].classList.add('active');
            currentSlide = index;
        };

        // Event listeners for controls
        if (prevButton) {
            prevButton.addEventListener('click', () => {
                clearInterval(slideInterval); // Reset interval on manual navigation
                currentSlide = (currentSlide === 0) ? slides.length - 1 : currentSlide - 1;
                showSlide(currentSlide);
                startSlideInterval(); // Restart interval
            });
        }

        if (nextButton) {
            nextButton.addEventListener('click', () => {
                clearInterval(slideInterval); // Reset interval on manual navigation
                currentSlide = (currentSlide === slides.length - 1) ? 0 : currentSlide + 1;
                showSlide(currentSlide);
                startSlideInterval(); // Restart interval
            });
        }

        // Add click events to indicators
        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                clearInterval(slideInterval); // Reset interval on manual navigation
                showSlide(index);
                startSlideInterval(); // Restart interval
            });
        });

        // Function to start automatic sliding
        const startSlideInterval = () => {
            slideInterval = setInterval(() => {
                currentSlide = (currentSlide === slides.length - 1) ? 0 : currentSlide + 1;
                showSlide(currentSlide);
            }, intervalTime);
        };

        // Start the carousel
        startSlideInterval();

        // Pause carousel on hover (optional)
        carousel.addEventListener('mouseenter', () => {
            clearInterval(slideInterval);
        });

        carousel.addEventListener('mouseleave', () => {
            startSlideInterval();
        });
    }

    // --- Product Detail Page: Image Gallery ---
    const mainImage = document.getElementById('main-product-image');
    const thumbnails = document.querySelectorAll('.thumbnail');

    if (mainImage && thumbnails.length > 0) {
        thumbnails.forEach(thumbnail => {
            thumbnail.addEventListener('click', () => {
                // Update the main image source
                mainImage.src = thumbnail.src.replace(/w=\d+/g, 'w=1480'); // Replace width parameter for Unsplash images

                // Update the alt text (optional)
                mainImage.alt = thumbnail.alt.replace('Thumbnail', 'Main Image');

                // Update active state for thumbnails
                thumbnails.forEach(t => t.classList.remove('active'));
                thumbnail.classList.add('active');
            });

            // Preload large images on hover (optional)
            thumbnail.addEventListener('mouseover', () => {
                const largeImageSrc = thumbnail.src.replace(/w=\d+/g, 'w=1480');
                if (largeImageSrc) {
                    const img = new Image();
                    img.src = largeImageSrc;
                }
            });
        });
    }

    // --- Product Detail Page: Color Options ---
    const colorOptions = document.querySelectorAll('.color-option');
    if (colorOptions.length > 0) {
        colorOptions.forEach(option => {
            option.addEventListener('click', () => {
                // Remove active class from all options
                colorOptions.forEach(opt => opt.classList.remove('active'));
                // Add active class to clicked option
                option.classList.add('active');
                // You could also update product image or other elements based on color
                const selectedColor = option.getAttribute('data-color');
                console.log('Selected color:', selectedColor);

                // Show toast notification
                showToast(`${selectedColor.charAt(0).toUpperCase() + selectedColor.slice(1)} color selected`);
            });
        });
    }

    // --- Product Detail Page: Wishlist Button ---
    const productWishlistBtn = document.querySelector('.product-wishlist');
    if (productWishlistBtn) {
        productWishlistBtn.addEventListener('click', function() {
            this.classList.toggle('active');

            if (this.classList.contains('active')) {
                this.style.color = '#ef4444'; // Red heart
                showToast('Product added to wishlist!');
            } else {
                this.style.color = ''; // Reset to default
                showToast('Product removed from wishlist!');
            }
        });
    }

    // --- Quick View Functionality ---
    const quickViewButtons = document.querySelectorAll('.quick-view-btn');
    const quickViewModal = document.getElementById('quick-view-modal');
    const modalClose = document.getElementById('modal-close');
    const modalProductImage = document.getElementById('modal-product-image');
    const modalProductTitle = document.getElementById('modal-product-title');
    const modalProductPrice = document.getElementById('modal-product-price');
    const modalProductRating = document.getElementById('modal-product-rating');
    const modalProductDescription = document.getElementById('modal-product-description');
    const viewDetailsButton = document.querySelector('.view-details-button');

    // Sample product data (in a real app, this would come from a database or API)
    const productData = {
        1: {
            title: "Men's Graphic Tee",
            price: "$29.99",
            image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
            rating: 4,
            reviewCount: 42,
            description: "This comfortable and stylish graphic tee is perfect for everyday wear. Made from 100% organic cotton with a relaxed fit and unique design. Available in multiple colors and sizes."
        },
        2: {
            title: "Classic Leather Watch",
            price: "$149.50",
            image: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
            rating: 5,
            reviewCount: 28,
            description: "Elevate your style with this timeless Classic Leather Watch. Featuring a genuine leather strap, stainless steel case, and precise quartz movement. Water-resistant up to 30m. Perfect for both casual and formal occasions."
        },
        3: {
            title: "Ceramic Coffee Mug",
            price: "$15.00",
            image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
            rating: 4,
            reviewCount: 56,
            description: "Start your morning right with this premium ceramic coffee mug. Holds 12oz of your favorite beverage and features a comfortable handle. Microwave and dishwasher safe. Makes a perfect gift for coffee lovers."
        },
        4: {
            title: "Trail Running Shoes",
            price: "<span class='original-price'>$99.99</span> $85.75",
            image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
            rating: 5,
            reviewCount: 19,
            description: "Conquer any trail with these durable and comfortable running shoes. Features include enhanced grip, water-resistant materials, and cushioned support for long-distance comfort. Available in multiple colors and sizes."
        }
    };

    // Open modal with product data
    if (quickViewButtons.length > 0 && quickViewModal) {
        quickViewButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const productId = button.getAttribute('data-product');
                const product = productData[productId];

                if (product) {
                    // Populate modal with product data
                    modalProductImage.src = product.image;
                    modalProductImage.alt = product.title;
                    modalProductTitle.textContent = product.title;
                    modalProductPrice.innerHTML = product.price;

                    // Generate stars based on rating
                    const starsElement = modalProductRating.querySelector('.stars');
                    const ratingCountElement = modalProductRating.querySelector('.rating-count');

                    if (starsElement && ratingCountElement) {
                        let starsHTML = '';
                        for (let i = 1; i <= 5; i++) {
                            if (i <= product.rating) {
                                starsHTML += '★';
                            } else {
                                starsHTML += '<span class="empty-star">★</span>';
                            }
                        }
                        starsElement.innerHTML = starsHTML;
                        ratingCountElement.textContent = `(${product.reviewCount})`;
                    }

                    modalProductDescription.textContent = product.description;

                    // Show modal
                    quickViewModal.classList.add('active');
                    document.body.style.overflow = 'hidden'; // Prevent scrolling

                    // Set up view details button
                    if (viewDetailsButton) {
                        viewDetailsButton.addEventListener('click', () => {
                            window.location.href = 'product-detail.html';
                        });
                    }
                }
            });
        });
    }

    // Close modal
    if (modalClose && quickViewModal) {
        modalClose.addEventListener('click', () => {
            quickViewModal.classList.remove('active');
            document.body.style.overflow = ''; // Restore scrolling
        });

        // Close when clicking outside the modal content
        quickViewModal.addEventListener('click', (e) => {
            if (e.target === quickViewModal) {
                quickViewModal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });

        // Close on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && quickViewModal.classList.contains('active')) {
                quickViewModal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

    // Quantity Controls
    const quantityControls = document.querySelectorAll('.quantity-controls');

    if (quantityControls.length > 0) {
        quantityControls.forEach(control => {
            const minusBtn = control.querySelector('.minus');
            const plusBtn = control.querySelector('.plus');
            const input = control.querySelector('input');

            if (minusBtn && plusBtn && input) {
                minusBtn.addEventListener('click', () => {
                    const currentValue = parseInt(input.value);
                    if (currentValue > 1) {
                        input.value = currentValue - 1;
                    }
                });

                plusBtn.addEventListener('click', () => {
                    const currentValue = parseInt(input.value);
                    input.value = currentValue + 1;
                });

                // Prevent manual entry of invalid values
                input.addEventListener('change', () => {
                    if (input.value < 1) {
                        input.value = 1;
                    }
                });
            }
        });
    }

    // --- Wishlist Functionality ---
    const wishlistButtons = document.querySelectorAll('.wishlist-btn');

    if (wishlistButtons.length > 0) {
        wishlistButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Toggle active state
                this.classList.toggle('active');

                // Visual feedback
                if (this.classList.contains('active')) {
                    this.style.color = '#ef4444'; // Red heart when active
                    // Show toast notification
                    showToast('Product added to wishlist!');
                } else {
                    this.style.color = ''; // Reset to default color
                    showToast('Product removed from wishlist!');
                }
            });
        });
    }

    // Toast notification function
    function showToast(message) {
        // Create toast element if it doesn't exist
        let toast = document.querySelector('.toast-notification');
        if (!toast) {
            toast = document.createElement('div');
            toast.className = 'toast-notification';
            document.body.appendChild(toast);

            // Add styles inline (could also be in CSS)
            toast.style.position = 'fixed';
            toast.style.bottom = '20px';
            toast.style.right = '20px';
            toast.style.backgroundColor = 'var(--accent-color)';
            toast.style.color = 'var(--primary-color)';
            toast.style.padding = '0.75rem 1.5rem';
            toast.style.borderRadius = '4px';
            toast.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
            toast.style.zIndex = '1000';
            toast.style.transition = 'transform 0.3s ease, opacity 0.3s ease';
            toast.style.transform = 'translateY(100px)';
            toast.style.opacity = '0';
        }

        // Set message and show
        toast.textContent = message;
        toast.style.transform = 'translateY(0)';
        toast.style.opacity = '1';

        // Hide after 3 seconds
        setTimeout(() => {
            toast.style.transform = 'translateY(100px)';
            toast.style.opacity = '0';
        }, 3000);
    }

});