// Example recruiting profile — statistics tabs (static fictional values in HTML)

document.addEventListener('DOMContentLoaded', function() {
    try {
        initStatsTabs();
    } catch (error) {
        console.error('Error initializing stats functionality:', error);
    }
});

function initStatsTabs() {
    const tabButtons = document.querySelectorAll('[data-tab]');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');

            tabButtons.forEach(btn => {
                btn.classList.remove('bg-primary', 'text-white');
                btn.classList.add('text-gray-700', 'hover:bg-white');
            });

            tabContents.forEach(content => {
                content.classList.remove('active');
                content.classList.add('hidden');
            });

            this.classList.remove('text-gray-700', 'hover:bg-white');
            this.classList.add('bg-primary', 'text-white');

            const targetContent = document.getElementById(`${targetTab}-stats`);
            if (targetContent) {
                targetContent.classList.remove('hidden');
                targetContent.classList.add('active');
            }
        });
    });
}
