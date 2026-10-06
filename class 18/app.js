var today = new Date();
var todayYear = Number (today.getFullYear())
var userDOB = prompt("Enter your date of birth in mm-dd-yyyy")
var userDate = new Date(userDOB)
var userYear = Number (userDate.getFullYear())
var age = todayYear - userYear
console.log("Your age is: ", age)

var today = new Date();
var hour = today.getHours()
var format = ""
if(hour >=12){
    format = "PM"
}else{
    format = "AM"
}

if(hour >12 ){
    hour = hour-12
    
    console.log(hour, format)
}
else if (hour === 0){
    hour = 12
   
    console.log(hour , format)
}