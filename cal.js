let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

function add(){
    result = num1 + num2
    document.getElementById("sum-el").textContent = 'Sum: ' + result 
}


function subtract(){
    result = num1 - num2
    document.getElementById("sum-el").textContent = 'Subtract: ' + result 
}


function divide(){
    result = num1 / num2
    document.getElementById("sum-el").textContent = 'Divide: ' + result 
}


function multiply(){
    result = num1 * num2
    document.getElementById("sum-el").textContent = 'Divide: ' + result 

}

