const loading = document.getElementById("loading");

const loadingDuration = 2000; // 2s

setTimeout(() => {
  loading.classList.add("loading-none");
}, loadingDuration);

window.addEventListener("scroll", function () {
  toggleBacktop();
});

let backtop = document.getElementById("backtop");

function toggleBacktop() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    backtop.classList.add("backtop-show");
  } else {
    backtop.classList.remove("backtop-show");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("hamburger");
  const navMenu = document.querySelector(".nav-menu");

  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
});

// $(".owl-carousel").owlCarousel({
//   loop: false,
//   margin: 12,
//   nav: true,
//   responsive: {
//     0: {
//       item: 1,
//     },
//     600: {
//       items: 3,
//     },
//     1000: {
//       items: 5,
//     },
//   },
// });

fetch("https://hook.eu2.make.com/9jk4xjsxnqls9r1botxr1noe3nux9j3g", {
  method: "POST",
  body: JSON.stringify({ event: "visit", time: new Date().toISOString() }),
  headers: {
    "Content-Type": "application/json",
  },
});

if (!localStorage.getItem('visit-notified')) {
  fetch('https://hook.us1.make.com/abc123xyz', {
    method: 'POST',
    body: JSON.stringify({ event: "visit", time: new Date().toISOString() }),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  localStorage.setItem('visit-notified', '1');

let darkModeBtn = document.querySelector(".dark-mode");

darkModeBtn.addEventListener("click", function () {
  if (document.body.className != "skip") {
    this.firstElementChild.src = "./images/sun.svg";
  } else {
    this.firstElementChild.src = "images/moon.svg";
  }
  document.body.classList.toggle("skip");
});

let heartAttackBtn = document.querySelector(".heart-attack");

heartAttackBtn.addEventListener("click", function () {
  if (document.body.className != "hia") {
    this.firstElementChild.src = "../images/Add To Cart.svg";
  } else {
    this.firstElementChild.src = "../images/Wish List.svg";
  }
  document.body.classList.toggle("hia");
});

const stars = document.querySelectorAll(".rating span");
const ratingValue = document.getElementById("rating-value");
let selectedRating = 0;

stars.forEach((star) => {
  star.addEventListener("mouseover", () => {
    const val = star.getAttribute("data-value");
    highlightStars(stars, val);
  });

  star.addEventListener("mouseout", () => {
    highlightStars(stars, selectedRating);
  });

  star.addEventListener("click", () => {
    selectedRating = star.getAttribute("data-value");
    ratingValue.textContent = selectedRating;
  });
});

const stars1 = document.querySelectorAll(".rating1 span");
const ratingValue1 = document.getElementById("rating-value");
let selectedRating1 = 0;

stars1.forEach((star) => {
  star.addEventListener("mouseover", () => {
    const val = star.getAttribute("data-value");
    highlightStars(stars1, val);
  });

  star.addEventListener("mouseout", () => {
    highlightStars(stars1, selectedRating1);
  });

  star.addEventListener("click", () => {
    selectedRating1 = star.getAttribute("data-value");
    ratingValue1.textContent = selectedRating1;
  });
});

const stars2 = document.querySelectorAll(".rating2 span");
const ratingValue2 = document.getElementById("rating-value");
let selectedRating2 = 0;

stars2.forEach((star) => {
  star.addEventListener("mouseover", () => {
    const val = star.getAttribute("data-value");
    highlightStars(stars2, val);
  });

  star.addEventListener("mouseout", () => {
    highlightStars(stars2, selectedRating2);
  });

  star.addEventListener("click", () => {
    selectedRating2 = star.getAttribute("data-value");
    ratingValue2.textContent = selectedRating2;
  });
});

const stars3 = document.querySelectorAll(".rating3 span");
const ratingValue3 = document.getElementById("rating-value");
let selectedRating3 = 0;

stars3.forEach((star) => {
  star.addEventListener("mouseover", () => {
    const val = star.getAttribute("data-value");
    highlightStars(stars3, val);
  });

  star.addEventListener("mouseout", () => {
    highlightStars(stars3, selectedRating3);
  });

  star.addEventListener("click", () => {
    selectedRating3 = star.getAttribute("data-value");
    ratingValue3.textContent = selectedRating3;
  });
});

const stars4 = document.querySelectorAll(".rating4 span");
const ratingValue4 = document.getElementById("rating-value");
let selectedRating4 = 0;

stars4.forEach((star) => {
  star.addEventListener("mouseover", () => {
    const val = star.getAttribute("data-value");
    highlightStars(stars4, val);
  });

  star.addEventListener("mouseout", () => {
    highlightStars(stars4, selectedRating4);
  });

  star.addEventListener("click", () => {
    selectedRating4 = star.getAttribute("data-value");
    ratingValue4.textContent = selectedRating4;
  });
});

const stars5 = document.querySelectorAll(".rating5 span");
const ratingValue5 = document.getElementById("rating-value");
let selectedRating5 = 0;

stars5.forEach((star) => {
  star.addEventListener("mouseover", () => {
    const val = star.getAttribute("data-value");
    highlightStars(stars5, val);
  });

  star.addEventListener("mouseout", () => {
    highlightStars(stars5, selectedRating5);
  });

  star.addEventListener("click", () => {
    selectedRating5 = star.getAttribute("data-value");
    ratingValue5.textContent = selectedRating5;
  });
});

const stars6 = document.querySelectorAll(".rating6 span");
const ratingValue6 = document.getElementById("rating-value");
let selectedRating6 = 0;

stars6.forEach((star) => {
  star.addEventListener("mouseover", () => {
    const val = star.getAttribute("data-value");
    highlightStars(stars6, val);
  });

  star.addEventListener("mouseout", () => {
    highlightStars(stars6, selectedRating6);
  });

  star.addEventListener("click", () => {
    selectedRating6 = star.getAttribute("data-value");
    ratingValue6.textContent = selectedRating6;
  });
});

const stars7 = document.querySelectorAll(".rating7 span");
const ratingValue7 = document.getElementById("rating-value");
let selectedRating7 = 0;

stars7.forEach((star) => {
  star.addEventListener("mouseover", () => {
    const val = star.getAttribute("data-value");
    highlightStars(stars7, val);
  });

  star.addEventListener("mouseout", () => {
    highlightStars(stars7, selectedRating7);
  });

  star.addEventListener("click", () => {
    selectedRating7 = star.getAttribute("data-value");
    ratingValue7.textContent = selectedRating7;
  });
});

function highlightStars(starsSet, rating) {
  starsSet.forEach((star) => {
    if (star.getAttribute("data-value") <= rating) {
      star.classList.add("hover");
    } else {
      star.classList.remove("hover");
    }
  });
}

const dots = document.querySelectorAll(".dot");

function setActiveDot(index) {
  dots.forEach((dot) => dot.classList.remove("active"));
  dots[index].classList.add("active");
  localStorage.setItem("activeDotIndex", index); // сохраняем
}

// Обработка кликов
dots.forEach((dot) => {
  dot.addEventListener("click", () => {
    const index = +dot.dataset.index;
    setActiveDot(index);
  });
});

// Загрузка сохранённого состояния
const savedIndex = localStorage.getItem("activeDotIndex");
if (savedIndex !== null) {
  setActiveDot(+savedIndex);
} else {
  setActiveDot(0); // по умолчанию активна первая
}

const btn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    // если прокрутили вниз больше 200px
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
});

btn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
