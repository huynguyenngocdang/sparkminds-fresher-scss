document.addEventListener("DOMContentLoaded", function () {
  const sliderMain = document.querySelector(".slider__main");
  const sliderItems = document.querySelectorAll(".slider__item");
  const nextBtn = document.querySelector(".slider__next");
  const prevBtn = document.querySelector(".slider__prev");

  const sliderItemWidth = sliderItems[0].offsetWidth;
  const sliderLength = sliderItems.length;
  let positionX = 0;
  let index = 0;
  nextBtn.addEventListener("click", function () {
    handleChangeSlide(1);
  });
  prevBtn.addEventListener("click", function () {
    handleChangeSlide(-1);
  });
  function handleChangeSlide(direction) {
    if (direction === 1) {
      if (index >= sliderLength - 1) {
        index = 0;
        positionX = 0;
      } else {
        index++;
        positionX = -index * sliderItemWidth;
      }
    } else if (direction === -1) {
      if (index <= 0) {
        index = sliderLength - 1;
        positionX = -index * sliderItemWidth;
      } else {
        index--;
        positionX = -index * sliderItemWidth;
      }
    }
    sliderMain.style.transform = `translate(${positionX}px)`;
  }
  setInterval(function () {
    handleChangeSlide(1);
  }, 3000);
});
