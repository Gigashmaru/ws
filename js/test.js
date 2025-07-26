const images = [
  "https://picsum.photos/id/237/400/400",
  "https://picsum.photos/id/238/400/400",
  "https://picsum.photos/id/239/400/400",
  "https://picsum.photos/id/240/400/400",
  "https://picsum.photos/id/241/400/400",
];

const dots = document.querySelectorAll(".dot");
const avatar = document.getElementById("avatar");
const slider = document.getElementById("slider");

let activeIndex = null;
let sliderVisible = false;

function activate(index) {
  dots.forEach((dot) => dot.classList.remove("active"));
  dots[index].classList.add("active");
  avatar.src = images[index];
  activeIndex = index;
  sliderVisible = true;
  slider.style.display = "block";
}

function hideSlider() {
  dots.forEach((dot) => dot.classList.remove("active"));
  avatar.src = "";
  activeIndex = null;
  sliderVisible = false;
  slider.style.display = "none";
}

dots.forEach((dot) => {
  dot.addEventListener("click", () => {
    const index = +dot.dataset.index;
    if (!sliderVisible) {
      activate(index);
    } else if (activeIndex === index) {
      hideSlider();
    } else {
      activate(index);
    }
  });
});

// Изначально скрываем картинки
hideSlider();
