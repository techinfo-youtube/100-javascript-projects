const name = prompt("Enter Your Name,", "name");
const today = new Date();
const hrs = today.getHours();

//bold
document.writeln("<b>");

if (hrs <= 12) document.write("Good Morning " + name + "!");
else if (hrs <= 18) document.write("good afternoon " + name + "!");
else document.write("Good Evening " + name + "!");
