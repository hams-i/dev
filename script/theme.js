document.querySelector(".theme-mode").addEventListener("click", () =>{
    if(localStorage.getItem('Surname_Theme') == "dark"){
        document.body.classList.remove('dark');
        document.body.classList.add('light');
        localStorage.setItem('Surname_Theme', "light");
        return
    }

    if(localStorage.getItem('Surname_Theme') == "light"){
        document.body.classList.remove('light');
        document.body.classList.add('dark');
        localStorage.setItem('Surname_Theme', "dark");
        return
    }
});
document.querySelector(".p-theme-mode").addEventListener("click", () =>{
    if(localStorage.getItem('Surname_Theme') == "dark"){
        document.body.classList.remove('dark');
        document.body.classList.add('light');
        localStorage.setItem('Surname_Theme', "light");
        return
    }

    if(localStorage.getItem('Surname_Theme') == "light"){
        document.body.classList.remove('light');
        document.body.classList.add('dark');
        localStorage.setItem('Surname_Theme', "dark");
        return
    }
});

if(localStorage.getItem('Surname_Theme') == null){
    localStorage.setItem('Surname_Theme', 'dark');
}else{
    document.body.classList.add(localStorage.getItem('Surname_Theme'));
}
