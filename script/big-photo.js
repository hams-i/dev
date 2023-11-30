
window.addEventListener('load', function() {
    const menu_big_container = document.querySelector(".menu-big-photo");
    const product_photo = document.querySelector(".big-photo-img");

    const menus = document.querySelectorAll('.menu');

    menus.forEach(menu=>{
        menu.addEventListener('click', () => {
            var product_the_photo = menu.firstChild.src;
            menu_big_container.style.display = "flex";
            console.log(product_the_photo);
            product_photo.src = product_the_photo;
        });
        menu_big_container.addEventListener('click', () => {
            menu_big_container.style.display = "none";
        });
    });
});