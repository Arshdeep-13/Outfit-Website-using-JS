let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let image1 = document.getElementById("product_img")
let image2 = document.getElementById("product_img2")
let image3 = document.getElementById("product_img3")
btn1.addEventListener("click", function() {
    image1.style.display = "block";
    image2.style.display = "none";
    image3.style.display = "none";
});
btn2.addEventListener("click", function() {
    image2.style.display = "block";
    image1.style.display = "none";
    image3.style.display = "none";
});
btn3.addEventListener("click", function() {
    image3.style.display = "block";
    image2.style.display = "none";
    image1.style.display = "none";
});