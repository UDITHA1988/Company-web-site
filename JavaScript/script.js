const hamburger = document.querySelector(".hamburger");
const hamMenu = document.querySelector(".ham-menu");
const ham = document.querySelector(".ham");


hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    hamMenu.classList.toggle("active");
    ham.classList.toggle("active");
})

document.querySelectorAll(".nav - link").forEach(n => n.
    addEventListener("click", () => {
        hamburger.classList.remove("active");
        hamMenu.classList.remove("active");
    }))
