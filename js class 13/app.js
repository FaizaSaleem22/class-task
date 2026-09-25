var birthMonth = prompt("Enter your birth month")
var birthLength = birthMonth.length
if (birthLength > 3){
   var userBday = birthMonth.slice(0,3)
}
else{
    console.log(birthMonth, birthLength)
}
console.log (userBday, birthLength)

var user = prompt("where do you study?");
var userAns = user.toLowerCase()
var flag = false
for (var i=0; i<userAns.length; i++){
    if(userAns.slice(i, i+4) ==="smit" || userAns.slice(i, i+6) ==="aptech"){
        flag = true
        console.log("You can participate")
    }
}
if (flag === false){
    console.log("you are not eligible")
}

// short 
var user = prompt("where do you study?");
var userAns = user.toLowerCase()
console.log(userAns.indexOf("smit"));
if(userAns.indexOf("smit") === -1){
    console.log("you can not participate")
}else{
    console.log("you are eligible")
}
