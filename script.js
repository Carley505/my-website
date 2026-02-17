// --- Typewriter Effect ---
const typingElement = document.querySelector(".typing");
const roles = ["AI & Automation Expert", "Graphic Designer", "UI/UX Specialist", "Web Developer"];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  const currentRole = roles[roleIndex];
  if (isDeleting) {
    typingElement.textContent = currentRole.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typingElement.textContent = currentRole.substring(0, charIndex + 1);
    charIndex++;
  }

  let typeSpeed = isDeleting ? 100 : 200;

  if (!isDeleting && charIndex === currentRole.length) {
    typeSpeed = 2000;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    typeSpeed = 500;
  }

  setTimeout(type, typeSpeed);
}

document.addEventListener("DOMContentLoaded", () => {
  type();
  handleHash();
});

// --- Navigation Logic ---
const myNavLinks = document.querySelectorAll(".nav-link");
const navToggler = document.querySelector(".nav-toggler");
const aside = document.querySelector(".aside");
const containers = document.querySelectorAll(".container");

myNavLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    // Let the hashchange event handle the section visibility
    aside.classList.remove("show");
    navToggler.classList.remove("open");
  });
});

window.addEventListener("hashchange", handleHash);

function handleHash() {
  const hash = window.location.hash || "#home";
  const targetId = hash.substring(1);
  const targetSection = document.getElementById(targetId);

  if (targetSection) {
    // Update active visual state
    containers.forEach((container) => {
      container.classList.remove("active");
      container.classList.remove("overlay");
      container.style.pointerEvents = "";
      container.style.filter = "";
    });
    targetSection.classList.add("active");

    // Update Nav Links
    myNavLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === hash) {
        link.classList.add("active");
      }
    });

    // Handle scroll to top if needed
    targetSection.scrollTop = 0;
  }
}

navToggler.addEventListener("click", () => {
  aside.classList.toggle("show");
  navToggler.classList.toggle("open");
  containers.forEach((container) => {
    if (aside.classList.contains("show")) {
      container.classList.add("overlay");
      container.style.pointerEvents = "none";
      container.style.filter = "blur(2px)";
    } else {
      container.classList.remove("overlay");
      container.style.pointerEvents = "";
      container.style.filter = "";
    }
  });
});

// --- Hire Me Logic ---
document.querySelectorAll(".hire-me").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    // Hash handles navigation, but we want smooth scroll specifically for the form
    setTimeout(() => {
      const contactForm = document.querySelector("#contact form");
      if (contactForm) {
        contactForm.scrollIntoView({ behavior: "smooth" });
      }
    }, 400); // Wait for transition
  });
});

// --- Download CV ---
const cvBtn = document.querySelector(".btn-cv");
if (cvBtn) {
  cvBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const cvLink = "./files/CALLISTUS-NGEYWA-Resume.pdf";
    const link = document.createElement("a");
    link.href = cvLink;
    link.download = "Ngeywa_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
}
