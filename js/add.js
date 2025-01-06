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
  line.addEventListener("click", () => goToSlide(index));
  linesContainer.appendChild(line);
});

const lines = document.querySelectorAll(".line");

// Event Listeners
previous.onclick = showPreviousImage;
next.onclick = showNextImage;

// Functions
function showNextImage() {
  counter++;
  if (counter === imagesArray.length) counter = 0;
  updateSlider();
}

function showPreviousImage() {
  if (counter === 0) counter = imagesArray.length;
  counter--;
  updateSlider();
}

function goToSlide(index) {
  counter = index;
  updateSlider();
}

function updateSlider() {
  imageHolder.src = imagesArray[counter].src;
  imageLink.href = imagesArray[counter].link;

  // Update Line Indicators
  lines.forEach((line) => line.classList.remove("active"));
  lines[counter].classList.add("active");
}

// Auto Slide
function runGalleryAuto() {
  counter++;
  if (counter === imagesArray.length) counter = 0;
  updateSlider();
  setTimeout(runGalleryAuto, 3000); // Change every 3 seconds
}

runGalleryAuto();
// pop up
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
