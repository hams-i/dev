var popup_container = document.querySelector(".pop-up-container");
var popup = document.querySelector(".pop-up");
var close_button = document.querySelector(".close-button");
document.addEventListener('click', (e) => {
    if(e.target != popup){
        popup_container.style.display = "none";
    }
});