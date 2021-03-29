//anim of sections
AOS.init();

// typed js
var typed = new Typed('#typed', {
  strings: [' <p class="about__upper-text">Привет, Меня зовут Андрей.</p> <p class="gold-text about__main-text">Я — FullStack разработчик.</p> <p class="about__lower-text">На этом сайте можно ознакомиться с моими <a class="gold-text" href="#">работами</a> и <a class="gold-text" href="#">связаться</a> со мной.</p> <button class="about__button">Написать мне</button> <button class="about__button">Скачать резюме</button>'],
  typeSpeed: 35
});

//forms
const form = document.querySelector(".formData");

//burger
const burger = document.querySelector(".header-burger");
const nav = document.querySelector(".header-links");
const body = document.querySelector("body");
const blackout = document.querySelector(".blackout"); // Затемнение
const burgerLine = document.querySelector(".header-burger__middle-line");
burger.addEventListener("click", () => {
  nav.classList.toggle("active");
  body.classList.toggle("active");
  burgerLine.classList.toggle("active");
  blackout.classList.toggle("active");
})

