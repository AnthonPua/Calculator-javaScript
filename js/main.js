var currentInput = "";
var firstOperand = "";
var secondOperand = "";
var operator = "";

function clr() {
  currentInput = "";
  firstOperand = "";
  secondOperand = "";
  operator = "";
  document.getElementById("inputext").value = "0";
}

function del() {
  currentInput = currentInput.slice(0, -1);
  document.getElementById("inputext").value = currentInput || "0";
}

function off() {
  currentInput = "";
  firstOperand = "";
  secondOperand = "";
  operator = "";
  document.getElementById("inputext").value = "Turned Off";
}

function number(value) {
  if (!isNaN(value)) {
    currentInput = currentInput + value;
    document.getElementById("inputext").value = currentInput;
  }
}


function saveOperator(value) {
  if (firstOperand === "" && operator === "" && currentInput === "") {
    return;
  }

  if (firstOperand === "" && operator === "") {
    firstOperand = currentInput;
    operator = value;
    currentInput = "";
  } else {
    // firstOperand sudah terisi
    // operator sudah terisi

    if (currentInput !== "") {
      calculate();
      operator = value;
    } else {
      operator = value;
    }
  }
}

function calculate() {
  if (operator === "") {
    return;
  } else if (currentInput === "") {
    return;
  }

  secondOperand = currentInput;
  currentInput = "";

  if (operator === "+") {
    currentInput = parseFloat(firstOperand) + parseFloat(secondOperand);
  } else if (operator === "-") {
    currentInput = parseFloat(firstOperand) - parseFloat(secondOperand);
  } else if (operator === "*") {
    currentInput = parseFloat(firstOperand) * parseFloat(secondOperand);
  } else if (operator === "/") {
    if (secondOperand !== 0) {
      currentInput = parseFloat(firstOperand) / parseFloat(secondOperand);
    } else {
      currentInput = "Error: Divide by 0";
    }
  }

  document.getElementById("inputext").value = currentInput;

  firstOperand = currentInput;
  operator = "";
  currentInput = "";
}
