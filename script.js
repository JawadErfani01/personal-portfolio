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

// responsive menu code
const menuToggle = document.querySelector(".menu-toggle");
const navList = document.querySelector("nav ul");

menuToggle.addEventListener("click", function () {
  navList.classList.remove("hide");
  navList.classList.toggle("show");
  // access ul and li and event handlers
  const ulElement = document.getElementById("myUl");
  const liElements = ulElement.querySelectorAll("li");

  // loop through each li element
  liElements.forEach(function (li) {
    li.addEventListener("click", function () {
      navList.classList.remove("show");
      navList.classList.toggle("hide");
    });
  });
});

window.onresize = function (event) {
  if (window.matchMedia("(min-width: 768px)").matches) {
    navList.classList.remove("hide");
  }
};
