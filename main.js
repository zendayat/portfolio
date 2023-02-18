// function toggleMenu() {
//     if (document.getElementById("bar").style.height > "100px"){
//         document.getElementById("bar").style.height = "0";
//     }
//     else {
//         document.getElementById("bar").style.height = "450px";
//     }
// }
var menuList = document.getElementById("bar");
menuList.style.maxHeight = "0px";
function toggleMenu() {
    if (menuList.style.maxHeight == "0px"){
        menuList.style.maxHeight = "450px";
    }
    else {
        menuList.style.maxHeight = "0px";
    }
}

// const body = document.getElementById("main");


// main.addEventListener("click", function() {
//     menuList.style.maxHeight = "0px";
// });
