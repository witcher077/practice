
panels=document.getElementsByClassName("panel1");
console.log(panels)
for(let panel=0;panel<panels.length;panel++) {
    panels[panel].addEventListener('click',()=>{
        removeActiveClass();
        panels[panel].classList.add("active");
    });
}

function removeActiveClass(){
    for(let panel=0;panel<panels.length;panel++){
        panels[panel].classList.remove("active");
    }
}