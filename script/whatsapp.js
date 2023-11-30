const whatsapp_container = document.querySelector(".whatsapp-container");
const whatsapp_close = document.querySelector(".whatsapp-close");


$(document).ready(function(){
    $(whatsapp_container).delay(1400).animate({
        opacity: '1',
        left: '30'
    }, "slow",function() {
        $(whatsapp_container).css('pointer-events', 'auto');
    });
});
whatsapp_close.addEventListener("click", () =>{
    whatsapp_container.style.display = "none";
});