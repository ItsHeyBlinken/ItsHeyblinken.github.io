// Example recruiting profile — video gallery (placeholder media only)

const videoData = [
    {
        id: 1,
        title: "Attacking highlight placeholder",
        description: "Demonstrates where an externally hosted attacking clip would appear.",
        category: "attacking",
        orientation: "landscape",
        thumbnail: "assets/stills/placeholders/video-attacking-placeholder.svg",
        unavailable: true
    },
    {
        id: 2,
        title: "Defense highlight placeholder",
        description: "Demonstrates where an externally hosted defensive clip would appear.",
        category: "defense",
        orientation: "landscape",
        thumbnail: "assets/stills/placeholders/video-defense-placeholder.svg",
        unavailable: true
    },
    {
        id: 3,
        title: "Serving highlight placeholder",
        description: "Demonstrates where an externally hosted serving clip would appear.",
        category: "serving",
        orientation: "landscape",
        thumbnail: "assets/stills/placeholders/video-serving-placeholder.svg",
        unavailable: true
    }
];

document.addEventListener('DOMContentLoaded', function() {
    try {
        initVideoGallery();
        initVideoCategories();
        initVideoPlayer();
    } catch (error) {
        console.error('Error initializing video functionality:', error);
    }
});

function initVideoGallery() {
    const videoGallery = document.getElementById('video-gallery');
    if (!videoGallery) return;
    displayVideos(videoData);
}

function initVideoCategories() {
    const categoryButtons = document.querySelectorAll('[data-category]');

    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.getAttribute('data-category');

            categoryButtons.forEach(btn => {
                btn.classList.remove('bg-primary', 'text-white', 'hover:bg-primary/90');
                btn.classList.add('bg-gray-100', 'text-gray-700', 'hover:bg-gray-200');
            });

            this.classList.remove('bg-gray-100', 'text-gray-700', 'hover:bg-gray-200');
            this.classList.add('bg-primary', 'text-white', 'hover:bg-primary/90');

            filterVideos(category);
        });
    });
}

function filterVideos(category) {
    const filteredVideos = category === 'all'
        ? videoData
        : videoData.filter(video => video.category === category);

    displayVideos(filteredVideos);
}

function displayVideos(videos) {
    const videoGallery = document.getElementById('video-gallery');
    if (!videoGallery) return;

    videoGallery.innerHTML = videos.map(video => createVideoItem(video)).join('');
    addVideoClickHandlers();
}

function createVideoItem(video) {
    const aspectClass = video.orientation === 'portrait' ? 'aspect-[9/16]' : 'aspect-video';

    return `
        <div class="video-item group cursor-pointer bg-white rounded-xl shadow-sm hover:shadow-xl transition-shadow duration-200 overflow-hidden" data-video-id="${video.id}">
            <div class="relative ${aspectClass} bg-gray-900 overflow-hidden">
                <img class="w-full h-full object-cover" src="${video.thumbnail}" alt="${video.title}">
                <div class="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/35 transition-colors duration-200">
                    <span class="flex items-center justify-center w-16 h-16 rounded-full bg-black/60 group-hover:bg-primary/90 group-hover:scale-110 transition-all duration-200">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="white" aria-hidden="true">
                            <path d="M8 5v14l11-7z"/>
                        </svg>
                    </span>
                </div>
                <span class="absolute bottom-2 right-2 bg-black/75 text-white text-xs font-medium px-2 py-1 rounded">Placeholder</span>
            </div>
            <div class="p-4">
                <h3 class="text-lg font-display font-semibold text-gray-900">${video.title}</h3>
                <p class="text-sm text-gray-600 mt-1 leading-relaxed">${video.description}</p>
                <span class="inline-block mt-3 text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">${formatCategory(video.category)}</span>
            </div>
        </div>
    `;
}

function formatCategory(category) {
    const categoryNames = {
        attacking: 'Attacking',
        defense: 'Defense',
        serving: 'Serving'
    };

    return categoryNames[category] || category;
}

function addVideoClickHandlers() {
    const videoItems = document.querySelectorAll('.video-item');

    videoItems.forEach(item => {
        item.addEventListener('click', function() {
            const videoId = parseInt(this.getAttribute('data-video-id'), 10);
            const video = videoData.find(v => v.id === videoId);

            if (video) {
                openVideoModal(video);
            }
        });
    });
}

function initVideoPlayer() {
    createVideoModal();
}

function createVideoModal() {
    if (document.getElementById('video-modal')) return;

    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black bg-opacity-75 z-50 hidden flex items-center justify-center';
    modal.id = 'video-modal';
    modal.innerHTML = `
        <div class="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center p-3 sm:p-4" onclick="closeVideoModal()">
            <div class="bg-white rounded-lg w-full max-w-4xl max-h-[92vh] flex flex-col overflow-hidden" onclick="event.stopPropagation()">
                <div class="flex justify-between items-center p-4 border-b">
                    <h3 id="modal-title" class="text-lg sm:text-xl font-bold text-gray-900 pr-4 truncate"></h3>
                    <button class="text-gray-500 hover:text-gray-700 text-3xl font-bold leading-none flex-shrink-0" id="modal-close" aria-label="Close video" onclick="closeVideoModal()">&times;</button>
                </div>
                <div class="p-4 flex flex-col min-h-0">
                    <div class="flex items-center justify-center bg-slate-100 rounded mb-4 min-h-[220px]">
                        <img id="modal-thumbnail" class="max-w-full max-h-[68vh] rounded" alt="">
                        <video id="modal-video" controls playsinline preload="metadata" class="hidden max-w-full max-h-[68vh] rounded">
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div class="video-details">
                        <p id="modal-description" class="text-gray-700"></p>
                    </div>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    const closeButton = document.getElementById('modal-close');
    if (closeButton) {
        closeButton.addEventListener('click', closeVideoModal);
    }
}

function openVideoModal(video) {
    const modal = document.getElementById('video-modal');
    const title = document.getElementById('modal-title');
    const description = document.getElementById('modal-description');
    const thumbnail = document.getElementById('modal-thumbnail');
    const videoEl = document.getElementById('modal-video');

    if (!modal || !title || !description || !thumbnail || !videoEl) return;

    title.textContent = video.title;
    description.textContent = video.unavailable
        ? `${video.description} No media file is included in this example demo.`
        : video.description;

    if (video.unavailable || !video.videoUrl) {
        videoEl.classList.add('hidden');
        videoEl.removeAttribute('src');
        thumbnail.classList.remove('hidden');
        thumbnail.src = video.thumbnail;
        thumbnail.alt = video.title;
    } else {
        thumbnail.classList.add('hidden');
        videoEl.classList.remove('hidden');
        videoEl.src = video.videoUrl;
    }

    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeVideoModal() {
    const modal = document.getElementById('video-modal');
    const videoEl = document.getElementById('modal-video');

    if (modal) {
        modal.classList.add('hidden');
    }

    if (videoEl) {
        videoEl.pause();
        videoEl.removeAttribute('src');
        videoEl.load();
    }

    document.body.style.overflow = '';
}

window.closeVideoModal = closeVideoModal;
