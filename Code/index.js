const scroll = new LocomotiveScroll({
  el: document.querySelector('#main'),
  smooth: true
});

document.querySelector("#footerBackToTop p").addEventListener("click",() =>{
  scroll.scrollTo(0);
  console.log("Hello");
})

const hamburger = document.querySelector(".hamburger")
const nav_menu = document.querySelector(".nav-menu")

hamburger.addEventListener("click",()=>{
  hamburger.classList.toggle("active");
  nav_menu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  nav_menu.classList.remove("active");
}))


