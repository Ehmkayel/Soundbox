const menu = document.querySelector("#menu");
const openNav = document.querySelector("#open-nav");
const closeNav = document.querySelector("#close-nav");
const search = document.querySelector(".search");

openNav.addEventListener("click", () => {
    menu.style.display = "flex";
    openNav.style.display = "none";
    closeNav.style.display = "inline-block";
    search.style.display = "flex";
})
closeNav.addEventListener("click", () =>{
    menu.style.display = "none";
    openNav.style.display = "inline-block";
    closeNav.style.display = "none";
    search.style.display = "none";
})

function largeImage(){
    let image = document.createElement("img")
    image.src = "assets/mainheadset.png";
    document.body.appendChild(image)
}
