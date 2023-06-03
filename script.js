// select elements
const darkMode = document.getElementById("toggle-icon");
const dateElement = document.getElementById("date");
const timeElement = document.getElementById("time");

// responsive menu code
const menuToggle = document.querySelector(".menu-toggle");
const navList = document.querySelector("nav ul");
menuToggle.addEventListener("click", function () {
  navList.classList.remove("hide");
  navList.classList.toggle("show");

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

// code  to remove hide class from the nav
window.onresize = function (event) {
  if (window.matchMedia("(min-width: 768px)").matches) {
    navList.classList.remove("hide");
  }
};

// dark mode and light mode
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

// Implemented automatic time and date to display
setInterval(() => {
  const date = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedDate = date.toLocaleDateString("en-US", options);
  dateElement.innerHTML = formattedDate;

  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const amOrPm = hours >= 12 ? "PM" : "AM";
  const twelveHourFormat = hours > 12 ? hours - 12 : hours;
  const timeString = `${twelveHourFormat}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds} ${amOrPm}`;
  timeElement.innerHTML = timeString;
}, 1000);

// const now = new Date();
// console.log(now.toLocaleString("en-US")); => //output   6/3/2023, 7:09:19 PM
