const images = [
    "./Assets/Images/green.png",
    "./Assets/Images/purple.png",
    "./Assets/Images/red.png",
    "./Assets/Images/yellow.png",
    "./Assets/Images/black.png"
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
