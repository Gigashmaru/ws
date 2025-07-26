// Через 2 секунды запускаем плавное исчезновение лоадера
window.addEventListener("load", () => {
  setTimeout(() => {
    const loader = document.getElementById("loader");
    loader.classList.add("fade-out");
  }, 2000);
});
