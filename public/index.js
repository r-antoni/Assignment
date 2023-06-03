const toggleButton = document.querySelector(".toggleButton")
const mobileMenu = document.querySelector(".mobileMenu")

toggleButton.addEventListener("click", () =>{
    mobileMenu.classList.toggle("hidden")
})