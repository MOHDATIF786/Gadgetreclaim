// Variables
const previous = document.getElementById("previous");
const imageHolder = document.getElementById("imageHolder");
const imageLink = document.getElementById("imageLink");
const next = document.getElementById("next");
const linesContainer = document.getElementById("linesContainer");

const imagesArray = [
  { src: "img/sliderimg1.webp", link: "page1.html" },
  { src: "img/sliderimg2.webp", link: "page2.html" },
  { src: "img/sliderimg3.webp", link: "page3.html" },
];

let counter = 0;

// Create Line Indicators
imagesArray.forEach((_, index) => {
  const line = document.createElement("div");
  line.classList.add("line");
  if (index === 0) line.classList.add("active");
  line.dataset.index = index;

  // Line Click Event
  line.addEventListener("click", () => {
    counter = index;
    updateSlider();
  });

  linesContainer.appendChild(line);
});

const lines = document.querySelectorAll(".line");

function updateSlider() {
  imageHolder.src = imagesArray[counter].src;
  imageLink.href = imagesArray[counter].link;

  // Update Line Indicators
  lines.forEach((line) => line.classList.remove("active"));
  lines[counter].classList.add("active");
}

// Event Listeners
// previous.onclick = showPreviousImage;
// next.onclick = showNextImage;
previous.onclick = () => {
  counter = (counter - 1 + imagesArray.length) % imagesArray.length;
  updateSlider();
};

next.onclick = () => {
  counter = (counter + 1) % imagesArray.length;
  updateSlider();
};
// Functions
function showNextImage() {
  counter++;
  if (counter >= imagesArray.length) counter = 0;
  updateSlider();
}

function showPreviousImage() {
  counter--;
  if (counter < 0) counter = imagesArray.length - 1;
  updateSlider();
}

// function goToSlide(index) {
//   counter = index;
//   updateSlider();
// }

// Auto Slide
function runGalleryAuto() {
  counter++;
  if (counter === imagesArray.length) counter = 0;
  updateSlider();
  setTimeout(runGalleryAuto, 3000); // Change every 3 seconds
}

runGalleryAuto();

// // pop up

function openPopup(formType) {
  const overlay = document.getElementById("popupOverlay");
  const popup = document.getElementById("popup");
  const loginForm = document.getElementById("loginForm");
  const signupForm = document.getElementById("signupForm");
  const loginTitle = document.getElementById("loginTitle");

  overlay.style.display = "flex";
  if (formType === "login") {
    loginForm.style.display = "block";
    signupForm.style.display = "none";
    loginTitle.textContent = "Login";
  } else if (formType === "signup") {
    signupForm.style.display = "block";
    loginForm.style.display = "none";
    loginTitle.textContent = "Sign up";
  }
}

function closePopup() {
  const overlay = document.getElementById("popupOverlay");
  overlay.style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");

  loginForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default submit

    const usernameInput = document.getElementById("username").value.trim();
    const passwordInput = document.getElementById("password").value;

    const correctUsername = "Atif"; // ✅ Your correct login
    const correctPassword = "7977";

    if (
      usernameInput === correctUsername &&
      passwordInput === correctPassword
    ) {
      // ✅ Redirect to main.html
      window.location.href = "/pages/main.html";
    } else {
      // ❌ Show alert on wrong credentials
      alert("Invalid username or password!");
    }
  });
});
// Signup Form Handling
document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent the default form submission

  const username = document.getElementById("signupUsername").value.trim();
  const email = document.getElementById("signupEmail").value.trim();
  const password = document.getElementById("signupPassword").value;

  // Check if all fields are filled
  if (username && email && password) {
    // All details are filled
    alert("Signup successful! Redirecting to login...");
    // Redirect to the main page after a successful signup
    window.location.href = "/pages/main.html"; // Change this to your desired page
  } else {
    // If any field is missing, show an error message
    alert("Please fill in all fields!");
  }
});

// card slider
const sliderContainer1 = document.querySelector(".slider-container-1");
const cards = document.querySelectorAll(".slider-card-1");
const prevButton = document.getElementById("prev-1");
const nextButton = document.getElementById("next-1");

let currentIndex = 0;
const cardWidth = cards[0].offsetWidth + 20; // card width + margin

function updateSliderPosition() {
  sliderContainer1.style.transform = `translateX(-${
    currentIndex * cardWidth
  }px)`;
  prevButton.disabled = currentIndex === 0;
  nextButton.disabled = currentIndex === cards.length - 4;
}

prevButton.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSliderPosition();
  }
});

nextButton.addEventListener("click", () => {
  if (currentIndex < cards.length - 4) {
    currentIndex++;
    updateSliderPosition();
  }
});

updateSliderPosition();
// laptop
const track = document.getElementById("carouselTrack");
const prevControl = document.getElementById("prevControl");
const nextControl = document.getElementById("nextControl");

let index = 0;

function updateTrack() {
  const cardWidth = track.querySelector(".product-card").offsetWidth + 30; // Including margin
  const maxIndex =
    track.children.length -
    Math.floor(track.parentElement.offsetWidth / cardWidth);
  index = Math.max(0, Math.min(index, maxIndex)); // Clamp index to valid range
  track.style.transform = `translateX(-${index * cardWidth}px)`;
}

prevControl.addEventListener("click", () => {
  if (index > 0) {
    index--;
    updateTrack();
  }
});

nextControl.addEventListener("click", () => {
  const cardWidth = track.querySelector(".product-card").offsetWidth + 30; // Including margin
  const maxIndex =
    track.children.length -
    Math.floor(track.parentElement.offsetWidth / cardWidth);
  if (index < maxIndex) {
    index++;
    updateTrack();
  }
});

window.addEventListener("resize", updateTrack); // Adjust on window resize

//more
const triggerBtn2 = document.querySelector(".trigger-btn");
const popupContainer2 = document.getElementById("popup-container2");
const closePopup2 = document.getElementById("closePopup2");
const overlay = document.getElementById("overlay");

// Open popup
triggerBtn2.addEventListener("click", () => {
  popupContainer2.classList.add("active");
  overlay.classList.add("active");
});

// Close popup
function closeModal() {
  popupContainer2.classList.remove("active");
  overlay.classList.remove("active");
}

closePopup2.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

// Close on ESC
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});
