let userName = document.getElementById("userName");
let userMessage = document.getElementById("userMessage");
let userEmail = document.getElementById("userEmail");

// reset input firlds
let resetHandler = function () {
  userName.value = "";
  userEmail.value = "";
  userMessage.value = "";
};

// handle submit
let submitHandler = function () {
  if (
    (userName.value === "") |
    (userEmail.value === "") |
    (userMessage.value === "")
  ) {
    alert("Please Provide All Fields");
  } else {
    const conatctFormData =
      userName.value + " " + userEmail.value + " " + userMessage.value;
    localStorage.setItem("formData", conatctFormData);
    alert("Your Message Sent Successfully ");
    resetHandler();
  }
};
