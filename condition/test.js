let num = 0
if (num > 0) {
    output = "The number is Positive.";
  } else if (num < 0) {
   output = "The number is Negative.";
  } else if (num === 0) {
    output = "The number is Zero.";
  } else {
    output = "Please enter a valid number.";
  }

document.getElementById("demo").innerHTML = output;
  