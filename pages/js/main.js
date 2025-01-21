// location
const locationButton = document.getElementById("location-btn");
const locationPopup = document.getElementById("location-popup");
const newPopupButtonClose = document.getElementById("new-popup-button-close");
const cityList = document.getElementById("city-list");

locationButton.addEventListener("click", () => {
  locationPopup.classList.add("visible");
});

newPopupButtonClose.addEventListener("click", () => {
  locationPopup.classList.remove("visible");
});

cityList.addEventListener("click", (event) => {
  const cityItem = event.target.closest(".city-item");
  if (cityItem) {
    const cityName = cityItem.getAttribute("data-city");
    locationButton.textContent = cityName;
    locationPopup.classList.remove("visible");
  }
});
// Variables img slider
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

//
