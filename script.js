
// scripts.js
document.addEventListener("DOMContentLoaded", function() {
    // After the page loads, show the navigation animation
    document.querySelector(".navbar").classList.add("show");
});



// Animation Text
document.addEventListener("DOMContentLoaded", function() {
    // Animate the image to slide in from the left
    const image = document.querySelector(".image-grid img");
    image.style.transform = "translateX(0)";
    image.style.opacity = "1";

    // Animate the text section to slide in from the left
    const textGrid = document.querySelector(".text-grid");
    setTimeout(() => {
        textGrid.style.transform = "translateX(0)";
        textGrid.style.opacity = "1";
    }, 500);
});


document.addEventListener("DOMContentLoaded", function() {
    const rangeContainer = document.querySelector(".range-container");
    const rangeItems = document.querySelectorAll(".range-item");

    // Function to handle scroll animations
    function handleScroll() {
        const containerTop = rangeContainer.getBoundingClientRect().top;
        const containerBottom = rangeContainer.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;

        // Check if the range container is within the viewport
        if (containerTop < windowHeight && containerBottom > 0) {
            // Animate each grid item
            rangeItems.forEach(item => {
                item.style.opacity = "1";
            });
        }
    }

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Initial check on page load
    handleScroll();
});

// The Review Section
document.addEventListener("DOMContentLoaded", function() {
    const prevButton = document.querySelector(".prev-button");
    const nextButton = document.querySelector(".next-button");
    const carouselContainer = document.querySelector(".carousel-container");
    const carouselItems = document.querySelectorAll(".carousel-item");
    let currentIndex = 0;

    function updateCarousel() {
        // Calculate the transform value based on the current index
        const translateXValue = -currentIndex * 100;
        carouselContainer.style.transform = `translateX(${translateXValue}%)`;
        
        // Update the active class
        carouselItems.forEach((item, index) => {
            if (index === currentIndex) {
                item.classList.add("active");
            } else {
                item.classList.remove("active");
            }
        });
    }

    // Eventlistener for the prev btn
    prevButton.addEventListener("click", function() {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = carouselItems.length - 1;
        }
        updateCarousel();
    });

    // Eventlistener for the nex btn
    nextButton.addEventListener("click", function() {
        currentIndex++;
        if (currentIndex >= carouselItems.length) {
            currentIndex = 0;
        }
        updateCarousel();
    });

    updateCarousel();
});
