console.log("Hello!")

// let num1 = prompt("enter the first Number");
// let num2 = prompt("enter the second Number");
// let operator = prompt("enter operator");
let result;
let lastResult = 0;
function add (num1, num2){
    return +num1 + +num2;
}

function subtract (num1, num2){
    return num1 - num2;
}

function divide (num1, num2){
    return num1 / num2;
}

function multiply (num1, num2){
    return num1 * num2;
}

function operate(operator, num1, num2){
    switch(operator){
        case "+":
            result = add(num1, num2)
            break;
        case "-":
            result = subtract(num1, num2)
            break;
        case "/":
            result = divide(num1, num2)
            break;
        case "*":
            result = multiply(num1, num2)
            break;
    }
    return result;
}

let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('button'));

let preOperatorNum = 0;
let postOperatorNum = 0;
let selectedOperator;
let values = new Array;
let repatitiveEntry = false;


let displayValue = '';

function showValue(finalResult){
    if (finalResult == "Infinity"){
        finalResult = "No Number!"
    }
    else if(finalResult % 1 != 0){
        finalResult =  Math.round(finalResult * 100)/100
    }
    display.innerText = finalResult
}


function updateDisplayValue(clickedButton){
    switch(clickedButton){
        case"c":
            display.innerText = 0;
            repatitiveEntry = false;
            displayValue = '';
            values = new Array;
            preOperatorNum = ''
            postOperatorNum = ''
            break;

        case "+":
            selectedOperator = "+"
            if(repatitiveEntry == false){
                repatitiveEntry = true
                console.log(values)
                values[0] = displayValue;
                values[1] = selectedOperator;
                displayValue = ''
                showValue(displayValue)
                console.log("first click")
                console.log(values)
            }
            else {
                postOperatorNum = displayValue
                values[2] = postOperatorNum
                
                console.log("second press")
                console.log(values)
                lastResult = operate(values[1], values[0], values[2])
                values[1] = selectedOperator;
                values[0] = lastResult
                displayValue = ''
                showValue(lastResult)
               
            }
            break;
        
            case "-":
                selectedOperator = "-"
                if(repatitiveEntry == false){
                    repatitiveEntry = true
                    console.log(displayValue)
                    preOperatorNum = displayValue
                    console.log(values)
                    values[0] = preOperatorNum;
                    values[1] = selectedOperator;
                    displayValue = ''
                    showValue(displayValue)
                    console.log("first click")
                    console.log(values)
                }
                else {
                    postOperatorNum = displayValue
                    values[2] = postOperatorNum
                    
                    console.log("second press")
                    console.log(values)
                    lastResult = operate(values[1], values[0], values[2])
                    values[1] = selectedOperator;
                    
                    displayValue = ''
                    showValue(lastResult)
                    values[0] = lastResult
                }
                break;

                case "*":
                    selectedOperator = "*"
                    if(repatitiveEntry == false){
                        repatitiveEntry = true
                        console.log(displayValue)
                        preOperatorNum = displayValue
                        console.log(values)
                        values[0] = preOperatorNum;
                        values[1] = selectedOperator;
                        displayValue = ''
                        showValue(displayValue)
                        console.log("first click")
                        console.log(values)
                    }
                    else {
                        postOperatorNum = displayValue
                        values[2] = postOperatorNum
                        
                        console.log("second press")
                        console.log(values)
                        lastResult = operate(values[1], values[0], values[2])
                        values[1] = selectedOperator;
                        
                        displayValue = ''
                        showValue(lastResult)
                        values[0] = lastResult
                    }
                    break;

                    case "/":
                        selectedOperator = "/"
                        if(repatitiveEntry == false){
                            repatitiveEntry = true
                            console.log(displayValue)
                            preOperatorNum = displayValue
                            console.log(values)
                            values[0] = preOperatorNum;
                            values[1] = selectedOperator;
                            displayValue = ''
                            showValue(displayValue)
                            console.log("first click")
                            console.log(values)
                        }
                        else {
                            postOperatorNum = displayValue
                           
                            
                                values[2] = postOperatorNum
                            
                                console.log("second press")
                                console.log(values)
                                
                                lastResult = operate(values[1], values[0], values[2])
                                values[1] = selectedOperator;
                            
                            
                            displayValue = ''
                            showValue(lastResult)

                            values[0] = lastResult
                        }
                        break;

                    case "=":
                        console.log(values[0])
                        console.log(values[1])
                        console.log(values[2])
                        
                    
                            repatitiveEntry = true;
                            postOperatorNum = displayValue;
                            values[2] = postOperatorNum;
                            console.log(values)
                            if(values[0] == undefined || values[1] == undefined || values[2] == ""){
                                alert("you didnt enter sufficent entries");
                            }
                            else{
                                lastResult = operate(values[1], values[0], values[2])
                                // displayValue = ''
                                displayValue =''
                                showValue(lastResult);
                                values[0] = lastResult
                                console.log(lastResult);
                        }  
                        break;
                    case "←":
                        if (displayValue.length > 0){
                            displayValue = displayValue.slice(0,-1);
                            showValue(displayValue)
                        }
                        break;

                    case ".":
                        if(!displayValue.includes(".")){
                            displayValue += clickedButton;
                        }
                        else {
                             alert("You can't add two decimals")
                    }
                       
                        break;
                    default:
                        postOperatorNum = displayValue;
                        values[2] = postOperatorNum;
                        lastResult = operate(values[1], values[0], values[2])
                        console.log("number clicked")
                        console.log(values)
                        console.log(displayValue)    
                        displayValue += clickedButton;
                        showValue(displayValue)
                        console.log(displayValue)
                        break; 
    }    
}

buttons.map(singleButton => {
    singleButton.addEventListener('click', (e) => {
        let buttonText = e.target.innerText
        updateDisplayValue(buttonText);
        
    });
});


