let menuicon = document.getElementById("Menu-icon");
let header = document.getElementById("mobile");
let CloseIcon = document.querySelector(".close-icon");

menuicon.addEventListener("click", OpenMenu);
CloseIcon.addEventListener("click", closeMenu);

function OpenMenu() {
    console.log("menu is clicked");
    header.classList.add("active");
}
function closeMenu() {
    // alert("Closed")
    header.classList.remove("active")
}

function imgSlider(anything){
    document.querySelector(".starbucks").src = anything;  
}