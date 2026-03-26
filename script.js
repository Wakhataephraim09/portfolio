// TYPING EFFECT
const text = ["Full-Stack Developer", "React Developer", "Backend Developer"];
let i = 0, j = 0, currentText = "", isDeleting = false;

function type() {
  if (!isDeleting && j <= text[i].length) {
    currentText = text[i].substring(0, j++);
  } else if (isDeleting && j >= 0) {
    currentText = text[i].substring(0, j--);
  }

  document.getElementById("typing").innerHTML = currentText;

  if (j === text[i].length) isDeleting = true;
  if (j === 0) {
    isDeleting = false;
    i = (i + 1) % text.length;
  }

  setTimeout(type, isDeleting ? 50 : 100);
}
type();
