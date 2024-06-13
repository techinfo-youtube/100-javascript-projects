let tags = document.getElementById("tags");
let inputTag = document.getElementById("input-tag");

inputTag.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    const tag = document.createElement("li");
    const tagContent = inputTag.value.trim();
    if (tagContent !== "") {
      tag.innerText = tagContent;
      tag.innerHTML += "<button class='delete-button'>X</button>";
      tags.appendChild(tag);
      inputTag.value = "";
    }
  }
});

tags.addEventListener("click", function (event) {
  if (event.target.classList.contains("delete-button")) {
    event.target.parentNode.remove();
  }
});
