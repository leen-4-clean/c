function calculate() {
    const firstNumber = document.getElementById("firstNumber").value;
    const secondNumber = document.getElementById("secondNumber").value;
    const operation = document.getElementById("operation").value;

    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        alert("Please enter valid numbers!");
        return;
    }

    const num1 = parseFloat(firstNumber);
    const num2 = parseFloat(secondNumber);

    let result;
    switch (operation) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            if (num2 === 0) {
                alert("Division by zero is not allowed!");
                return;
            }
            result = num1 / num2;
            break;
        default:
            alert("Invalid operation!");
            return;
    }

    document.getElementById("result").textContent = `The result is: ${result}`;
}
