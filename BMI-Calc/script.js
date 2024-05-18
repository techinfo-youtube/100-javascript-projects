// formula bmi = kg / (h /100 * h /100)

document.getElementById("submit").addEventListener("click", getBmi);

function getBmi() {
  let cm = parseInt(document.getElementById("cm").value);
  let kg = parseFloat(document.getElementById("kg").value);
  let bmi;
  let newCm = parseFloat(cm / 100);
  bmi = kg / (newCm * newCm);
  bmi = bmi.toFixed(1);
  document.getElementById("result").innerHTML = "Your BMI is " + bmi + "😉";
}
