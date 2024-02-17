const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});
const hiddenElements = document.querySelectorAll(".hiddenLeft");
hiddenElements.forEach((el) => observer.observe(el));

const observerRight = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenRightElements = document.querySelectorAll(".hiddenRight");
hiddenRightElements.forEach((el) => observerRight.observe(el));

document.querySelector(".closeBtn").addEventListener("click", function () {
  document.querySelector(".menuContainer").style.display = "none";
});

document.querySelector(".menu").addEventListener("click", function () {
  document.querySelector(".menuContainer").style.display = "block";
});
