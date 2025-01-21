function showValue(value) {
    const textbox = document.getElementById("textbx");
    textbox.value += value;
}




let currentValue = '';  
let num1 = null;  
let num2 = null;  
let operator = null;  

function showValue(value) {  
    const textbox = document.getElementById("textbx");  

    if (value === '=') {    
        if (num1 !== null && operator !== null) {  
            num2 = parseFloat(currentValue);  
            rechnen(num1, num2, operator);  
        }  
    } else {   
        if (!isNaN(value) || value === '.') {  
            currentValue += value;  
            textbox.value = currentValue;   
        } else {  
           
            if (currentValue !== '') {  
                num1 = parseFloat(currentValue); 
                currentValue = '';  
            }  
            operator = value;
        }  
    }  
}  

function rechnen(num1, num2, operator) {  
    const textbox = document.getElementById("textbx");  
    let result;  

    if (operator === '/' && num2 === 0) {  
        textbox.value = "Das Teilen durch Null ist nicht erlaubt";  
        reset();  
        return;  
    }  

    switch (operator) {  
        case '+':  
            result = num1 + num2;  
            break;  
        case '-':  
            result = num1 - num2;  
            break;  
        case '*':  
            result = num1 * num2;  
            break;  
        case '/':  
            result = num1 / num2;  
            break;  
        default:  
            textbox.value = "Ungültiger Operator";  
            reset();  
            return;  
    }  

    textbox.value = result;  
    reset();  
}  

function reset() {  
    currentValue = '';  
    num1 = null;  
    num2 = null;  
    operator = null;  
}  