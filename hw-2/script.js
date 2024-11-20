
const input = document.querySelector(".slider__input");

const img = document.querySelector(".slider__image");

input.addEventListener(
  "input",
  _.debounce((ev) => {
    const scVal = ev.target.value / 50;
    img.style.transform = `scale(${scVal})`;
  }, 50)
);