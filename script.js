window.addEventListener("scroll", function () {
  const elements = document.querySelectorAll(".animate-on-scroll");
  const windowHeight = window.innerHeight;

  elements.forEach(function (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const elementHeight = element.getBoundingClientRect().height;
    const animationStart = windowHeight - elementPosition;

    if (animationStart > 0 && animationStart < windowHeight + elementHeight) {
      element.classList.add("show");
    } else {
      element.classList.remove("show");
    }
  });
});
