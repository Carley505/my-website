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
      container.classList.add("open");
    } else {
      container.classList.remove("open");
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
