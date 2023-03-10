function initCarousel() {
  const width = document.querySelector(".carousel__inner");
  const slidesCount = document.querySelectorAll(".carousel__slide").length;
  const arrowLeft = document.querySelector(".carousel__arrow_left");
  const arrowRight = document.querySelector(".carousel__arrow_right");
  let position = 0;

  arrowLeft.style.display = "none";

  arrowLeft.onclick = function () {
    arrowRight.style.display = "";
    position -= 1;
    translate(position * width.offsetWidth);
    if (position === 0) this.style.display = "none";
  };

  arrowRight.onclick = function () {
    arrowLeft.style.display = "";
    position += 1;
    translate(position * width.offsetWidth);
    if (position === slidesCount - 1) this.style.display = "none";
  };

  function translate(position) {
    document.querySelector(
      ".carousel__inner"
    ).style.transform = `translateX(-${position}px)`;
  }
}
