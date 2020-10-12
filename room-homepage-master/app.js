const open = document.getElementById("open");
const close = document.getElementById("close");
const sidebar = document.getElementById("sidebar");

open.addEventListener("click", openFunc);
close.addEventListener("click", closeFunc);

function openFunc() {
    sidebar.style.height = "100%";
}

function closeFunc() {
    sidebar.style.height = "0";
}