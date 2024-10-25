const slideshow = () => {
  let index = 0;
  const next = document.querySelector(".next");
  const prev = document.querySelector(".prev");
  const dots = document.querySelectorAll(".dot");

  const showSlide = (slideIndex) => {
    const slides = document.querySelectorAll(".slide");

    slides.forEach((slide) => {
      slide.style.display = "none";
    });

    if (slideIndex >= slides.length) {
      slideIndex = 0;
      index = 0;
    }
    if (slideIndex < 0) {
      slideIndex = slides.length - 1;
      index = slides.length - 1;
    }
    slides[slideIndex].style.display = "block";

    // dots

    dots.forEach((dot) => {
      dot.style.backgroundColor = "#444";
    });

    dots[slideIndex].style.backgroundColor = "#46f511";
  };

  showSlide(index);

  next.addEventListener("click", () => {
    index++;
    showSlide(index);
  });
  prev.addEventListener("click", () => {
    index--;
    showSlide(index);
  });

  // dots
  for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener("click", () => {
      index = i;
      showSlide(index);
    });
  }
};

export { slideshow };
