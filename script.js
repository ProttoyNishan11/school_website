let slideIndex = 0; // Initialize slide index
showSlides(); // Call the function to display the initial slide

function showSlides() {
    const slides = document.querySelectorAll('.slides img'); // Select all images
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // Hide all images
    }
    slideIndex++; // Increment slide index
    if (slideIndex > slides.length) {
        slideIndex = 1; // Reset index to first slide
    }
    slides[slideIndex - 1].style.display = "block"; // Show current slide
    setTimeout(showSlides, 4000); // Change slide every 4 seconds
}

// Change slide based on button click
function changeSlide(n) {
    const slides = document.querySelectorAll('.slides img');
    slideIndex += n; // Update slide index based on button clicked
    if (slideIndex > slides.length) {
        slideIndex = 1; // Reset index if it exceeds total slides
    }
    if (slideIndex < 1) {
        slideIndex = slides.length; // Reset index if it's less than 1
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // Hide all images
    }
    slides[slideIndex - 1].style.display = "block"; // Show current slide
}

// Optionally, you could pause the automatic sliding when the user clicks a button
document.querySelector('.prev').addEventListener('click', function() {
    clearTimeout();
    changeSlide(-1);
});

document.querySelector('.next').addEventListener('click', function() {
    clearTimeout();
    changeSlide(1);
});
let slideIndex = 0; // Initialize slide index
showSlides(); // Call the function to display the initial slide

function showSlides() {
    const slides = document.querySelectorAll('.slides img'); // Select all images
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // Hide all images
    }
    slideIndex++; // Increment slide index
    if (slideIndex > slides.length) {
        slideIndex = 1; // Reset index to first slide
    }
    slides[slideIndex - 1].style.display = "block"; // Show current slide
    setTimeout(showSlides, 4000); // Change slide every 4 seconds
}

// Change slide based on button click
function changeSlide(n) {
    const slides = document.querySelectorAll('.slides img');
    slideIndex += n; // Update slide index based on button clicked
    if (slideIndex > slides.length) {
        slideIndex = 1; // Reset index if it exceeds total slides
    }
    if (slideIndex < 1) {
        slideIndex = slides.length; // Reset index if it's less than 1
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // Hide all images
    }
    slides[slideIndex - 1].style.display = "block"; // Show current slide
}

// Optionally, you could pause the automatic sliding when the user clicks a button
document.querySelector('.prev').addEventListener('click', function() {
    clearTimeout();
    changeSlide(-1);
});

document.querySelector('.next').addEventListener('click', function() {
    clearTimeout();
    changeSlide(1);
});
