// Change active color on Navigation Links

const myNavLinks = document.querySelectorAll(".nav-link");

const navToggler = document.querySelector(".nav-toggler");
const aside = document.querySelector(".aside");

const containers = document.querySelectorAll(".container");

myNavLinks.forEach((link) => {
 selectSection(link);
});

function selectSection(link){
   link.addEventListener("click", (e) => {
    myNavLinks.forEach((link) => {
      link.classList.remove("active");
    });
    e.target.classList.add("active");
    aside.classList.remove("show");
    navToggler.classList.remove("open");
    containers.forEach((container) => {
      container.classList.remove("overlay");
      container.style.pointerEvents = "";
      container.style.filter = "";
    });
    addContainer(e.target);
  });
}

function updateNav(element){
  myNavLinks.forEach((link) => {
   link.classList.remove("active");
});
const target = element;
console.log(target)
}

document.querySelector(".hire-me").addEventListener("click", (e)=>{
  const target = e.target.getAttribute("href").split("#")[1];

  updateNav(target);
})

// open close Aside/Nav when on smaller screens

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

function addContainer(ele) {
  const target = ele.getAttribute("href").split("#")[1];

  containers.forEach((item) => {
    item.classList.remove("active");
  });
  document.querySelector("#" + target).classList.add("active");
  
}

const hireMe = document.querySelectorAll(".hire-me");
hireMe.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    addContainer(btn);
    updateNav(btn);
    // Scroll to the contact form after showing the contact section
    setTimeout(() => {
      const contactForm = document.querySelector("#contact form");
      if (contactForm) {
      contactForm.scrollIntoView({ behavior: "smooth" });
      }
    }, 100); // Delay to ensure section is visible
  });
});



// Download CV functionality
const cvBtn = document.querySelector(".btn-cv");
cvBtn.addEventListener("click", (e) => {
  e.preventDefault();
  // Add your CV download logic here
  const cvLink = "./files/CALLISTUS-NGEYWA-Resume.pdf"; // Replace with your CV file path
  const link = document.createElement("a");
  link.href = cvLink;
  link.download = "Ngeywa_CV.pdf"; // Replace with your CV file name
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});