var body = document.body;
var slides = document.querySelectorAll(".slide");
var leftBtn = document.getElementById("left");
var rightBtn = document.getElementById("right");
var activeSlide = 0;
if (rightBtn && leftBtn) {
    rightBtn.addEventListener("click", function () {
        activeSlide++;
        if (activeSlide > slides.length - 1) {
            activeSlide = 0;
        }
        setBgToBody();
        setActiveSlide();
    });
    leftBtn.addEventListener("click", function () {
        activeSlide--;
        if (activeSlide < 0) {
            activeSlide = slides.length - 1;
        }
        setBgToBody();
        setActiveSlide();
    });
}
setBgToBody();
function setBgToBody() {
    if (body) {
        body.style.backgroundImage =
            slides[activeSlide].style.backgroundImage || "";
    }
}
function setActiveSlide() {
    slides.forEach(function (slide) { return slide.classList.remove("active"); });
    if (slides[activeSlide]) {
        slides[activeSlide].classList.add("active");
    }
}
