const menu = document.querySelector("#menu");
const openNav = document.querySelector("#open-nav");
const closeNav = document.querySelector("#close-nav");
const search = document.querySelector(".search");
const buttons = document.querySelectorAll(".popup");

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

buttons.forEach(button => {
    const popup = button.closest('.item').querySelector('.wrapper');
    const close = button.closest('.item').querySelector('.container-close');

button.addEventListener("click", () => {
  popup.style.display = "block";
});

close.addEventListener("click", () => {
    popup.style.display = "none";
  });


  popup.addEventListener("click", () => {
    popup.style.display = "none";
  });
});