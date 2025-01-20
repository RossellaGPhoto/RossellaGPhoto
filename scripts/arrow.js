document.addEventListener('DOMContentLoaded', () => {
    /*const scrollArrow = document.getElementById('scroll-arrow');

    // Toggle the arrow direction and scroll behavior
    scrollArrow.addEventListener('click', function () {
        const isArrowDown = scrollArrow.style.transform === "translateX(-50%) rotate(90deg)";

        const targetSection = document.querySelector('.title-container#second');

        if (isArrowDown) {
            // Scroll to the section when the arrow is pointing down
            targetSection.scrollIntoView({ behavior: 'smooth' });
            scrollArrow.style.transform = "translateX(-50%) rotate(-90deg)"; // Rotate to point up
        } else {
            // Scroll up when the arrow is pointing up
            window.scrollTo({ top: 0, behavior: 'smooth' });
            scrollArrow.style.transform = "translateX(-50%) rotate(90deg)"; // Rotate back to point down
        }
    });
    */

    const arrow = document.getElementById('arrow');
    let isScrollingDown = false;
    let isScrolling = false; // Flag to track if scrolling has started

    arrow.addEventListener('click', function () {
    if (!isScrollingDown) {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
        arrow.querySelector('img').style.transform = 'rotate(180deg)';
        isScrollingDown = true;
    } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        arrow.querySelector('img').style.transform = 'rotate(0deg)';
        isScrollingDown = false;
    }
    });

    // Handle the scrolling effect for the arrow's position and opacity
    window.addEventListener('scroll', function () {
    const scrollY = window.scrollY;
    const documentHeight = document.body.scrollHeight;
    const windowHeight = window.innerHeight;

    // Check if scrolling has started
    if (!isScrolling && scrollY > 0) {
        isScrolling = true; // Mark scrolling as started
        arrow.style.opacity = 0; // Set opacity to 0 when scrolling starts
    }

    // Check if the user is at the top or near the bottom of the page
    if (scrollY === 0 || scrollY + windowHeight >= documentHeight - 30) {
        arrow.style.opacity = 1; // Set opacity back to normal at the top or near bottom
        isScrolling = false; // Reset scrolling flag when at the top or near bottom
    }

    // Scroll behavior for moving and rotating the arrow
    if (scrollY > 0) {
        arrow.classList.add('scrolled');
        if (scrollY > 100) {
        arrow.querySelector('img').style.transform = 'rotate(180deg)';
        } else {
        arrow.querySelector('img').style.transform = 'rotate(0deg)';
        }
    } else {
        arrow.classList.remove('scrolled');
        arrow.querySelector('img').style.transform = 'rotate(0deg)';
    }
    });


});

