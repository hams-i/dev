photos =[
    "main-photo-1.jpg",
    "main-photo-2.jpg",
    "main-photo-3.jpg",
    "main-photo-4.jpg",
]

var mainimg = document.querySelector("#main-photo");

mainimg.src = "images/"+photos[Math.floor(Math.random() * 4)];