let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");

  // Hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Increment slide index
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  // Remove active class from dots
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active-dot", "");
  }

  // Display the current slide and highlight the dot
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active-dot";

  // Change image every 5 seconds
  setTimeout(showSlides, 5000);
}

// Next/previous controls
function plusSlides(n) {
  slideIndex += n - 1;
  if (slideIndex < 0) {
    slideIndex = 0;
  }
  showSlides();
}

// Thumbnail image controls
function currentSlide(n) {
  slideIndex = n - 1;
  showSlides();
}
