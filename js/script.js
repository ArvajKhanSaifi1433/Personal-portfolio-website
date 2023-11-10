// Menu show

const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");
const navLink = document.querySelectorAll(".nav__item");

if (navToggle) {
  navToggle.addEventListener("click", (e) => {
    navMenu.classList.add("show-menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", (e) => {
    navMenu.classList.remove("show-menu");
  });
}

if (navLink) {
  Array.from(navLink).forEach((ele) => {
    ele.addEventListener("click", (e) => {
      navMenu.classList.remove("show-menu");
    });
  });
}

const swiper = new Swiper(".projects__container", {
  cssMode: true,
  loop: true,
  spaceBetween: 24,
  autoplay: {
    delay: 2000,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});
const swiperTestimonials = new Swiper(".testimonial__container", {
  grabCursor: true,
  cssMode: true,
  loop: true,
  spaceBetween: 24,
  autoplay: {
    delay: 2000,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});

const contactform = document.getElementById("contact-form");
const fome_name = document.getElementById("contact-name");
const fome_email = document.getElementById("contact-email");
const fome_project = document.getElementById("contact-project");
const fome_message = document.getElementById("contact-message");

function arvaj(e) {
  e.preventDefault();

  if (
    fome_name.value === "" ||
    fome_email.value === "" ||
    fome_project.value === ""
  ) {
    fome_message.classList.remove("color-blue");
    fome_message.classList.add("color-red");
    fome_message.innerText = "Write all the input fields ⌨️";
  } else {
    fome_message.classList.add("color-blue");
    fome_message.innerText = "Message Send 💚";
    setTimeout(() => {
      fome_message.innerText = "";
    }, 5000);
  }
}

contactform.addEventListener("submit", arvaj);

window.addEventListener("scroll", (e) => {
  let idd = document.getElementById("scrollUp");
  // idd.classList.toggle("disnone", window.scrollY > 350);
  if (window.scrollY > 550) {
    idd.classList.add("disnone");
  } else {
    idd.classList.remove("disnone");
  }
});

// Dark Light Theme

const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "ri-sun-line";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "ri-moon-line" : "ri-sun-line";

if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "ri-moon-line" ? "add" : "remove"](
    iconTheme
  );
}

themeButton.addEventListener("click", (e) => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);

  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

window.addEventListener("scroll", (e) => {
  let hed = document.querySelector(".header");
  if (window.scrollY > 50) {
    hed.classList.add("bg-header");
  } else {
    hed.classList.remove("bg-header");
  }
});
