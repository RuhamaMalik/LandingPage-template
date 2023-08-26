
let openDrawer = () => {
    let tabs = document.querySelector(".tabs");
    tabs.classList.toggle("active");
}

document.querySelector(".btns i").addEventListener("click", openDrawer);
