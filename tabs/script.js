const tabButtons = document.querySelectorAll(".tablinks");
const container = document.querySelector(".container");

container.addEventListener("click", (e) => {
  const id = e.target.dataset.id;

  // finding div's which contain the id and remove the class of "active"
  if (id) {
    tabButtons.forEach((tab) => {
      tab.classList.remove("active");
    });

    e.target.classList.add("active");

    const tabContent = document.querySelectorAll(".tabcontent");

    tabContent.forEach((content) => {
      container.classList.remove("active");
    });

    const element = document.getElementById(id);

    element.classList.add("active");
  }
});
