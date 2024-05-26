setInterval(function () {
  let currentDateTime = new Date();
  // ====== DATE ========
  let currentDate = currentDateTime.getDate();
  let currentMonth = currentDateTime.getMonth();
  let currentYear = currentDateTime.getFullYear();
  document.getElementById("date").innerHTML =
    currentDate + "/" + currentMonth + "/" + currentYear;
  // ====== DATE ========
  // ====== TIME ===========
  let Hourse = currentDateTime.getHours();
  let Minutes = currentDateTime.getMinutes();
  let Seconds = currentDateTime.getSeconds();
  let period = "AM";
  //conditions for AM PM
  if (Hourse >= 12) {
    period = "PM";
  }
  //conduition for 12 Hourse time
  if (Hourse > 12) {
    Hourse = Hourse - 12;
  }
  if (Minutes < 10) {
    Minutes = "0" + Minutes;
  }
  if (Seconds < 10) {
    Seconds = "0" + Seconds;
  }
  let Clock = Hourse + ":" + Minutes + ":" + Seconds + period;
  let time = (document.getElementById("time").innerHTML = Clock);
});
