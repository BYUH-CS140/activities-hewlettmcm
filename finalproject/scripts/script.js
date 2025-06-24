document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.querySelector('.contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            if (name === '' || email === '' || message === '') {
                alert('Please fill in all fields before submitting.');
                return;
            }

            // Simulate form submission
            alert('Thank you for your message, ' + name + '! We will get back to you soon.');
            contactForm.reset();
        });
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href').split('/').pop();
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });

    const nav = document.querySelector('nav');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            nav.classList.add('shrink-nav');
        } else {
            nav.classList.remove('shrink-nav');
        }
    });

    // Add lightbox functionality
    const photoGallery = document.querySelector('.photo-gallery');
    if (photoGallery) {
        const lightbox = document.createElement('div');
        lightbox.id = 'lightbox';
        document.body.appendChild(lightbox);

        lightbox.style.position = 'fixed';
        lightbox.style.top = 0;
        lightbox.style.left = 0;
        lightbox.style.width = '100%';
        lightbox.style.height = '100%';
        lightbox.style.background = 'rgba(0, 0, 0, 0.8)';
        lightbox.style.display = 'none';
        lightbox.style.alignItems = 'center';
        lightbox.style.justifyContent = 'center';
        lightbox.style.zIndex = 9999;

        const lightboxImage = document.createElement('img');
        lightboxImage.style.maxWidth = '90%';
        lightboxImage.style.maxHeight = '90%';
        lightbox.appendChild(lightboxImage);

        const prevButton = document.createElement('button');
        prevButton.innerHTML = '&#10094;'; // Left arrow
        prevButton.style.position = 'absolute';
        prevButton.style.left = '30px';
        prevButton.style.top = '50%';
        prevButton.style.transform = 'translateY(-50%)';
        prevButton.style.fontSize = '2rem';
        prevButton.style.color = '#fff';
        prevButton.style.background = 'none';
        prevButton.style.border = 'none';
        prevButton.style.cursor = 'pointer';
        lightbox.appendChild(prevButton);

        const nextButton = document.createElement('button');
        nextButton.innerHTML = '&#10095;'; // Right arrow
        nextButton.style.position = 'absolute';
        nextButton.style.right = '30px';
        nextButton.style.top = '50%';
        nextButton.style.transform = 'translateY(-50%)';
        nextButton.style.fontSize = '2rem';
        nextButton.style.color = '#fff';
        nextButton.style.background = 'none';
        nextButton.style.border = 'none';
        nextButton.style.cursor = 'pointer';
        lightbox.appendChild(nextButton);

        const galleryImages = Array.from(photoGallery.querySelectorAll('img'));
        let currentIndex = 0;

        function updateLightboxImage(index) {
            currentIndex = (index + galleryImages.length) % galleryImages.length;
            lightboxImage.src = galleryImages[currentIndex].src;
        }

        galleryImages.forEach((image, index) => {
            image.addEventListener('click', () => {
                updateLightboxImage(index);
                lightbox.style.display = 'flex';
            });
        });

        prevButton.addEventListener('click', (e) => {
            e.stopPropagation();
            updateLightboxImage(currentIndex - 1);
        });

        nextButton.addEventListener('click', (e) => {
            e.stopPropagation();
            updateLightboxImage(currentIndex + 1);
        });

        lightbox.addEventListener('click', () => {
            lightbox.style.display = 'none';
        });
    }

    // Auto-scroll photo gallery (homepage only)
    const autoScrollContainer = document.querySelector('.auto-scroll-gallery');
    if (autoScrollContainer) {
        // Duplicate content for seamless loop
        const scrollContent = autoScrollContainer.innerHTML;
        autoScrollContainer.innerHTML += scrollContent;

        function autoScroll() {
            if (autoScrollContainer.scrollLeft >= autoScrollContainer.scrollWidth / 2) {
                autoScrollContainer.scrollLeft = 0;
            } else {
                autoScrollContainer.scrollLeft += 0.5;
            }
            requestAnimationFrame(autoScroll);
        }

        autoScroll();
    }
});