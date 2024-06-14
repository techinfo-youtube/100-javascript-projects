document.querySelectorAll(".letters>span").forEach((element) => {
  element.addEventListener("mouseover", (event) => {
    bounce(event.target);
  });
});

function bounce(letter) {
  if (!letter.classList.contains("bounce")) {
    letter.classList.add("bounce");
    setTimeout(function () {
      letter.classList.remove("bounce");
    }, 1000);
  }
}
