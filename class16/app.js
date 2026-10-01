// var num = Math.random()*2 +1
// var newNum = Math.floor(num)
// console.log(newNum)
// if(newNum === 1){
//     console.log("head")
// }
// else{
//     console.log("tails")
// }

var user = prompt("Enter head or tail")
var num = Math.random()*2 +1
var newNum = Math.floor(num)
var flag1 = false
var flag2 = false
console.log(newNum)
if(newNum === 1 && user === "head"){
    flag1 = true
    console.log("you win")
}
if(newNum === 2 && user === "tails"){
    flag2 = true
    console.log("you win")
}
else if(flag1 === "false" || flag2 === "false"){
    console.log("you lose")
}else{
    console.log("invalid")
}
