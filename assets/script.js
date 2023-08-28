const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

let arrow_left = document.getElementById("arrow_left");
let arrow_right = document.getElementById("arrow_right");
let currentSlide = 0;
const dotsContainer = document.querySelector(".dots");
let banner = document.querySelector("banner");

arrow_right.addEventListener("click", rightArrow);
arrow_left.addEventListener("click", leftArrow);

function rightArrow() {
  if (currentSlide < slides.length - 1) {
    currentSlide++;
    showSlide(currentSlide);
  } else {
    currentSlide = 0;
    showSlide(currentSlide);
  }
}

function leftArrow() {
  if (currentSlide > 0) {
    currentSlide--;
    showSlide(currentSlide);
  } else {
    currentSlide = slides.length - 1;
    showSlide(currentSlide);
  }
}

function updateDots() {
  dotsContainer.innerHTML = "";
  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    dotsContainer.appendChild(dot);
  }
}

function showSlide(slide) {
  const bannerImg = document.querySelector(".banner-img");
  const bannerParagraph = document.querySelector("#banner p");
  const dots = document.querySelectorAll(".dot");
  bannerImg.src = `./assets/images/slideshow/${slides[slide].image}`;
  bannerParagraph.innerHTML = slides[slide].tagLine;
  dots.forEach((dot, index) => {
    if (index === slide) {
      dot.classList.add("dot_selected");
    } else {
      dot.classList.remove("dot_selected");
    }
  });
}

updateDots();
showSlide(currentSlide);
