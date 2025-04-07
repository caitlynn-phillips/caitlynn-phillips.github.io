window.addEventListener("load", function () {
    document
      .querySelector(".mobile-menu-btn")
      .addEventListener("click", function () {
        document.querySelector("nav ul").classList.toggle("show");
        this.classList.toggle("active");
      });
  
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
        });
        document.querySelector("nav ul").classList.remove("show");
        document.querySelector(".mobile-menu-btn").classList.remove("active");
      });
    });
  });