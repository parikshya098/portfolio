function calculate() {
    // Hide all error messages
    document.getElementById('error-op1').style.display = 'none';
    document.getElementById('error-op').style.display = 'none';
    document.getElementById('error-op2').style.display = 'none';

    // Get the operand values and operator
    var operand1 = document.getElementById('operand1').value;
    var operator = document.getElementById('operator').value;
    var operand2 = document.getElementById('operand2').value;
    var result = 0;

    // Validate operands and operator
    if (!operand1) {
        document.getElementById('error-op1').style.display = 'block';
        return;
    }

    if (!operator) {
        document.getElementById('error-op').style.display = 'block';
        return;
    }

    if (!operand2) {
        document.getElementById('error-op2').style.display = 'block';
        return;
    }

    // Parse operands
    operand1 = parseFloat(operand1);
    operand2 = parseFloat(operand2);

    // Check for division by zero
    if (operator === '/' && operand2 === 0) {
        document.getElementById('result').value = 'Error: Division by zero';
        return;
    }

    // Perform calculation
    switch (operator) {
        case '+':
            result = operand1 + operand2;
            break;
        case '-':
            result = operand1 - operand2;
            break;
        case '*':
            result = operand1 * operand2;
            break;
        case '/':
            result = operand1 / operand2;
            break;
        default:
            result = 'Invalid operator';
    }

    // Display result
    document.getElementById('result').value = result;
    }

    function clearForm() {
        // Clear all inputs
        document.getElementById('operand1').value = '';
        document.getElementById('operator').selectedIndex = 0;
        document.getElementById('operand2').value = '';
        document.getElementById('result').value = '';

        // Hide all error messages
        document.getElementById('error-op1').style.display = 'none';
        document.getElementById('error-op').style.display = 'none';
        document.getElementById('error-op2').style.display = 'none';
    }
    
