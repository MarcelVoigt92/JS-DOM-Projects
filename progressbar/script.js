const circles = document.querySelectorAll(".circle");
const progressBar = document.querySelector(".progress-bar");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

// Postion of the active circle
let activeCircle = 1;

// next button event listener
nextBtn.addEventListener("click", () => {
  // increment of the "current circle" which is 1
  activeCircle++;
  // Making sure active circles can only be 4
  if (activeCircle > circles.length) {
    activeCircle = circles.length;
  }
  if (activeCircle === circles.length) {
    nextBtn.disabled = true;
  }
  if (activeCircle > 1) {
    prevBtn.disabled = false;
  }

  update();
});

prevBtn.addEventListener("click", () => {
  activeCircle--;

  if (activeCircle < 1) {
    activeCircle = 1;
  }
  if (activeCircle === 1) {
    nextBtn.disabled = false;
    prevBtn.disabled = true;
  }
  update();
});

const update = () => {
  // making the circle black when active
  circles.forEach((circle, index) => {
    if (index < activeCircle) {
      circle.classList.add("active-circle");
    } else {
      circle.classList.remove("active-circle");
    }
  });
  const activeCircles = document.querySelectorAll(".active-circle");
  progressBar.style.width =
    (activeCircles.length - 1) / (circles.length - 1) - 100 + "%";
};
