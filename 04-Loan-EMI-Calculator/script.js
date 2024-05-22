function getEmi() {
  let amount = document.getElementById("amount").value;
  let intrest = document.getElementById("rate").value;
  let tenure = document.getElementById("tenure").value;

  // calculate intrest
  let intrestRate = (amount * (intrest * 0.01)) / tenure;

  // emi calclute
  const total = (amount / tenure + intrestRate).toFixed(2);

  document.getElementById("emi").innerHTML = "EMI : " + total + "/- RS";
}
