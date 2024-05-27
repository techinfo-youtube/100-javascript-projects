let countDateTime = new Date("May 27, 2024 12:00:00").getTime();
let x = setInterval(function () {
  let now = new Date().getTime();
  let diffrence = countDateTime - now;

  let days = Math.floor(diffrence / (1000 * 60 * 60 * 24));
  let hours = Math.floor(
    (diffrence % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minutes = Math.floor((diffrence % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((diffrence % (1000 * 60)) / 1000);

  document.getElementById("timer").innerHTML =
    days + " DAYS | " + hours + "h : " + minutes + "m : " + seconds + "s";

  if (diffrence < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "Birthday Expire";
  }
});
