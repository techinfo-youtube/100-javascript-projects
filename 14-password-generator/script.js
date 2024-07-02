function generate() {
  let dictionary = "";
  if (document.getElementById("lowercaseLetters").checked) {
    dictionary += "qwertyuiopasdfgghjklmnbvc";
  }
  if (document.getElementById("uppercaseLetters").checked) {
    dictionary += "QWERTYUIOPASDGFHKJL";
  }
  if (document.getElementById("digits").checked) {
    dictionary += "1234567890";
  }
  if (document.getElementById("symbols").checked) {
    dictionary += "!@#$%^&*()[]";
  }
  const length = document.querySelector('input[type="range"]').value;

  if (length < 1 || dictionary.length === 0) {
    return;
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    const pos = Math.floor(Math.random() * dictionary.length);
    password += dictionary[pos];
  }

  document.querySelector('input[type="text"]').value = password;
}

[
  ...document.querySelectorAll('input[type="checkbox"], button.generate'),
].forEach((elem) => {
  elem.addEventListener("click", generate);
});

document.querySelector('input[type="range"]').addEventListener("input", (e) => {
  document.querySelector("div.range span").innerHTML = e.target.value;
  generate();
});

document.querySelector("div.password button").addEventListener("click", () => {
  const pass = document.querySelector('input[type="text"]').value;
  navigator.clipboard.writeText(pass).then(() => {
    document.querySelector("div.password button").innerHTML = "copied!";
    setTimeout(() => {
      document.querySelector("div.password button").innerHTML = "copy";
    }, 1000);
  });
});

generate();
