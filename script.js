// dark mode scripts
const darkMode = document.getElementById("toggle-icon");

function toggleDarkMode() {
  var element = document.body;
  const dark = element.classList.toggle("dark-mode");

  console.log(dark);
  if (dark) {
    element.classList.add("dark-mode");
    darkMode.classList.add("fa-sun-o");
    darkMode.classList.remove("fa-moon-o");
  } else {
    element.classList.remove("dark-mode");
    darkMode.classList.remove("fa-sun-o");
    darkMode.classList.add("fa-moon-o");
  }
}
