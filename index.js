const sliderElement = document.querySelectorAll(".slider");
const prevBtn = document.querySelector(".box-1");
const nextBtn = document.querySelector(".box-2");
let current = 0;

nextBtn.addEventListener("click", () => {
  nextImage();
});

prevBtn.addEventListener("click", () => {
  previousImage();
});

function reset() {
  for (let i = 0; i < sliderElement.length; i++) {
    sliderElement[i].classList.remove("active");
  }
}



function nextImage() {
  reset();
  
   if (current === sliderElement.length - 1) {
     current = -1;
   }
   sliderElement[current + 1].classList.add("active");
   current++;
}

function previousImage() {
  reset();
  if (current === 0) {
    current = sliderElement.length;
  }
  sliderElement[current - 1].classList.add("active");
  current--;

}

setInterval(nextImage, 3000);