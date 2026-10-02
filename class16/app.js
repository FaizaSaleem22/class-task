// var num = Math.random()*2 +1
// var newNum = Math.floor(num)
// console.log(newNum)
// if(newNum === 1){
//     console.log("head")
// }
// else{
//     console.log("tails")
// }

var user = prompt("Enter heads or tails").toLowerCase();
var num = Math.random()*2 +1;
var newNum = Math.floor(num);
console.log(newNum);
if(newNum === 1 && user === "heads"){
    console.log("you win");
}
else if(newNum === 2 && user === "tails"){
    console.log("you win");
}
else if ((newNum === 1 && user === "tails") || (newNum === 2 && user === "heads")){
    console.log("you lose");
}
else if(user !== "heads" || user !== "tails"){
    console.log("invalid");
}
