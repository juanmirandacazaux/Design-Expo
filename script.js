const links = document.querySelectorAll(".links a");
const sections = document.querySelectorAll(".section");
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".links");
const themeToggle = document.getElementById("themeToggle");

/* SPA Navigation with History API */

function showSection(id) {
  sections.forEach(section => {
    section.classList.remove("active");
  });

  document.getElementById(id).classList.add("active");

  links.forEach(link => link.classList.remove("active"));
  document.querySelector(`[data-section="${id}"]`).classList.add("active");

  history.pushState(null, null, `#${id}`);
}

links.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = link.dataset.section;
    showSection(target);
    navLinks.classList.remove("show");
  });
});

/* Back / Forward support */

window.addEventListener("popstate", () => {
  const id = location.hash.replace("#", "") || "home";
  showSection(id);
});

/* Reveal on Scroll */

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  reveals.forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      el.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

/* Parallax */

window.addEventListener("scroll", () => {
  const parallax = document.querySelector(".parallax");
  if (parallax) {
    parallax.style.transform = `translateY(${window.scrollY * 0.2}px)`;
  }
});

/* Hamburger */

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

/* Theme Toggle */

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

/* Contact */

document.querySelector(".contact-form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Message sent successfully!");
  this.reset();
});
