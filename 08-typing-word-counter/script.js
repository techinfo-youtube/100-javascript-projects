let wordCounts = function (words) {
  document.getElementById("output").innerHTML =
    "Words Length is " + words + " 😎";
};

document.getElementById("btn").onclick = function () {
  wordCounts(document.getElementById("words").value.length);
};
