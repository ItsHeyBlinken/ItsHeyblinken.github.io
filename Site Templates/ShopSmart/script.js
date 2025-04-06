// ShopSmart Template JavaScript 

document.addEventListener('DOMContentLoaded', () => {

    // --- Theme Toggle --- 
    const themeToggleButton = document.getElementById('theme-toggle-button');
    const body = document.body;
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

    // --- Product Detail Page: Image Gallery --- 
    const mainImage = document.getElementById('main-product-image');
    const thumbnails = document.querySelectorAll('.thumbnail');

    if (mainImage && thumbnails.length > 0) {
        thumbnails.forEach(thumbnail => {
            thumbnail.addEventListener('click', () => {
                // Update the main image source
                mainImage.src = thumbnail.src.replace('100x100', '600x600'); // Adjust size if needed based on URL structure
                // Use a more robust way if URL structure varies significantly, e.g. data attributes
                // mainImage.src = thumbnail.dataset.largeImage; // Example if using data-large-image attribute
                
                // Update the alt text (optional)
                mainImage.alt = thumbnail.alt.replace('Thumbnail', 'Main Image');

                // Update active state for thumbnails
                thumbnails.forEach(t => t.classList.remove('active'));
                thumbnail.classList.add('active');
            });

            // Preload large images on hover (optional)
            thumbnail.addEventListener('mouseover', () => {
                const largeImageSrc = thumbnail.src.replace('100x100', '600x600');
                 if (largeImageSrc) {
                    const img = new Image();
                    img.src = largeImageSrc;
                 }
            });
        });
    }

    // --- Add other JS functionalities below (e.g., cart updates, forms) ---

}); 