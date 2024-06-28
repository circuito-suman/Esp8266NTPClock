// script.js

document.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed");

  // Toggle dark mode
  const darkModeToggle = document.createElement("button");
  darkModeToggle.innerText = "Toggle Dark Mode";
  darkModeToggle.style.position = "fixed";
  darkModeToggle.style.top = "10px";
  darkModeToggle.style.right = "10px";
  darkModeToggle.style.padding = "10px";
  darkModeToggle.style.background = "#343a40";
  darkModeToggle.style.color = "#fff";
  darkModeToggle.style.border = "none";
  darkModeToggle.style.borderRadius = "5px";
  darkModeToggle.style.cursor = "pointer";

  document.body.appendChild(darkModeToggle);

  darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    darkModeToggle.innerText = "Toggle Bright Mode";
  });
});

// Function to highlight code blocks
function highlightCodeBlocks() {
  const codeBlocks = document.querySelectorAll("pre code");
  codeBlocks.forEach((block) => {
    block.innerHTML = block.innerHTML
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  });
}

highlightCodeBlocks();
