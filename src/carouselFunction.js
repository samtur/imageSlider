const carouselFunction = () => {
  const buttons = document.querySelectorAll("[data-carousel-button]");
  // Function for passing data-active data tag around
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const offset = button.dataset.carouselButton === "next" ? 1 : -1;
      const slides = button
        .closest("[data-carousel]")
        .querySelector("[data-slides]");

      const selectors = button
        .closest("[data-carousel]")
        .querySelector("[data-selector]");

      const activeSlide = slides.querySelector("[data-active]");
      const activeSelector = selectors.querySelector("[data-active]");

      let newIndex = [...slides.children].indexOf(activeSlide) + offset;
      if (newIndex < 0) newIndex = slides.children.length - 1;
      if (newIndex >= slides.children.length) newIndex = 0;

      selectors.children[newIndex].dataset.active = true;
      delete activeSelector.dataset.active;
      slides.children[newIndex].dataset.active = true;
      delete activeSlide.dataset.active;
    });
  });

  // Function for timed interval image change
  const nextBtn = document.querySelector(".next");
  setInterval(function () {
    nextBtn.click();
  }, 5000);
};

export { carouselFunction };
