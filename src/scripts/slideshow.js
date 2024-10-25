const slideshow = () => {
  let index = 0;
  const next = document.querySelector(".next");
  const prev = document.querySelector(".prev");

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
    console.log('slideindex:', slideIndex)
    slides[slideIndex].style.display = "block";
  };

  showSlide(index);

  next.addEventListener("click", () => {
    index++;
    console.log('index:', index)
    showSlide(index);
  });
  prev.addEventListener("click", () => {
    index--;
    showSlide(index);
  });
};

export { slideshow };
