const body: HTMLElement | null = document.body;
const slides: NodeListOf<Element> = document.querySelectorAll(".slide");
const leftBtn: HTMLElement | null = document.getElementById("left");
const rightBtn: HTMLElement | null = document.getElementById("right");

let activeSlide: number = 0;

if (rightBtn && leftBtn) {
  rightBtn.addEventListener("click", () => {
    activeSlide++;

    if (activeSlide > slides.length - 1) {
      activeSlide = 0;
    }

    setBgToBody();
    setActiveSlide();
  });

  leftBtn.addEventListener("click", () => {
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
  slides.forEach((slide) => slide.classList.remove("active"));

  if (slides[activeSlide]) {
    slides[activeSlide].classList.add("active");
  }
}
