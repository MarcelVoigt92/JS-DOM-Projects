const modeButton = document.querySelector(".button-icon");
modeButton.addEventListener("click", () => {
  // change background color
  const background = document.body;
  background.classList.toggle("active");

  // change Text color
  const titleMode = document.querySelector(".title-mode");
  if (titleMode.innerHTML === "Night Mode") {
    titleMode.innerHTML = "Day Mode";
    titleMode.style.filter = "invert(1)";
  } else {
    titleMode.innerHTML = "Night Mode";
    titleMode.style.filter = "invert(0)";
  }

  // Icon change
  const darkIcon = document.querySelector(".night");
  const lightIcon = document.querySelector(".day");

  if (darkIcon.style.display === "none") {
    darkIcon.style.display = "block";
    lightIcon.style.display = "none";
    console.log(darkIcon);
  } else {
    darkIcon.style.display = "none";
    lightIcon.style.display = "block";
  }
});
