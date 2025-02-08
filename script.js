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

function showPopup(popupId) {
  const etceteraBtn = document.getElementById(
      popupId === "popup" ? "etcetera-btn" : "etcetera-btn-mobile"
  );
  const popup = document.getElementById(popupId);

  if (!etceteraBtn || !popup) return; // Safety check

  const rect = etceteraBtn.getBoundingClientRect();

  let popupLeft, popupTop;

  if (window.innerWidth > 768) {
      // Desktop positioning
      popupLeft = rect.left + window.scrollX + 10;
      popupTop = rect.bottom + window.scrollY + 5;
  } else {
      // Mobile positioning - Center it
      popupLeft = (window.innerWidth / 2) - (popup.offsetWidth / 2);
      popupTop = rect.bottom + window.scrollY + 10;
  }

  popup.style.position = "absolute";
  popup.style.left = `${popupLeft}px`;
  popup.style.top = `${popupTop}px`;
  popup.style.display = "block";

  setTimeout(() => {
      popup.style.display = "none";
  }, 3000);
}
