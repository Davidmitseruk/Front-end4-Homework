
const input = document.querySelector(".slider__input");

const img = document.querySelector(".slider__image");

input.addEventListener(
  "input",
  _.debounce((ev) => {
    const scVal = ev.target.value / 50;
    img.style.transform = `scale(${scVal})`;
  }, 50)
);


// 2

function updateCoordinants(ev) { 
  const body = document.body;
  const box = document.getElementById("box");

  // Визначаємо межі елемента <body> відносно вікна браузера
  const rect = body.getBoundingClientRect();

  // Визначаємо координати миші відносно елемента <body>
  // ev.clientX - позиція миші по осі X відносно вікна браузера
  // ev.clientY - позиція миші по осі Y відносно вікна браузера
  const x = ev.clientX - rect.left; // Координата X відносно body
  const y = ev.clientY - rect.top;  // Координата Y відносно body

  // Встановлюємо нове положення елемента "box" на основі обчислених координат за допомогою CSS-властивостей left і top
  box.style.left =`${x}px`;
  box.style.top = `${y}px`;
}

// Обгортка функції updateCoordinants за допомогою _.debounce з затримкою 100 мс. Це обмежує кількість викликів updateCoordinants, коли мишка рухається швидко
const debounceUptade = _.debounce(updateCoordinants, 100);

// Отримуємо елемент <body> для прив'язки обробника подій
const body = document.body;

// Додаємо обробник події "mousemove" до <body>. При русі миші викликатиметься функція debounceUptade з оптимізацією через debounce

body.addEventListener("mousemove", debounceUptade);