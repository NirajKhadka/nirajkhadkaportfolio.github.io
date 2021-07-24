const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll(".nav-link");
const aboutLeft = document.getElementsByClassName("about-left");
const aboutRight = document.getElementsByClassName("about-right");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop - sectionHeight / 4) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach((li) => {
    console.log(current);
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
});
