// Simple interactive feature
document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header h1");
  header.addEventListener("mouseover", () => {
    header.style.color = "#ff5722"; // orange when hovered
  });
  header.addEventListener("mouseout", () => {
    header.style.color = "#00adb5"; // back to teal
  });
});
