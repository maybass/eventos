const box = document.querySelector("#box");
box.addEventListener("mouseenter", ()=> {
  box.style.background = "blue";
})

box.addEventListener("mouseleave", ()=> {
  box.style.background = "black";
})


