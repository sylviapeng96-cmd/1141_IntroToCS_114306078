function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        alert("Error: Division by zero is not allowed!");
        return null;
    }
    return a / b;
}

function calculate() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var operator = document.getElementById("operator").value;
    var result;

    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers!");
        return;
    }

    switch (operator) {
        case "+":
            result = add(num1, num2);
            break;
        case "-":
            result = subtract(num1, num2);
            break;
        case "*":
            result = multiply(num1, num2);
            break;
        case "/":
            result = divide(num1, num2);
            break;
    }

     document.getElementById("result").innerText = "Result = " + result.toFixed(2);
 }

 function updateButtonText() {
    var operator = document.getElementById("operator").value;
    var button = document.getElementById("calcBtn");

    switch (operator) {
        case "+":
            button.innerText = "Add";
            break;
        case "-":
            button.innerText = "Subtract";
            break;
        case "*":
            button.innerText = "Multiply";
            break;
        case "/":
            button.innerText = "Divide";
            break;
    }
}