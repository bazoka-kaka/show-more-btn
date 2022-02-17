const readMoreBtn = document.querySelector(".read-more");
const text = document.querySelector(".more-text");

readMoreBtn.addEventListener("click", () => {
  text.classList.toggle("show-more");
  if (readMoreBtn.innerHTML === "Read More") {
    readMoreBtn.innerHTML = "Read Less";
  } else {
    readMoreBtn.innerHTML = "Read More";
  }
});
