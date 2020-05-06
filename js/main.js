let navBar = document.querySelector("nav div");
let nav = document.querySelectorAll("header nav a");
let icon = document.createElement("img");
let click = false;

icon.setAttribute("src", "img/plusInit.png");
icon.setAttribute("alt", "iconPlus");
icon.id = "iconPlus";
navBar.insertBefore(icon,navBar.firstChild);

icon.addEventListener("mouseover",function (event) {
    icon.setAttribute("src","img/plusActive.png");
},false);

icon.addEventListener("mouseleave",function(event){
    icon.setAttribute("src","img/plusInit.png");
},false);

icon.addEventListener("click",function(event){
    click = !click;
    if(!click) {
        nav.forEach(n => n.style.visibility = "visible");
        navBar.style.border = "gray 2px solid";
        navBar.style.backgroundColor = "rgba(0,0,0,0.7)";
    }
    if(click){
        nav.forEach(n => n.style.visibility = "hidden");
        navBar.style.border = "unset";
        navBar.style.backgroundColor = "unset";
    }
},false);







