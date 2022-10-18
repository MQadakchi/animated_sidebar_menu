const open = document.querySelector(".open");
const close = document.querySelector(".close");
const menuLayer = document.querySelector(".menu-layer-1");

open.addEventListener("click", () => menuLayer.classList.add("active"));
close.addEventListener("click", () => menuLayer.classList.remove("active"));
