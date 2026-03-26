// SCROLL ANIMATION
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  let scrollY = window.pageYOffset;

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 200;

    if (scrollY > sectionTop) {
      section.style.opacity = 1;
      section.style.transform = "translateY(0)";
    }
  });
});

// INITIAL STATE
sections.forEach(section => {
  section.style.opacity = 0;
  section.style.transform = "translateY(50px)";
  section.style.transition = "all 0.6s ease";
});
