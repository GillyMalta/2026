const images = [
    "/2026/Assets/Images/green.png",
    "/2026/Assets/Images/purple.png",
    "/2026/Assets/Images/red.png",
    "/2026/Assets/Images/yellow.png",
    "/2026/Assets/Images/black.png"
];

const imgElement = document.getElementById("slideshow");

let currentIndex = 0;

function showNextImage() {
    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0; 
    }
    imgElement.src = images[currentIndex];
}

setInterval(showNextImage, 2000);
