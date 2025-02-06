function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

let currentSlide = 0;
const slides = document.querySelectorAll('.slides');

function showSlide(index) {
// Hide all slides
slides.forEach((slide, i) => {
  slide.style.display = (i === index) ? 'block' : 'none';
});
}

function changeSlide(step) {
currentSlide = (currentSlide + step + slides.length) % slides.length;
showSlide(currentSlide);
}

// Show the first slide initially
showSlide(currentSlide);

// Function to open the popup
function openDescriptionPopup(button) {
const popup = button.nextElementSibling; // Select the popup div
popup.style.display = "block";
popup.style.position = "absolute";

// Position the popup at the upper right of the button
popup.style.top = `${button.offsetTop - popup.offsetHeight - 10}px`; // Above the button with a 10px gap
popup.style.left = `${button.offsetLeft + button.offsetWidth}px`; // Aligns to the right edge of the button
}

function closeDescriptionPopup(button) {
const popup = button.parentElement; // Select the parent popup div
popup.style.display = "none";
}
function showAbstract(id) {
const abstract = document.getElementById(id);
if (abstract.style.display === "block") {
  abstract.style.display = "none";
} else {
  abstract.style.display = "block";
}
}

// Get the current date and format it
const lastUpdateElement = document.getElementById("last-update");
const currentDate = new Date().toLocaleDateString("en-US", {
year: "numeric", month: "long", day: "numeric"
});

// Display the formatted date in the footer
lastUpdateElement.textContent = currentDate;

function showPopup() {
  const etceteraBtn = document.getElementById("etcetera-btn");
  const popup = document.getElementById("popup");

  // Get the button's position relative to the viewport
  const rect = etceteraBtn.getBoundingClientRect();

  // Calculate the popup's position relative to the page
  const popupLeft = rect.left + window.scrollX + 1150; // Adjust 10px to the right of the button
  const popupTop = rect.bottom + window.scrollY + 85; // Adjust 5px below the button

  // Apply calculated positions
  popup.style.position = "absolute";
  popup.style.left = `${popupLeft}px`;
  popup.style.top = `${popupTop}px`;

  // Display the popup
  popup.style.display = "block";

  // Hide the popup after 3 seconds
  setTimeout(() => {
      popup.style.display = "none";
  }, 3000);
}
