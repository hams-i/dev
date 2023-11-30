const navbutton = document.querySelector(".burger")
const navlinks = document.querySelector(".phone-links-container")

navbutton.addEventListener("click", () =>{
    navbutton.classList.toggle('active');
    navlinks.classList.toggle('active');
});