const accordions = document.querySelectorAll(".accordion");

accordions.forEach((section) => {
  section.addEventListener("click", function () {
    // change the background of the section
    this.classList.toggle("active");
    // open panel on click
    let panel = this.nextElementSibling;

    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
});
