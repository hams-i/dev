$(window).on("load",function(){
    var pageTitle = document.title;
    var attentionMessage = 'Kaliteli Bir An İçin';
    document.addEventListener('visibilitychange', function(e) {
        var isPageActive = !document.hidden;

        if(!isPageActive){
            document.title = attentionMessage;
        }else {
            document.title = pageTitle;
        }
    });
});