const imgs = document.querySelectorAll('.gallery_img');
const fullPage = document.querySelector('#fullpage');
const fullpage_img = document.querySelector('#fullpage_img');

imgs.forEach(img=>{
    img.addEventListener('click', function() {
        fullPage.style.display = 'block';
        fullpage_img.style.backgroundImage = 'url(' + img.src + ')';
    });
});