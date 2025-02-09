document.addEventListener('DOMContentLoaded', function() {

    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1); // Remove the '#'
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Explore Button Click Event
    const exploreButton = document.getElementById('explore-button');
    if (exploreButton) {
        exploreButton.addEventListener('click', function(e) {
            e.preventDefault();
            const firstRoseSection = document.getElementById('rose1');
            if (firstRoseSection) {
                window.scrollTo({
                    top: firstRoseSection.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    }

    // Optional: Add more interactive effects here!  Examples:
    // 1. Parallax effect on the rose images
    // 2. Animate the rose details when they come into view (using Intersection Observer)
});
