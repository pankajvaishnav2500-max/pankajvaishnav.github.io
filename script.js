const toggleBtn = document.getElementById("themeToggle");

// Check saved theme on page load
if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light");
  toggleBtn.textContent = "☀️";
} else {
  toggleBtn.textContent = "🌙";
}

// Toggle theme on click
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");

  if (document.body.classList.contains("light")) {
    toggleBtn.textContent = "☀️";
    localStorage.setItem("theme", "light");
  } else {
    toggleBtn.textContent = "🌙";
    localStorage.setItem("theme", "dark");
  }
});
