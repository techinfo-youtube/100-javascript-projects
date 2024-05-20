document.getElementById("orange").onclick = switchToOrange;
document.getElementById("green").onclick = switchToGreen;
document.getElementById("blue").onclick = switchToBlue;
document.getElementById("pink").onclick = switchToPink;

function switchToOrange() {
  document.getElementsByTagName("body")[0].style.backgroundColor = "orange";
  document.getElementsByTagName("body")[0].style.color = "white";
}
function switchToGreen() {
  document.getElementsByTagName("body")[0].style.backgroundColor = "green";
  document.getElementsByTagName("body")[0].style.color = "white";
}
function switchToBlue() {
  document.getElementsByTagName("body")[0].style.backgroundColor = "blue";
  document.getElementsByTagName("body")[0].style.color = "white";
}
function switchToPink() {
  document.getElementsByTagName("body")[0].style.backgroundColor = "pink";
  document.getElementsByTagName("body")[0].style.color = "black";
}
