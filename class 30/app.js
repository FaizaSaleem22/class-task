var display = document.getElementById("display")
var num1 = ""
var num2 =""
var operator = ""
var isSecondNum = false
function appendValue(input){
    if(!isSecondNum && (input !== "+" && input !== "-" && input !== "/" && input !== "*" && input !== "%")){
        display.value += input
        num1 = input
    }
    else if(!isSecondNum && (input === "+" || input === "-" || input === "/" || input === "*" || input === "%")){
        
        display.value= input
        operator = input
        isSecondNum = true
    }
    else if(isSecondNum && (input !== "+" && input !== "-" && input !== "/" && input !== "*" && input !== "%")){
        
        display.value += input
        num2 = input
    }
}
num1= Number(num1)
num2= Number(num2)
var result = 
function calculate(){
    if(operator === "+"){
        display.value= num1+num2
    }
    else if(operator === "-"){
        display.value= num1-num2
    }
    else if(operator === "*"){
        display.value= num1*num2
    }
    else if(operator === "/"){
        display.value= num1/num2
    }
    else if(operator === "%"){
        display.value= num1%num2
    }
    display.value= result
}
