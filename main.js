document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.getElementById('carousel');
    const card = carousel.querySelector('.testimonial-card');

    // Clone the card multiple times (e.g., 6 times for smooth infinite scroll)
    for (let i = 0; i < 6; i++) {
        const clone = card.cloneNode(true);
        carousel.appendChild(clone);
    }

    // Optional: Pause animation on hover
    carousel.addEventListener('mouseenter', () => {
        carousel.style.animationPlayState = 'paused';
    });

    carousel.addEventListener('mouseleave', () => {
        carousel.style.animationPlayState = 'running';
    });

    // Company logos carousel
    const companyCarousel = document.getElementById('companyCarousel');
    const logoItem = companyCarousel.querySelector('.company-logo-item');

    // Clone the logo multiple times (e.g., 10 times for smooth infinite scroll)
    for (let i = 0; i < 10; i++) {
        const clone = logoItem.cloneNode(true);
        companyCarousel.appendChild(clone);
    }

    // Optional: Pause animation on hover
    companyCarousel.addEventListener('mouseenter', () => {
        companyCarousel.style.animationPlayState = 'paused';
    });

    companyCarousel.addEventListener('mouseleave', () => {
        companyCarousel.style.animationPlayState = 'running';
    });
});

// Add click event listeners to all collapse elements
document.querySelectorAll('.collapse').forEach(item => {
    item.addEventListener('click', event => {
        // Close all other open items
        document.querySelectorAll('.collapse input').forEach(input => {
            if (input !== event.currentTarget.querySelector('input')) {
                input.checked = false;
            }
        });
    });
});