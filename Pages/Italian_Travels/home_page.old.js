let currentSlideIndex = 0; // Starting from the first image
const slides = document.querySelectorAll('.slides img'); // Selecting all images

// Show the slide based on the current index
function showSlide(index) {
    // Hide all images
    slides.forEach((slide) => slide.style.display = 'none');
    
    // Ensure the current slide index is within range
    if (index >= slides.length) {
        currentSlideIndex = 0; // Loop back to the first image
    } else if (index < 0) {
        currentSlideIndex = slides.length - 1; // Loop to the last image
    }

    // Show the current slide
    slides[currentSlideIndex].style.display = 'block';
}

// Function to change the slide when clicking a button
function changeSlide(direction) {
    currentSlideIndex += direction;
    showSlide(currentSlideIndex);
}

// Initially show the first slide
showSlide(currentSlideIndex);

// Automatic slide change every 2 seconds (pause for 2 seconds before moving)
setInterval(() => {
    currentSlideIndex++;
    showSlide(currentSlideIndex);
}, 2000); // Switch every 2 seconds
