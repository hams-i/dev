window.addEventListener('load', function() {
    const menu_big_container = document.querySelector(".menu-big-photo");
    const product_photo = document.querySelector(".big-photo-img");

    const menus = document.querySelectorAll('.menu');

    function openProductPhoto(){
        var product_the_photo = menu.firstChild.src;
        menu_big_container.style.display = "flex";
        console.log(product_the_photo);
        product_photo.src = product_the_photo;
    }

    function closeProductPhoto(){
        openProductPhoto();
    }

    menus.forEach(menu=>{
        menu.addEventListener('click', () => {
            openProductPhoto();
        });
        menu_big_container.addEventListener('click', () => {
            closeProductPhoto();
        });
        menu.addEventListener("touchend", () => {
            openProductPhoto();
        });
        menu_big_container.addEventListener('touchend', () => {
            closeProductPhoto();
        });
    });
    
});