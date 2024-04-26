const slider = document.querySelector(".slider-inner");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let current_image = 0;

nextBtn.addEventListener("click", () => {
  if (current_image < slider.children.length - 4) {
    current_image++;
    slider.style.transitionDuration = "0.5s";
    slider.style.transform = `translate(-${current_image * 350}px)`;
  } else {
    return;
  }
});
prevBtn.addEventListener("click", () => {
  if (current_image > 0) {
    current_image--;
    slider.style.transitionDuration = "0.5s";
    slider.style.transform = `translate(-${current_image * 350}px)`;
  } else {
    return;
  }
});
