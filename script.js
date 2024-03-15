var cont = "";//display on screen
var roundTo = 10;//digits after decimal point

//Function for ON and OFF the calculator
function fun() {
  var x = document.getElementById("t").value;
  var but = document.getElementsByClassName("b");
  if (x == "OFF MODE") {
    document.getElementById("t").value = "";
    for (var i = 0; i < but.length; i++) {
      but[i].disabled = false;
    }
  } else {
    document.getElementById("t").value = "OFF MODE";
    for (var i = 0; i < but.length; i++) {
      but[i].disabled = true;
    }
  }
}

//Function for every number button
function press(button) {
  var x = document.getElementById("t").value;

  if (x == "No. of digits:") {
    roundTo = button.value;
    if (
      cont == "SYNTAX ERROR" ||
      cont == "ERROR" ||
      cont == "No. of digits:" ||
      cont == ""
    ) {
      document.getElementById("t").value = "";
    } else {
      document.getElementById("t").value = Number(eval(cont).toFixed(roundTo));
    }
  } else if (x == "SYNTAX ERROR" || x == "ERROR") {
    document.getElementById("t").value = button.value;
  } else {
    document.getElementById("t").value += button.value;
  }
}

//Function for all simple mathematic operations
function perform(button) {
  var x = document.getElementById("t").value;
  if (x == "No. of digits:") {
    document.getElementById("t").value = "ERROR";
    cont = "";
  } else if (x == "SYNTAX ERROR" || x == "ERROR") {
    document.getElementById("t").value = button.value;
  } else {
    document.getElementById("t").value += button.value;
  }
}

//Function for power operation
function power() {
  var x = document.getElementById("t").value;
  if (x == "No. of digits:") {
    document.getElementById("t").value = "ERROR";
    cont = "";
  } else if (x == "SYNTAX ERROR" || x == "ERROR") {
    document.getElementById("t").value = "**";
  } else {
    document.getElementById("t").value += "**";
  }
}

//Function for backspace button
function backspc() {
  var x = document.getElementById("t").value;
  if (x == "No. of digits:") {
    document.getElementById("t").value = "ERROR";
    cont = "";
  } else if (x == "SYNTAX ERROR" || x == "ERROR") {
    document.getElementById("t").value = "";
  } else {
    document.getElementById("t").value = x.substring(0, x.length - 1);
  }
}

//Function for square root operation
function root() {
  var x = document.getElementById("t").value;
  if (x == "No. of digits:") {
    document.getElementById("t").value = "ERROR";
    cont = "";
  } else if (x == "SYNTAX ERROR" || x == "ERROR") {
    document.getElementById("t").value = "ERROR";
  } else {
    document.getElementById("t").value =
      x.substring(0, x.length - 1) +
      Math.sqrt(parseInt(x.charAt(x.length - 1)));
  }
}

//Function to round the decimal places
function roud() {
  cont = document.getElementById("t").value;
  document.getElementById("t").value = "No. of digits:";
}

//Function for equal to operation
function res(button) {
  var x = document.getElementById("t").value;
  try {
    document.getElementById("t").value = Number(eval(x).toFixed(roundTo));
  } catch (error) {
    document.getElementById("t").value = "SYNTAX ERROR";
    cont = "";
  }
}
